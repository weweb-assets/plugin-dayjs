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
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    getSecond() {
        return dayjs().get('second');
    },
    getMinute() {
        return dayjs().get('minute');
    },
    getHour() {
        return dayjs().get('hour');
    },
    getDay() {
        return dayjs().date();
    },
    getDayOfWeek() {
        return dayjs().get('day');
    },
    getMonth() {
        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/get
        return dayjs().get('month') + 1;
    },
    getYear() {
        return dayjs().get('year');
    },
    getDayOfYear(date) {
        if (!date) throw 'First parameter must be a date as string';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat).dayOfYear();
    },
    getWeekOfYear(date) {
        if (!date) throw 'First parameter must be a date as string';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat).week();
    },
    fromTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .from(dayjs(date, defaultFormat), withoutSuffix);
    },
    toTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .to(dayjs(date, defaultFormat), withoutSuffix);
    },
    addSeconds(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'second')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addMinutes(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'minute')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addHours(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'hour')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addDays(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'day')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addMonths(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'month')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    addYears(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .add(amount, 'year')
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setSecond(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .set('second', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setMinute(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .set('minute', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setHour(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .set('hour', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setDay(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date, defaultFormat)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        return dayjs(date, defaultFormat)
            .date(amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setDayOfWeek(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date, defaultFormat)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        return dayjs(date, defaultFormat)
            .set('day', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        if (amount === 0)
            return dayjs(date, defaultFormat)
                .locale(this.locales[locale] || this.backupLang)
                .format(format);

        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/set
        amount -= 1;
        return dayjs(date, defaultFormat)
            .set('month', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    setYear(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';
        return dayjs(date, defaultFormat)
            .set('year', amount)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    compareDate(date1, date2, precision, float = false) {
        if (!date1) throw 'First parameter must be a date';
        if (!date2) throw 'Second parameter must be a date';
        if (!precision) throw 'Third parameter must be a string';
        const defaultFormat = this.settings.publicData.favoriteFormat || 'MMMM D, YYYY h:mm A';

        return dayjs(date2, defaultFormat).diff(dayjs(date1, defaultFormat), precision, float);
    },
};
