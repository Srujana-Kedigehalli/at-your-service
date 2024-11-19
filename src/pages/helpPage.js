import React from 'react';
import "./helpPage.css"
function HelpPage() {
  return (
    <div className="help-page">
      <h2 className="page-title">Help & Support</h2>
      
      <section className="help-section">
        <h3 className="section-title">How to Book a Service</h3>
        <p>To book a service, go to the "Book a New Service" section on your dashboard, select the service you need, and provide the required details.</p>
      </section>

      <section className="help-section">
        <h3 className="section-title">How to Manage Your Profile</h3>
        <p>To update your profile, go to the "Profile" section, where you can edit your personal information, contact details, and preferences.</p>
      </section>

      <section className="help-section">
        <h3 className="section-title">FAQs</h3>
        <ul className="faq-list">
          <li><strong>Q:</strong> How do I cancel a booking?<br /><strong>A:</strong> You can cancel a booking by going to your "Bookings" section and selecting the option to cancel.</li><br/>
          <li><strong>Q:</strong> What if I have a problem with my service provider?<br /><strong>A:</strong> You can contact support through the "Contact Us" section for assistance.</li>
        </ul>
      </section>

      <section className="help-section">
        <h3 className="section-title">Contact Us</h3>
        <p>If you need further help, feel free to reach out to us at: <a href="mailto:support@at-your-service.com" className="contact-link">support@at-your-service.com</a></p>
      </section>
    </div>
  );
}

export default HelpPage;
