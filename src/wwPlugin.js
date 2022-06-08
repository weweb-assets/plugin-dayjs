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

        console.log('LOCALES 📙', this.locales);
        console.log('FORMAT 🐠', wwLib.wwPlugins.dayjs.formatDate(Date.now()));
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
        return dayjs().get('month');
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
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'second')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addMinutes(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'minute')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addHours(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'hour')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addDays(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'day')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addMonths(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'month')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    addYears(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .add(amount, 'year')
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setSecond(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date)
            .set('second', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setMinute(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date)
            .set('minute', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setHour(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date)
            .set('hout', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setDay(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date)
            .set('day', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date)
            .set('month', amount)
            .locale(this.locales[locale] || 'en')
            .format(format);
    },
    setYear(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
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
