export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.favoriteFormat;
            },
        },
    },
    formulas: [
        {
            name: 'formatDate',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'Format', type: 'string' },
            ],
        },
        {
            name: 'getSecond',
            arrity: 0,
        },
        {
            name: 'getMinute',
            arrity: 0,
        },
        {
            name: 'getHour',
            arrity: 0,
        },
        {
            name: 'getDay',
            arrity: 0,
        },
        {
            name: 'getMonth',
            arrity: 0,
        },
        {
            name: 'getYear',
            arrity: 0,
        },
        {
            name: 'fromTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
            ],
        },
        {
            name: 'toTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
            ],
        },
        {
            name: 'addSeconds',
            arrity: 0,
        },
        {
            name: 'addMinutes',
            arrity: 0,
        },
        {
            name: 'addHours',
            arrity: 0,
        },
        {
            name: 'addDays',
            arrity: 0,
        },
        {
            name: 'addMonths',
            arrity: 0,
        },
        {
            name: 'addYears',
            arrity: 0,
        },
        {
            name: 'setSecond',
            arrity: 0,
        },
        {
            name: 'setMinute',
            arrity: 0,
        },
        {
            name: 'setHour',
            arrity: 0,
        },
        {
            name: 'setDay',
            arrity: 0,
        },
        {
            name: 'setMonth',
            arrity: 0,
        },
        {
            name: 'setYear',
            arrity: 0,
        },
        {
            name: 'compareDate',
            arrity: 3,
            parameters: [
                { name: 'Date1', type: 'string' },
                { name: 'Date1', type: 'string' },
                { name: 'Precision', type: 'string' },
                { name: 'Float', type: 'boolean' },
            ],
        },
    ],
};
