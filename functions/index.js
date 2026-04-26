const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport. 
// RECOMMENDATION: Run the following commands to set your credentials securely:
// firebase functions:config:set email.user="karthik@kb-ga.com" email.pass="YOUR_APP_PASSWORD"
const emailUser = functions.config().email?.user || "karthik@kb-ga.com";
const emailPass = functions.config().email?.pass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
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
        from: `"Sovereign AI Gateway" <${emailUser}>`,
        to: "karthik@kb-ga.com",
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

      if (!emailPass) {
        console.warn("Email password not set in functions config. Skipping email send.");
        return null;
      }

      try {
        await transporter.sendMail(mailOptions);
        console.log("Notification email sent successfully to Karthik@kb-ga.com");
      } catch (error) {
        console.error("Error sending notification email:", error);
      }

      return null;
    });
