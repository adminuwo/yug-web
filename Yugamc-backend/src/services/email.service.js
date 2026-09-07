const { transporter } = require('../config/email');
const env = require('../config/env');
const { escapeHTML } = require('../utils/html');

const sendChatRegistrationEmail = async (name, email) => {
  const safeName = escapeHTML(name);
  const safeEmail = escapeHTML(email);
  const timestamp = new Date().toLocaleString();

  const mailOptions = {
    from: env.EMAIL_USER,
    to: 'admin@uwo24.com',
    subject: 'New User Registered - YUG AMC',
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1;">New User Registration</h2>
          <p>A new user has registered on the YUG AMC Assistant.</p>
          <hr/>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('[EMAIL SUCCESS] Chat registration notification sent.');
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send chat registration email:', error.message);
  }
};

const sendContactLeadEmail = async ({ name, phone, email, requirement, project, message, leadId }) => {
  const safeName = escapeHTML(name);
  const safePhone = escapeHTML(phone);
  const safeEmail = escapeHTML(email);
  const safeRequirement = escapeHTML(requirement);
  const safeProject = escapeHTML(project || 'N/A');
  const safeMessage = escapeHTML(message || 'N/A');
  const safeLeadId = escapeHTML(leadId ? leadId.toString() : '');

  const mailOptions = {
    from: env.EMAIL_USER,
    to: env.EMAIL_USER,
    replyTo: email,
    subject: `New Lead: ${safeRequirement} - ${safeProject}`,
    html: `
      <h2>New Contact Source: YUG AMC Website</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Requirement:</strong> ${safeRequirement}</p>
      <p><strong>Preferred Project:</strong> ${safeProject}</p>
      <p><strong>Message:</strong> ${safeMessage}</p>
      ${safeLeadId ? `<p><small>Database ID: ${safeLeadId}</small></p>` : ''}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('[EMAIL SUCCESS] Contact lead notification sent.');
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send contact lead email:', error.message);
  }
};

const sendBookVisitEmail = async ({ name, phone, email, location, budget, visitDate, timeSlot, bookingId }) => {
  const safeName = escapeHTML(name);
  const safePhone = escapeHTML(phone);
  const safeEmail = escapeHTML(email);
  const safeLocation = escapeHTML(location || 'N/A');
  const safeBudget = escapeHTML(budget || 'N/A');
  const safeVisitDate = escapeHTML(visitDate);
  const safeTimeSlot = escapeHTML(timeSlot || 'N/A');
  const safeBookingId = escapeHTML(bookingId ? bookingId.toString() : 'N/A');
  const timestamp = new Date().toLocaleString();

  const mailOptions = {
    from: env.EMAIL_USER,
    to: 'admin@uwo24.com',
    replyTo: email,
    subject: `New Site Visit Booking: ${safeName}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #c46a4a;">New Site Visit Booking</h2>
        <p>A new site visit has been booked through the YUG AMC website.</p>
        <hr/>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Preferred Location:</strong> ${safeLocation}</p>
        <p><strong>Budget:</strong> ${safeBudget}</p>
        <p><strong>Visit Date:</strong> ${safeVisitDate}</p>
        <p><strong>Time Slot:</strong> ${safeTimeSlot}</p>
        <p><strong>Booking ID:</strong> ${safeBookingId}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('[EMAIL SUCCESS] Booking notification sent to admin@uwo24.com');
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send booking email:', error.message);
  }
};

module.exports = {
  sendChatRegistrationEmail,
  sendContactLeadEmail,
  sendBookVisitEmail
};
