### dateISO

Is deprecated, please use date or dateRealtime instead.

### date

Return a date as ISO string `YYYY-MM-DDTHH:mm:ss.sssZ`, can take the same parameter as `new Date()` in javascript.

### dateRealtime

Return the current date as ISO string `YYYY-MM-DDTHH:mm:ss.sssZ`, refreshing every seconds

### toDateISO

Set a date in ISO format, which is the universal format required for the date functions to work properly `YYYY-MM-DDTHH:mm:ss.sssZ`<br/><br/>
`toDateISO(date, inputFormat)` <br/><br/>

If no parameter is entered for `inputFormat`, your favorite format will be used. If you have no favorite format defined, the ISO format will be used.

### formatDate

Returns a date in the favorite format or requested format. For example, format `DD.MM.YYYY HH:mm`<br/><br/>
`formatDate(dateISO)` or `formatDate(dateISO, format)`<br/><br/>
or `formatDate(dateISO, format, locale)` If no parameter is entered for `locale`, the language of the page will be selected if it is supported. The backup locale in case of non support is English

### fromTime

Returns the string of relative time from now <br/><br/>
`fromTime(dateISO)` or `fromTime(dateISO, false)` <br/><br/>
If you pass true as second parameter, you can get the value without the suffix.<br/><br/>

or `fromTime(dateISO, true, locale)` If no parameter is entered for `locale`, the language of the page will be selected if it is supported. The backup locale in case of non support is English

### toTime

Returns the string of relative time to X <br/><br/>
`toTime(dateISO)` or `toTime(dateISO, false)` <br/><br/>
If you pass true as second parameter, you can get the value without the suffix.<br/><br/>

or `toTime(dateISO, true, locale)` If no parameter is entered for `locale`, the language of the page will be selected if it is supported. The backup locale in case of non support is English

### compareDate

Indicates the difference between two date-time in the specified unit (seconds, minutes, etc...). <br/><br/>
By default, compareDate will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass true as the fourth argument. <br/><br/>

`compareDate(dateISO1, dateISO2, unit)` or `compareDate(dateISO1, dateISO2, unit, floating)`

Available units:

`day` or `d`, `week` or `w`, `quarter` or `Q`, `month` or `M`, `year` or `y`, `hour` or `h`, `minute` or `m`, `second` or `s`, `millisecond` or `ms`

### getSecond

Return the second of the given date, if no date is given, return the current second<br/><br/>
`getSecond(dateISO)`

### getMinute

Return the minute of the given date, if no date is given, return the current minute<br/><br/>
`getMinute(dateISO)`

### getHour

Return the hour of the given date, if no date is given, return the current second<br/><br/>
`getHour(dateISO)`

### getDayOfWeek

Return the day of the week of the given date, if no date is given, return the current day of the week<br/><br/>
`getDayOfWeek(dateISO)`

### getDay

Return the day of the month of the given date, if no date is given, return the current day of the month<br/><br/>
`getDay(dateISO)`

### getDayOfYear

Return the day of the year of the given date, if no date is given, return the current day of the year<br/><br/>
`getDayOfYear(dateISO)`

### getWeekOfYear

Return the week of the year of the given date, if no date is given, return the current week of the year<br/><br/>
`getWeekOfYear(dateISO)`

### getMonth

Return the month of the given date, if no date is given, return the current month<br/><br/>
`getMonth(dateISO)`

### getYear

Return the year of the given date, if no date is given, return the current year<br/><br/>
`getYear(dateISO)`

### addSeconds

Returns a new date as a result of adding a given number of seconds to a date <br/><br/>
`addSeconds(dateISO, amount)`

### addMinutes

Returns a new date as a result of adding a given number of minutes to a date <br/><br/>
`addMinutes(dateISO, amount)`

### addHours

Returns a new date as a result of adding a given number of hours to a date <br/><br/>
`addHours(dateISO, amount)`

### addDays

Returns a new date as a result of adding a given number of days to a date <br/><br/>
`addDays(dateISO, amount)`

### addMonths

Returns a new date as a result of adding a given number of months to a date <br/><br/>
`addMonths(dateISO, amount)`

### addYears

Returns a new date as a result of adding a given number of years to a date <br/><br/>
`addYears(dateISO, amount)`

### setSecond

Returns a new date with the second specified in parameters <br/><br/>
`setSecond(dateISO, amount)`

### setMinute

Returns a new date with the minute specified in parameters <br/><br/>
`setMinute(dateISO, amount)`

### setHour

Returns a new date with the hour specified in parameters <br/><br/>
`setHour(dateISO, amount)`

### setDay

Returns a new date for the current month with the day specified in parameters <br/><br/>
`setDay(dateISO, amount)`

### setDayOfWeek

Returns a new date for the current week with the day specified in parameters <br/><br/>
`setDayOfWeek(dateISO, amount)`

### setMonth

Returns a new date with the month specified in parameters <br/><br/>
`setMonth(dateISO, amount)`

### setYear

Returns a new date with the year specified in parameters <br/><br/>
`setYear(dateISO, amount)`

### toTimestamp

Returns the timestamp value for a given date as a number `1548381600000`<br/><br/>
`toTimestamp(dateISO)`<br/><br/>

A timestamp is the number of milliseconds since the Unix Epoch (01/01/1970)

### getBrowserTimezone

Returns the current browser timezone as a string `"America/Toronto"`<br/><br/>
`getBrowserTimezone()`

### convertDateTimezone

Returns the given date with the specified timezone as a string `"2013-11-18T11:55:20-05:00"`<br/><br/>
`convertDateTimezone(dateISO, timezone)` <br/><br/>

If no parameter is entered for `timezone`, the current browser timezone will be used.<br/><br/>

You can use a third parameter to preserve the time during the conversion, it will keep the time and apply the timezone on top.<br/><br/>
`convertDateTimezone(dateISO, timezone, true)`

### formatDateTimezone

Returns a date in given format `DD.MM.YYYY HH:mm` for a specified timezone `America/Toronto`<br/><br/>
`formatDateTimezone(dateISO, format, timezone)`<br/><br/>
or `formatDateTimezone(dateISO, format, timezone, locale)` If no parameter is entered for `locale`, the language of the page will be selected if it is supported. The backup locale in case of non support is English
