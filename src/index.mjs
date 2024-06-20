import {
    readCsvAndCreateJsonLocales,
    uploadLocalizations,
    downloadGoogleSheetAsCsv,
    handleCsvFile,
} from './functions.mjs';

const SPREADSHEET_ID = '1gVINlPqdb2OalQKqd8bkduC2A9ZRoAjTfXYRTmIhyUA';
const SHEET_NAME = 'ChatBot';
const UNHANDLED_CSV_PATH = 'src/data/chatbot-0.csv';
const CSV_PATH = 'src/data/chatbot.csv';
const MODULE =  'chatbot';

/*
Языки для DEV: en, ru, kz, id, de
Языки для QA: en, ru, kz, id, de
Языки для Preprod: en, ru, kz, id, de
Языки для KZ: en, ru, kz
Языки для EU: en, ru, de
Языки для ID: en, id
*/

export const SUPPORTED_LNGS = ['en', 'ru', 'kz', 'id', 'de'];
// export const SUPPORTED_LNGS = ['en', 'ru', 'kz'];
// CHANGE TOKEN
// const TOKEN = ''

const BASE_URL = 'https://dms.dar-dev.zone'; // DEV
// const BASE_URL = 'https://dms.dar-qa.zone'; // QA
// const BASE_URL = 'https://stage-dms.dar-qa.zone' // STAGE
// const BASE_URL = 'https://dms.dar.io'; // PREPROD
// const BASE_URL = 'https://app.darlean.kz'; // PROD http://app.darlean.kz , http://app.darlean.id , http://app.darlean.com

const generateJsonParams = { // params to read csv file and generate JSON
    csvPath: CSV_PATH, // csv file from which json files for each supported language will be generated
    module: MODULE,
    groupName: `${MODULE}_rnm`,
};

const uploadParams = {
    token: TOKEN,
    baseUrl: BASE_URL,
    module: MODULE,
};

(async () => {
    await downloadGoogleSheetAsCsv(SPREADSHEET_ID, SHEET_NAME, UNHANDLED_CSV_PATH);
    await handleCsvFile(UNHANDLED_CSV_PATH, CSV_PATH);
    await readCsvAndCreateJsonLocales(generateJsonParams);
    await uploadLocalizations(uploadParams);
})();
