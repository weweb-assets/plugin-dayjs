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
            name: 'getDayOfWeek',
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
            name: 'getDayOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
        },
        {
            name: 'getWeekOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
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
            arrity: 2,
        },
        {
            name: 'addMinutes',
            arrity: 2,
        },
        {
            name: 'addHours',
            arrity: 2,
        },
        {
            name: 'addDays',
            arrity: 2,
        },
        {
            name: 'addMonths',
            arrity: 2,
        },
        {
            name: 'addYears',
            arrity: 2,
        },
        {
            name: 'setSecond',
            arrity: 2,
        },
        {
            name: 'setMinute',
            arrity: 2,
        },
        {
            name: 'setHour',
            arrity: 2,
        },
        {
            name: 'setDay',
            arrity: 2,
        },
        {
            name: 'setMonth',
            arrity: 2,
        },
        {
            name: 'setYear',
            arrity: 2,
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
