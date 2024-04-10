import fs from 'fs';
import {readFile} from 'fs/promises';
import csv from 'csv-parser';
import fetch from 'node-fetch';

const SUPPORTED_LNGS = ['en', 'ru', 'kz', 'id', 'de'];

const readCSVFile = async (filePath) => {
    const results = [];

    await new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    });

    return results;
};

const writeToJsonFile = async (data, filePath) => {
    const jsonData = JSON.stringify(data);
    await fs.promises.writeFile(filePath, jsonData);
};

const createJsonFilesWithLocales = async (results, groupName, fileNamePrefix) => {
    for (let i = 0; i < SUPPORTED_LNGS.length; i++) {
        const language = SUPPORTED_LNGS[i];
        const data = {
            [groupName]: {},
        };
        for (let j = 0; j < results.length; j++) {
            const result = results[j];
            data[groupName][result.key] = result[language];
        }
        await writeToJsonFile(data, `src/data/${fileNamePrefix}-${language}.json`);
    }
};

export const postLocale = async ({token, baseUrl, module, lang, data}) => {
    const url = `${baseUrl}/api/v1/dictionary-api/localization/decode/json?module=${module}&lang=${lang}`;
    console.log('post new data to url:', url);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        body: JSON.stringify(data),
    };

    const resp = await fetch(url, requestOptions);
    console.log('response status:', resp.status);
    if (resp.status === 200) {
        console.log(`You can check results here: ${baseUrl}/api/v1/dictionary-api/localization/all?module=${module}&lang=${lang}`);
    }
    if (resp.status !== 200) {
        const json = await resp.json();
        console.log('respData:', json);
    }
};

const readJsonFile = async (filePath) => {
    const data = await readFile(filePath, 'utf8');
    return JSON.parse(data);
};

export const readCsvAndCreateJsonLocales = async ({csvPath, groupName, module}) => {
    const results = await readCSVFile(csvPath);
    await createJsonFilesWithLocales(results, groupName, module);
};

export const uploadLocalizations = async ({token, baseUrl, module}) => {
    for (let i = 0; i < SUPPORTED_LNGS.length; i++) {
        const lang = SUPPORTED_LNGS[i];
        const filePath = `src/data/${module}-${lang}.json`;
        const data = await readJsonFile(filePath);
        await postLocale({token, baseUrl, module, data, lang});
    }
};