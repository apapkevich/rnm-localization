install node (v14 and above) and npm

```shell
npm install
```

after uncommenting necessary functions in `index.mjs`

```shell
npm run start
```

1. generate csv file from bot/chat spreadsheet (with `key,en,ru,kz,id,de` as first row, 
example in `data/examples`) and put it into data directory
2. generate json files using function `readCsvAndCreateJsonLocales`
3. check localization json files in data folder
4. update `TOKEN` variable using your token from `BASE_URL`
5. upload localizations using function `uploadLocalizations`
6. check localizations, example url: https://dms.dar-dev.zone/api/v1/dictionary-api/localization/all?module=bot&lang=en

