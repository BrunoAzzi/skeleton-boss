const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.deleteUser = functions.database.ref('/userList/{userId}').onDelete(
  event => {
    const user = event.data.previous.val();
    return admin.auth().deleteUser(user.uid)
      .then(function() {
        console.log("Successfully deleted user");
      })
      .catch(function(error) {
        console.log("Error deleting user:", error);
      });
  });

exports.createUser = functions.database.ref('/userList/{userId}').onCreate(
  event => {
    const user = event.data.val();
    return admin.auth().createUser({
      email: user.email,
      password: user.password,
      displayName: user.name,
      photoURL: user.avatar,
      disabled: false
    })
      .then(function(data) {
        console.log("Successfully created user");
        return event.data.ref.child('uid').set(data.uid)
          .then(function () {
            console.log("Successfully setted uid in user");
          })
          .catch(function () {
            console.log("Error setted uid in user:", error);
          });
      })
      .catch(function(error) {
        console.log("Error deleting user:", error);
      });
  });
