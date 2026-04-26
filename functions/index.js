const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport using the default SMTP transport and a GMAIL account.
// For production, consider using a service like SendGrid, Mailgun, or Postmark.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_NOTIFICATION_EMAIL@gmail.com", // Replace with your sender email
    pass: "YOUR_GMAIL_APP_PASSWORD",          // Replace with your app password
  },
});

/**
 * Triggered when a new document is added to the 'inquiries' collection.
 */
exports.onInquiryCreated = functions.firestore
    .document("inquiries/{inquiryId}")
    .onCreate(async (snapshot, context) => {
      const data = snapshot.data();
      const inquiryId = context.params.inquiryId;

      console.log(`New inquiry received: ${inquiryId}`, data);

      const mailOptions = {
        from: '"Sovereign AI Gateway" <YOUR_NOTIFICATION_EMAIL@gmail.com>',
        to: "Karthik@kb-ga.com",
        subject: `New Inquiry from ${data.name} - Sovereign AI Gateway`,
        html: `
          <h3>New Gateway Inquiry</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Requirement:</strong> ${data.requirement}</p>
          <p><strong>ID:</strong> ${inquiryId}</p>
          <hr />
          <p>This inquiry has been saved to your Firestore database.</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Notification email sent successfully to Karthik@kb-ga.com");
      } catch (error) {
        console.error("Error sending notification email:", error);
      }

      return null;
    });
