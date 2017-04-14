var OAUTH2_CLIENT_ID = '282832524144-57f9fhvruvdipn9oohmf2cj5t1c6fqa5.apps.googleusercontent.com' ;
var OAUTH2_SCOPES = ['https://www.googleapis.com/auth/youtube'];

googleApiClientReady = function() {
  console.log("loaded");
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

function checkAuth() {
  console.log("checking");
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.

function handleAuthResult(authResult) {
  console.log("processing result");
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.

    $('.pre-auth').hide();
    $('.post-auth').show();
  } else {
    console.log("broke");
    // Make the #login-link clickable. Attempt a non-imediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
      }, handleAuthResult);
    });
  }
}

function loadAPIClientInterfaces() {
  console.log("loading client");
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}
