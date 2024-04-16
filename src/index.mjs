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

export const SUPPORTED_LNGS = ['en', 'ru', 'kz', 'id', 'de'];
// CHANGE TOKEN
const TOKEN = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI1Y2Q0MmZjMy0xOWRiLTQ4OTUtYWVlMC04ZWI2ZGY2NThhM2MvMzY3Y2MyYzgtMmM2My00M2RlLTgzMDYtNDE1MTk3MDMzMDJiIiwiZXhwIjoxNzEzMzMzMTYxLCJpYXQiOjE3MTMyNDY3NjEsImlzcyI6Imh0dHBzOi8vZ3JpZmZvbi5pbyIsInN1YiI6ImM4ZWE1M2QzLWZiMzctNDY2OS04YzQzLTRkODUzZjc2ODBjNSIsIm5vbmNlIjoiYjUyNGM5NDgtNjViMS00NmUyLWE0NDItMDBkNGUyMTUzYjgwIiwiYWNyIjoib2F1dGgyIiwiYXpwIjoiMzY3Y2MyYzgtMmM2My00M2RlLTgzMDYtNDE1MTk3MDMzMDJiIiwiZW1haWwiOiJhcGFwa2V2aWNoQHJubS5kZXYiLCJuYW1lIjoiQWxleGFuZHIgUGFwa2V2aWNoIn0.toasHmDynXg6sxHdxPLK6T_GCEhGNzcCXv6h2wT6USOQ8WxZsIH5WcT9SZK4xcNxhA40UuHHT8trT7l2_rnNFH_2bYe66XpAVIxr3lGjIV189M8xBvOVwMU3Jczzs8Pyn2YRqkAM59vOpl91xY9LS7kyS84w_6jh99uVIFwQjDVV-_b_YmeGevw0oX6qbYB3gi9gzSKTrfEah3-veb_GVD_4DIKiVqrRg-trV1-ipxVWP8XODsKxkNtMEm1oRoCRRUGO4F53tg_UTFKFWoeLkOQrz_SaVbnzqfNR6UnRPwXe5ymxb6W3-G502CDYqwkKlZx9Ilizcqs1JZ6DmIDjTg';
const BASE_URL = 'https://dms.dar-dev.zone'; // DEV
// const BASE_URL = 'https://dms.dar-qa.zone'; // QA
// const BASE_URL = 'https://dms.dar.io'; // PREPROD
// const BASE_URL = 'https://app.darlean.kz'; // PROD

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
    // await uploadLocalizations(uploadParams);
})();
