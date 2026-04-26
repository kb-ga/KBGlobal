const functions = require("firebase-functions");

/**
 * ABSOLUTE MINIMUM TEST
 * No Admin SDK, No Firestore.
 * If this fails, the issue is 100% in the Google Cloud Account settings.
 */
exports.discoverytest = functions.https.onRequest((req, res) => {
  res.send("Build Pipeline is working!");
});
