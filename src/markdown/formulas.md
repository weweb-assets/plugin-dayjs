### formatDate

Returns a date in the favorite format or requested format. For example, format `DD.MM.YYYY HH:mm`<br/><br/>
`formatDate(date)` or `formatDate(date, format)`

### getSecond

Return the second of the given date, if no date is given, return the current second<br/><br/>
`getSecond(date)`

### getMinute

Return the minute of the given date, if no date is given, return the current minute<br/><br/>
`getMinute(date)`

### getHour

Return the hour of the given date, if no date is given, return the current second<br/><br/>
`getHour(date)`

### getDayOfWeek

Return the day of the week of the given date, if no date is given, return the current day of the week<br/><br/>
`getDayOfWeek(date)`

### getDay

Return the day of the month of the given date, if no date is given, return the current day of the month<br/><br/>
`getDay(date)`

### getDayOfYear

Return the day of the year of the given date, if no date is given, return the current day of the year<br/><br/>
`getDayOfYear(date)`

### getWeekOfYear

Return the week of the year of the given date, if no date is given, return the current week of the year<br/><br/>
`getWeekOfYear(date)`

### getMonth

Return the month of the given date, if no date is given, return the current month<br/><br/>
`getMonth(date)`

### getYear

Return the year of the given date, if no date is given, return the current year<br/><br/>
`getYear(date)`

### fromTime

Returns the string of relative time from now <br/><br/>
`fromTime(date)` or `fromTime(date, true)` <br/><br/>
If you pass true as second parameter, you can get the value without the suffix

### toTime

Returns the string of relative time to X <br/><br/>
`toTime(date)` or `toTime(date, true)` <br/><br/>
If you pass true as second parameter, you can get the value without the suffix

### addSeconds

Returns a new date as a result of adding a given number of seconds to a date <br/><br/>
`addSeconds(date, amount)`

### addMinutes

Returns a new date as a result of adding a given number of minutes to a date <br/><br/>
`addMinutes(date, amount)`

### addHours

Returns a new date as a result of adding a given number of hours to a date <br/><br/>
`addHours(date, amount)`

### addDays

Returns a new date as a result of adding a given number of days to a date <br/><br/>
`addDays(date, amount)`

### addMonths

Returns a new date as a result of adding a given number of months to a date <br/><br/>
`addMonths(date, amount)`

### addYears

Returns a new date as a result of adding a given number of years to a date <br/><br/>
`addYears(date, amount)`

### setSecond

Returns a new date with the second specified in parameters <br/><br/>
`setSecond(date, amount)`

### setMinute

Returns a new date with the minute specified in parameters <br/><br/>
`setMinute(date, amount)`

### setHour

Returns a new date with the hour specified in parameters <br/><br/>
`setHour(date, amount)`

### setDay

Returns a new date for the current month with the day specified in parameters <br/><br/>
`setDay(date, amount)`

### setDayOfWeek

Returns a new date for the current week with the day specified in parameters <br/><br/>
`setDayOfWeek(date, amount)`


### setMonth

Returns a new date with the month specified in parameters <br/><br/>
`setMonth(date, amount)`

### setYear

Returns a new date with the year specified in parameters <br/><br/>
`setYear(date, amount)`

### compareDate

Indicates the difference between two date-time in the specified unit (seconds, minutes, etc...). <br/><br/>
By default, compareDate will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass true as the third argument. <br/><br/>

`compareDate(date1, date2, unit)` or `compareDate(date1, date2, unit, true)`

Available units:

`day` or `d`, `weed` or `w`, `quarter` or `Q`, `month` or `M`, `year` or `y`, `hour` or `h`, `minute` or `m`, `second` or `s`, `millisecond` or `ms`
