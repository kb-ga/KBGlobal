const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Triggered when a new document is added to the 'inquiries' collection.
 * This is where you would add logic to send an email notification,
 * integrate with a CRM (like Salesforce), or ping a Slack channel.
 */
exports.onInquiryCreated = functions.firestore
    .document("inquiries/{inquiryId}")
    .onCreate(async (snapshot, context) => {
      const newValue = snapshot.data();
      const inquiryId = context.params.inquiryId;

      console.log(`New inquiry received: ${inquiryId}`, newValue);

      // Example: Send email notification logic would go here
      // const emailResponse = await sendNotificationEmail(newValue);
      
      return null;
    });
