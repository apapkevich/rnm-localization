import {postLocale, readCsvAndCreateJsonLocales, uploadLocalizations} from './functions.mjs';

// params to read csv file and generate JSON
const generateJsonForBotParams = {
    csvPath: 'src/data/bot.csv', // csv file from which json files for each supported language will be generated
    module: 'bot',
    groupName: 'bot_rnm',
};

const generateJsonForChatParams = {
    csvPath: 'src/data/chat.csv',
    module: 'chat',
    groupName: 'chat_rnm',
};

// params to post locales
const TOKEN = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI1Y2Q0MmZjMy0xOWRiLTQ4OTUtYWVlMC04ZWI2ZGY2NThhM2MvMzY3Y2MyYzgtMmM2My00M2RlLTgzMDYtNDE1MTk3MDMzMDJiIiwiZXhwIjoxNzEyODM2MTIzLCJpYXQiOjE3MTI3NDk3MjMsImlzcyI6Imh0dHBzOi8vZ3JpZmZvbi5pbyIsInN1YiI6ImM4ZWE1M2QzLWZiMzctNDY2OS04YzQzLTRkODUzZjc2ODBjNSIsIm5vbmNlIjoiYmM0Mzg4NWYtMjVhZS00ZDQ0LTlmNWYtYzEyNWYyNWQ0MjY1IiwiYWNyIjoib2F1dGgyIiwiYXpwIjoiMzY3Y2MyYzgtMmM2My00M2RlLTgzMDYtNDE1MTk3MDMzMDJiIiwiZW1haWwiOiJhcGFwa2V2aWNoQHJubS5kZXYiLCJuYW1lIjoiQWxleGFuZHIgUGFwa2V2aWNoIn0.afr6yBeAFSj39WKbPaYqEHOeu3Oh6kEJk0NOzOwqdbwL3S4gLV0fbon7t1NKb4M-5LOiaD5k0s0tSsdZXy_kABHeWpeoCLGQS20TYVB0a3QCGThFDzm15-vMjffXb_Gwu7S9k47G66htbUn7DfkR-HEEslPWEH_SW3hKZNVXCsZ4CdihVoY9-e9pSrkPeDSQ53w-FvFHIbNUdbQOfrRyMUiVh5TQ6uey1Z5Qs_IJYhEdy7ipTPtABwODiiU22WabLvZS5HCmQSsVhKM6SUK7sgaLlBxaVVwVOeQ2cWgf8LXotrni8eFcub1y5zT5qq_TtM4taijA3Wo3-XM980j97A';
const BASE_URL = 'https://dms.dar-dev.zone'; // DEV
// const BASE_URL = 'https://dms.dar-qa.zone'; // QA
// const BASE_URL = 'https://dms.dar.io'; // PREPROD
// const BASE_URL = 'https://app.darlean.kz'; // PROD

const baseUploadParams = {
    token: TOKEN,
    baseUrl: BASE_URL,
};

const uploadBotParams = {
    ...baseUploadParams,
    module: 'bot',
};
const uploadChatParams = {
    ...baseUploadParams,
    module: 'chat',
};

(async () => {
    // await readCsvAndCreateJsonLocales(generateJsonForBotParams);
    // await uploadLocalizations(uploadBotParams);

    // await readCsvAndCreateJsonLocales(generateJsonForChatParams);
    // await uploadLocalizations(uploadChatParams);
})();
