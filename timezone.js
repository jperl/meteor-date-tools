var expectedTimezone = null;

// This can be a moment timezone string or a timezone offset number
var deviceTimezone = null;

var timezoneToShowDep = new Tracker.Dependency();

/**
 * Set the timezone the user is expecting their times to be displayed in.
 * @param timezone This can be a moment timezone string or a timezone offset number.
 */
DateTools.setExpectedTimezone = function (timezone) {
  if (timezone === expectedTimezone) return;

  expectedTimezone = timezone;
  timezoneToShowDep.changed();
};

/**
 * If there is a device timezone and expected timezone and they are
 * different return the expected timezone, otherwise return false (reactive).
 * Ex. device timezone is CST, expected timezone is EST, returns EST
 * @returns {Boolean} || {String}
 */
DateTools.timezoneToShow = function () {
  timezoneToShowDep.depend();

  if (!expectedTimezone || !deviceTimezone) return false;

  var expectedOffset = moment.tz.zone(expectedTimezone).parse();
  var deviceOffset = deviceTimezone;

  if (typeof deviceTimezone === 'string') {
    deviceOffset = moment.tz.zone(deviceTimezone).parse();
  }

  if (expectedOffset === deviceOffset) return false;

  return expectedTimezone;
};

/**
 * Update the device timezone. On Cordova this uses a plugin,
 * on the browser this uses getDateOffset.
 */
DateTools.updateDeviceTimezone = function () {
  var self = this;

  // Get the timezone offset from the cordova plugin
  if (Meteor.isCordova) {
    navigator.globalization.getDatePattern(function (date) {
      if (!date || !date.timezone || date.timezone === deviceTimezone) return;

      // iOS timezone formats are already in the same format as moment timezones
      // XXX check on other devices besides android and iOS
      var mappedTimezone = self.ANDROID_TO_MOMENT_TIMEZONE_MAP[date.timezone];
      if (deviceTimezone === mappedTimezone) return;

      deviceTimezone = mappedTimezone || date.timezone;
      timezoneToShowDep.changed();
    });

    return;
  }

  // Get the timezone offset on the browser
  var timezoneOffset = new Date().getTimezoneOffset();
  if (deviceTimezone === timezoneOffset) return;

  deviceTimezone = timezoneOffset;
  timezoneToShowDep.changed();
};
