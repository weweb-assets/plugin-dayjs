import dayjs from 'dayjs';

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Dayjs
    \================================================================================================*/
    formatDate(date, format) {
        return dayjs(date).format(format);
    },
    getSecond() {
        return dayjs.second();
    },
    getMinute() {
        return dayjs.minute();
    },
    getHour() {
        return dayjs.hour();
    },
    getDay() {
        return dayjs.day();
    },
};
