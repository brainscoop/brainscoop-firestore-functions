const functions = require('firebase-functions');
const dateTime = require('node-datetime');

var now = dateTime.create().format('Y-m-d H:M:S');

exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((event) => {
    return event.data.ref.update({
      'joinedAt': now
    }, {merge: true});
});
