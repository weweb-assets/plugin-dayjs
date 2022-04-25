import { computed } from 'vue';

/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
/* wwEditor:end */

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import * as localesList from 'dayjs/locale';
let LOCALES = {};
for (let locale of localesList.default) {
    LOCALES[locale.key] = require(`dayjs/locale/${locale.key}.js`);
}

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    lang: computed(() => {
        return wwLib.$store.getters['front/getLang'] in LOCALES ? wwLib.$store.getters['front/getLang'] : 'en';
    }),

    async onLoad(settings) {
        console.log('LOCALES 📙', LOCALE);
        console.log(this.formatDate(date.Now()));
    },
    /*=============================================m_ÔÔ_m=============================================\
        Dayjs
    \================================================================================================*/
    formatDate(date, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a string date';
        return dayjs(date).locale(LOCALES[locale]).format(format);
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
    getDayOfYear() {
        return dayjs().dayOfYear();
    },
    getYeekOfYear() {
        return dayjs().week();
    },
    getMonth() {
        return dayjs().get('month');
    },
    getYear() {
        return dayjs().get('year');
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
        return dayjs(date).add(amount, 'second').locale(LOCALES[locale]).format(format);
    },
    addMinutes(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).add(amount, 'minute').locale(LOCALES[locale]).format(format);
    },
    addHours(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).add(amount, 'hour').locale(LOCALES[locale]).format(format);
    },
    addDays(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).add(amount, 'day').locale(LOCALES[locale]).format(format);
    },
    addMonths(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).add(amount, 'month').locale(LOCALES[locale]).format(format);
    },
    addYears(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).add(amount, 'year').locale(LOCALES[locale]).format(format);
    },
    setSecond(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'Second parameter must be a number';
        return dayjs(date).set('second', amount).locale(LOCALES[locale]).format(format);
    },
    setMinute(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date).set('minute', amount).locale(LOCALES[locale]).format(format);
    },
    setHour(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date).set('hout', amount).locale(LOCALES[locale]).format(format);
    },
    setDay(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date).set('day', amount).locale(LOCALES[locale]).format(format);
    },
    setMonth(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date).set('month', amount).locale(LOCALES[locale]).format(format);
    },
    setYear(date, amount, format = this.settings.publicData.favoriteFormat, locale = this.lang.value) {
        if (!date) throw 'First parameter must be a date';
        if (!amount) throw 'First parameter must be a number';
        return dayjs(date).set('year', amount).locale(LOCALES[locale]).format(format);
    },
    compareDate(date1, date2, precision, float = false) {
        if (!date1) throw 'First parameter must be a date';
        if (!date2) throw 'Second parameter must be a date';
        if (!precision) throw 'Third parameter must be a string';
        return dayjs(date1).diff(dayjs(date2), precision, float);
    },
};
