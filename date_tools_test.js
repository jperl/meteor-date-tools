Tinytest.add('DateTools.addDays()', function (test) {
  var newDate = DateTools.addDays(new Date(2014, 0, 1), 10);

  test.equal(newDate, new Date(2014, 0, 11));
});

Tinytest.add('DateTools.timezoneToShow()', function (test) {
  // With no expected timezone, timezoneToShow is false
  var timezoneToShow = DateTools.timezoneToShow();
  test.isFalse(timezoneToShow);

  // With an expected timezone and no device timezone,
  // timezoneToShow is false
  DateTools.setExpectedTimezone('America/New_York');
  timezoneToShow = DateTools.timezoneToShow();
  test.isFalse(timezoneToShow);

  // With an expected timezone that is the same as the device timezone,
  // timezoneToShow is false
  DateTools.updateDeviceTimezone();
  timezoneToShow = DateTools.timezoneToShow();
  test.isFalse(timezoneToShow);

  // With an expected timezone that is different than the device timezone,
  // timezoneToShow is the expected timezone.
  var deviceTimezone = new Date().getTimezoneOffset();

  // Ensure the timezone is different than the device's timezone.
  var expectedTimezone = deviceTimezone === 300 ? 'America/Chicago' : 'America/New_York';

  DateTools.setExpectedTimezone(expectedTimezone);
  timezoneToShow = DateTools.timezoneToShow();
  test.equal(timezoneToShow, expectedTimezone);
});

