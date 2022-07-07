import { computed, watch } from 'vue';

/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
/* wwEditor:end */

import dayjs from 'dayjs';
import * as localesList from 'dayjs/locale';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    locales: {},
    lang: 'en',
    backupLang: 'en',

    async onLoad() {
        const lang = computed(() => wwLib.$store.getters['front/getLang']);

        for (let locale of localesList.default) {
            this.locales[locale.key] = require(`dayjs/locale/${locale.key}.js`);
        }

        watch(
            lang,
            lang => {
                this.lang = lang;
            },
            { immediate: true }
        );
    },
    /*=============================================m_ÔÔ_m=============================================\
        Dayjs
    \================================================================================================*/
    formatDate(date, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a string date';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    getSecond(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).get('second');
    },
    getMinute(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).get('minute');
    },
    getHour(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).get('hour');
    },
    getDay(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).date();
    },
    getDayOfWeek(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).get('day');
    },
    getMonth(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/get
        return dayjs(date, defaultFormats, false).get('month') + 1;
    },
    getYear() {
        return dayjs().get('year');
    },
    getDayOfYear(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).dayOfYear();
    },
    getWeekOfYear(date = new Date().toISOString()) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false).week();
    },
    fromTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .from(dayjs(date, defaultFormats, false), withoutSuffix);
    },
    toTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .to(dayjs(date, defaultFormats, false), withoutSuffix);
    },
    addSeconds(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .add(amount, 'second')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addMinutes(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .add(amount, 'minute')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addHours(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .add(amount, 'hour')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addDays(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];

        return dayjs(date, defaultFormats, false)
            .add(amount, 'day')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addMonths(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .add(amount, 'month')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addYears(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .add(amount, 'year')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setSecond(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .set('second', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setMinute(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .set('minute', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setHour(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .set('hour', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setDay(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date, defaultFormats, false)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        return dayjs(date, defaultFormats, false)
            .date(amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setDayOfWeek(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date, defaultFormats, false)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        return dayjs(date, defaultFormats, false)
            .set('day', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        if (amount === 0)
            return dayjs(date, defaultFormats, false)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/set
        amount -= 1;
        return dayjs(date, defaultFormats, false)
            .set('month', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setYear(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];
        return dayjs(date, defaultFormats, false)
            .set('year', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    compareDate(date1, date2, precision, float = false) {
        if (!date1) throw 'First parameter must be a date';
        if (!date2) throw 'Second parameter must be a date';
        if (!precision) throw 'Third parameter must be a string';

        const defaultFormats = [
            this.settings.publicData.favoriteFormat,
            'MMMM D, YYYY h:mm A',
            'YYYY-MM-DDTHH:mm:ss.sssZ',
            'x',
        ];

        return dayjs(date2, defaultFormats, false).diff(dayjs(date1, defaultFormats, false), precision, float);
    },
};
