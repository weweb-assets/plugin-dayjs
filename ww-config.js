import management from './ww-management.json';

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
    formulas: management.formulas,
};
