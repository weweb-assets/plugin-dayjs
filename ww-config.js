export default {
    /* wwEditor:start */
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid() {
                return true;
            },
        },
    },
    /* wwEditor:end */
    formulas: [
        {
            name: 'dateISO',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'date',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'dateRealtime',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'toDateISO',
            arrity: 1,
            deprecated: true,
        },
        {
            name: 'formatDate',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'Format', type: 'string' },
                { name: 'Locale', type: 'string' },
            ],
            deprecated: true,
        },
        {
            name: 'toTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
                { name: 'Locale', type: 'string' },
            ],
            deprecated: true,
        },
        {
            name: 'fromTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
                { name: 'Locale', type: 'string' },
            ],
            deprecated: true,
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
            deprecated: true,
        },
        {
            name: 'getSecond',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getMinute',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getHour',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getDay',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getDayOfWeek',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getMonth',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getYear',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'getDayOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
            deprecated: true,
        },
        {
            name: 'getWeekOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
            deprecated: true,
        },
        {
            name: 'addSeconds',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'addMinutes',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'addHours',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'addDays',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'addMonths',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'addYears',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setSecond',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setMinute',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setHour',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setDay',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setDayOfWeek',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setMonth',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'setYear',
            arrity: 2,
            deprecated: true,
        },
        {
            name: 'toTimestamp',
            arrity: 1,
            deprecated: true,
        },
        {
            name: 'getBrowserTimezone',
            arrity: 0,
            deprecated: true,
        },
        {
            name: 'convertDateTimezone',
            arrity: 2,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'Timezone', type: 'string' },
                { name: 'Preserve', type: 'boolean' },
            ],
            deprecated: true,
        },
        {
            name: 'formatDateTimezone',
            arrity: 3,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'Format', type: 'string' },
                { name: 'Timezone', type: 'string' },
                { name: 'Locale', type: 'string' },
            ],
            deprecated: true,
        },
    ],
};
