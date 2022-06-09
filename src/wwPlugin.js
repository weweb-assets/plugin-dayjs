import { computed } from 'vue';

/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
/* wwEditor:end */

import dayjs from 'dayjs';
import * as localesList from 'dayjs/locale';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    locales: {},
    lang: computed(() => wwLib.$store.getters['front/getLang']),

    async onLoad() {
        for (let locale of localesList.default) {
            this.locales[locale.key] = require(`dayjs/locale/${locale.key}.js`);
        }
    },
    /*=============================================m_ÔÔ_m=============================================\
        Dayjs
    \================================================================================================*/
    formatDate(date, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a string date';
        return dayjs(date)
            .locale(this.locales[locale] || 'en')
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
        return dayjs(date).dayOfYear();
    },
    getWeekOfYear(date) {
        if (!date) throw 'First parameter must be a date as string';
        return dayjs(date).week();
    },
    fromTime(date, withoutSuffix = false) {
        if (!date) throw 'First parameter must be a date as string';
        return dayjs().from(dayjs(date), withoutSuffix);
    },
    toTime(date, withoutSuffix = false) {
        if (!date) throw 'First parameter must be a date as string';
        return dayjs().to(dayjs(date), withoutSuffix);
    },
    addSeconds(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'second')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addMinutes(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'minute')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addHours(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'hour')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addDays(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'day')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addMonths(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'month')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addYears(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'year')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setSecond(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .set('second', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setMinute(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .set('minute', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setHour(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .set('hour', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setDayOfWeek(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date)
                .locale(this.locales[locale] || 'en')
                .format(format);

        return dayjs(date)
            .set('day', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setDayOfMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0)
            return dayjs(date)
                .locale(this.locales[locale] || 'en')
                .format(format);

        return dayjs(date)
            .date(amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        if (amount === 0)
            return dayjs(date)
                .locale(this.locales[locale] || 'en')
                .format(format);

        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/set
        amount -= 1;
        return dayjs(date)
            .set('month', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setYear(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        return dayjs(date)
            .set('year', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    compareDate(date1, date2, precision, float = false) {
        if (!date1) throw 'First parameter must be a date';
        if (!date2) throw 'Second parameter must be a date';
        if (!precision) throw 'Third parameter must be a string';
        return dayjs(date1).diff(dayjs(date2), precision, float);
    },
};
