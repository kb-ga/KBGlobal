const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");

initializeApp();
const db = getFirestore();

// Pivot to us-east1 and remove custom memory to bypass regional quota issues
setGlobalOptions({ 
    region: "us-east1"
});

/**
 * Triggered when a new document is added to the 'inquiries' collection.
 */
exports.processinquiry = onDocumentCreated({
    document: "inquiries/{inquiryId}",
    database: "(default)",
}, async (event) => {
    const data = event.data.data();
    const inquiryId = event.params.inquiryId;

    logger.info(`New inquiry received: ${inquiryId}`, data);

    try {
        await db.collection("mail").add({
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
        logger.info("Mail document created in 'mail' collection.");
    } catch (error) {
        logger.error("Error creating mail document:", error);
    }
});
