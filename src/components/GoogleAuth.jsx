var GoogleAuth = require('google-auth-library')
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '')
client.verifyIdToken(
    token,
    CLIENT_ID,
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function(e, login) {
      var payload = login.getPayload()
      var userid = payload['sub']
      // If request specified a G Suite domain:
      //var domain = payload['hd'];
    });