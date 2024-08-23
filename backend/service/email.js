const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "calebchris001@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ from, subject, body }) => {
  try {
    const info = await transporter.sendMail({
      subject,
      from: "New Contact From Portfolio calebchris001@gmail.com",
      to: "calebchris000@gmail.com",
      html: body,
    });
    console.log("Email sent", info.messageId);
  } catch (e) {
    return "failure";
  }
};

module.exports = {
  sendEmail,
};
