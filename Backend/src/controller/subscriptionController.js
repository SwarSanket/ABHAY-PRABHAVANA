import { subscription } from "../models/subscription.model.js";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail", // You can use any email service or SMTP server
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create a new subscription
export const createSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email already exists
    const existingSubscription = await subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: "Email already subscribed." });
    }

    const newSubscription = new subscription({ email });
    await newSubscription.save();

    // Path to placeholder image
    const imagePath = path.join(__dirname, "../assets/newsletter-img.png");

    // Log the image path for debugging purposes
    console.log(imagePath);

    // Prepare the email content with an image attachment or embedded image
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Confirmation",
      text: `Thank you for subscribing to our newsletter!`,
      html: `<p>Thank you for subscribing to our newsletter!</p>
             <img src="cid:newsletterImage" alt="Newsletter Image"/>`, // Embed the image in the email
      attachments: [
        {
          filename: "newsletter-img.png", // The name that will appear in the email
          path: imagePath, // Path to the image
          cid: "newsletterImage", // Same cid as in the img src to embed the image
        },
      ],
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });

    res.status(201).json({
      message: "Subscription created successfully.",
      subscription: newSubscription,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the subscription.",
      error: error.message,
    });
  }
};
