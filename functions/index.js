const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Triggered when a new document is added to the 'inquiries' collection.
 * This version uses the "Trigger Email" Firebase Extension pattern.
 * Instead of sending the email directly (which requires passwords),
 * it creates a document in the 'mail' collection that the extension picks up.
 */
exports.onInquiryCreated = functions.firestore
    .document("inquiries/{inquiryId}")
    .onCreate(async (snapshot, context) => {
      const data = snapshot.data();
      const inquiryId = context.params.inquiryId;

      console.log(`New inquiry received: ${inquiryId}`, data);

      // Create a document in the 'mail' collection.
      // This is compatible with the "Trigger Email" Firebase Extension.
      try {
        await admin.firestore().collection("mail").add({
          to: "karthik@kb-ga.com",
          message: {
            subject: `New Inquiry from ${data.name} - Sovereign AI Gateway`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #2563eb;">New Gateway Inquiry</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Requirement:</strong> ${data.requirement}</p>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">Inquiry ID: ${inquiryId}</p>
              </div>
            `,
          },
        });
        console.log("Mail document created in 'mail' collection for extension.");
      } catch (error) {
        console.error("Error creating mail document:", error);
      }

      return null;
    });
