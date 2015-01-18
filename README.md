Date Tools [![Build Status](https://travis-ci.org/DispatchMe/meteor-date-tools.svg?branch=master)](https://travis-ci.org/DispatchMe/meteor-date-tools)
=============

This package provides timezone aware formatters. You can set the expected timezone and it will display the timezone if it is different from the device timezone.

##Usage

`meteor add dispatch:date-tools`

```
var expectedTimezone = 'America/New_York';
DateTools.setExpectedTimezone(expectedTimezone);

// You have granular control over updating the device timezone
DateTools.updateDeviceTimezone();
```

Checkout the [example](https://github.com/DispatchMe/meteor-date-tools/tree/master/example).
