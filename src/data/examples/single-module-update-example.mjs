import {postLocale} from '../../functions.mjs';

(async () => {
    const data = {
        'chat': {
            'personal_chat.new.message.title': '{{EMPLOYEE_NAME}}',
            'personal_chat.new.message.body': '{{Message_Body}}',
        },
    };

    const baseUrl = 'https://dms.dar.io';

    await postLocale({
        token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJiYjRmYzA3Ny0zYzgxLTQ0MTktYTRkOC1jMjQ2NmFhMTJiNDIvNGVmMGExNDUtYTAwNy00ZGQzLWE2ZGUtZDYwZjIwYjkzNGU4IiwiZXhwIjoxNzEyNzkzNjAwLCJpYXQiOjE3MTI3NTM5MDgsImlzcyI6Imh0dHBzOi8vZ3JpZmZvbi5pbyIsInN1YiI6IjUwZDhjMzBjLTI2ZDgtNDM3NS05MzJmLWFmNTM0MzVjNmU1YSIsIm5vbmNlIjoiN2FhYTgwMGMtMzU4Ni00ZmQ4LTg0NzQtNjRkOTBiMTVlODJiIiwiYWNyIjoib2F1dGgyIiwiYXpwIjoiNGVmMGExNDUtYTAwNy00ZGQzLWE2ZGUtZDYwZjIwYjkzNGU4IiwiZW1haWwiOiJhcGFwa2V2aWNoQHJubS5kZXYiLCJuYW1lIjoiICJ9.Oac150Lyb6EvCEHZDPj3c4HmrB2uszu1fdYKUQTxkVQYI4dAcHMTV_-vKR0IwKJdQooiaDTj4hzZBzahV4bDkX4JSJliDrnlOs43yI-ZDKQxPMV8vcSofriNAHnKVN9yNWJG-mwh6TYuXsJRkUu3l9ZbcNGEu22FkbqjIKc_kWveJEgAiU9KttZoO-IeCMag6NB7y2v7802t93MfrtjDl1jNhnU1vB_pFE-32ttUSOglquJSx1nv_X6eEoHXuiIRH8yBZCfeLMfWu4dTp0Wtd---NUYjintnytyYYcZWxvKUSxtOjSGOzGCK_ZzYpbXY7qSydWaRSmeVah90r5Q9Lg',
        baseUrl,
        module: 'notifications',
        lang: 'en',
        data,
    });
})();