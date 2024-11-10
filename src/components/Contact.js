import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Your Name" required />
        <input type="email" className="contact-input" placeholder="Your Email" required />
        <textarea className="contact-textarea" placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
