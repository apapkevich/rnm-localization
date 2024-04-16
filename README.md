install node (v14 and above) and npm

```shell
npm install
```

```shell
npm run start
```

1. generate csv file from Chatbot spreadsheet using `downloadGoogleSheetAsCsv`
2. remove unused columns with `handleCsvFile` 
3. generate json files using `readCsvAndCreateJsonLocales`
4. check localization json files in data folder
5. update `TOKEN` variable using your token from `BASE_URL`
6. upload localizations with `uploadLocalizations`
7. check localizations, example url:
```
https://dms.dar-dev.zone/api/v1/dictionary-api/localization/all?module=chatbot&lang=en
```
