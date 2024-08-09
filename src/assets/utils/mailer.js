const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinhnh.2312@gmail.com',
    pass: 'bnmmahhirqmoliay'
  }
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'vinhnh.2312@gmail.com',
    to,
    subject,
    text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: `Email sent: ${info.response}` };
  } catch (error) {
    return { success: false, message: `Error sending email: ${error.message}` };
  }
};

module.exports = sendEmail;
