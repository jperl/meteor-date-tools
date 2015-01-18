DateTools = {};

/**
 * Return a new date with days added or removed.
 * @param {Date} timestamp
 * @param {Number} days
 * @returns {Date}
 */
DateTools.addDays = function (timestamp, days) {
  var newDate = new Date(timestamp);

  newDate.setDate(newDate.getDate() + days);

  return newDate;
};
