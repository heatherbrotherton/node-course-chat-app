//milliseconds for timestamp in UTC

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY, h:mm a'));
