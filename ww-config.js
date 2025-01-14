export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid() {
                return true;
            },
        },
    },
    formulas: [
        {
            name: 'dateISO',
            arrity: 0,
            deprecated: true,
            /* wwEditor:start */
            copilot: {
                description: 'Returns current date in ISO format (Deprecated)',
                returns: 'string'
            }
            /* wwEditor:end */
        },
        {
            name: 'date',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Returns a date as ISO string',
                returns: 'string',
                schema: {
                    args: {
                        type: 'array',
                        description: 'Same parameters as JavaScript new Date()',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'dateRealtime',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Returns current date in ISO format, refreshing every second',
                returns: 'string'
            }
            /* wwEditor:end */
        },
        {
            name: 'toDateISO',
            arrity: 1,
            /* wwEditor:start */
            copilot: {
                description: 'Converts a date to ISO format',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to convert',
                        bindable: true
                    },
                    inputFormat: {
                        type: 'string',
                        description: 'Format of the input date',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'formatDate',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'Format', type: 'string' },
                { name: 'Locale', type: 'string' },
            ],
            /* wwEditor:start */
            copilot: {
                description: 'Formats a date according to specified format',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to format',
                        bindable: true
                    },
                    format: {
                        type: 'string',
                        description: 'Output format pattern',
                        bindable: true
                    },
                    locale: {
                        type: 'string',
                        description: 'Locale for formatting',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'toTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
                { name: 'Locale', type: 'string' },
            ],
            /* wwEditor:start */
            copilot: {
                description: 'Returns relative time to specified date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Target date',
                        bindable: true
                    },
                    withoutSuffix: {
                        type: 'boolean',
                        description: 'Remove ago/in suffix',
                        bindable: true
                    },
                    locale: {
                        type: 'string',
                        description: 'Locale for formatting',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'fromTime',
            arrity: 1,
            parameters: [
                { name: 'Date', type: 'string' },
                { name: 'WithoutSuffix', type: 'boolean' },
                { name: 'Locale', type: 'string' },
            ],
            /* wwEditor:start */
            copilot: {
                description: 'Returns relative time from specified date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Start date',
                        bindable: true
                    },
                    withoutSuffix: {
                        type: 'boolean',
                        description: 'Remove ago/in suffix',
                        bindable: true
                    },
                    locale: {
                        type: 'string',
                        description: 'Locale for formatting',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
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
            /* wwEditor:start */
            copilot: {
                description: 'Compares two dates and returns the difference in specified unit',
                returns: 'number',
                schema: {
                    date1: {
                        type: 'string',
                        description: 'First date to compare',
                        bindable: true
                    },
                    date2: {
                        type: 'string',
                        description: 'Second date to compare',
                        bindable: true
                    },
                    precision: {
                        type: 'string',
                        description: 'Unit of measurement (day, month, year, etc)',
                        bindable: true
                    },
                    float: {
                        type: 'boolean',
                        description: 'Return floating point number',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getSecond',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the second from a date',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract second from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getMinute',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the minute from a date',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract minute from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getHour',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the hour from a date',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract hour from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getDay',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the day of month from a date',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract day from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getDayOfWeek',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the day of week from a date (0-6)',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract day of week from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getMonth',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the month from a date (1-12)',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract month from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getYear',
            arrity: 0,
            /* wwEditor:start */
            copilot: {
                description: 'Gets the year from a date',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract year from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getDayOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
            /* wwEditor:start */
            copilot: {
                description: 'Gets the day of year from a date (1-366)',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract day of year from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'getWeekOfYear',
            arrity: 0,
            parameters: [{ name: 'Date', type: 'string' }],
            /* wwEditor:start */
            copilot: {
                description: 'Gets the week of year from a date (1-53)',
                returns: 'number',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Date to extract week from (optional)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addSeconds',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds seconds to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of seconds to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addMinutes',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds minutes to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of minutes to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addHours',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds hours to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of hours to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addDays',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds days to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of days to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addMonths',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds months to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of months to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'addYears',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Adds years to a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Number of years to add',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'setSecond',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Sets the seconds of a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Second value to set (0-59)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'setMinute',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Sets the minutes of a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',
                        description: 'Minute value to set (0-59)',
                        bindable: true
                    }
                }
            }
            /* wwEditor:end */
        },
        {
            name: 'setHour',
            arrity: 2,
            /* wwEditor:start */
            copilot: {
                description: 'Sets the hours of a date',
                returns: 'string',
                schema: {
                    date: {
                        type: 'string',
                        description: 'Base date',
                        bindable: true
                    },
                    amount: {
                        type: 'number',