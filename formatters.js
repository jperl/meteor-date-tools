/**
 * Format a date (reactive).
 * Ex. Jan 16 5 PM
 * If the timezone is different from the expected timezone, append it.
 * Ex. Jan 16 4 PM CST
 * @param {Date} timestamp
 * @returns {String}
 */
DateTools.dateTimeLong = function (timestamp) {
  timestamp = moment(timestamp);

  var timezoneToShow = this.timezoneToShow();

  if (timezoneToShow) {
    return timestamp.tz(timezoneToShow).format('MMM DDDo LT z');
  }

  return timestamp.format('MMM DDDo LT');
};

/**
 * Format a date (reactive).
 * Ex. 5 PM
 * If the timezone is different from the expected timezone, append it.
 * Ex. 4 PM CST
 * @param {Date} timestamp
 * @returns {String}
 */
DateTools.timeLong = function (timestamp) {
  timestamp = moment(timestamp);

  var timezoneToShow = this.timezoneToShow();

  if (timezoneToShow) {
    return timestamp.tz(timezoneToShow).format('LT z');
  }

  return timestamp.format('LT');
};
