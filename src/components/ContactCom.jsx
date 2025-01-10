import React, { useState } from 'react';

const ContactCom = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Add email functionality here
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactInfo}>
        <h2 style={styles.title}>Contact Info</h2>
        <p style={styles.subtitle}>Here is my latest work. Where you will find my creativity < br /> and working talents.</p>
        
        <div style={styles.contactDetails}>
          <div style={styles.contactItem}>
            <i className="fas fa-map-marker-alt" style={styles.icon}></i>
            <div>
              <p style={styles.contactLabel}>Address</p>
              <p style={styles.contactText}>Islamadab, Pakistan</p>
            </div>
          </div>

          <div style={styles.contactItem}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            <div>
              <p style={styles.contactLabel}>Email Address</p>
              <p style={styles.contactText}>emranfaiz786@gmail.com</p>
            </div>
          </div>

          <div style={styles.contactItem}>
            <i className="fas fa-phone-alt" style={styles.icon}></i>
            <div>
              <p style={styles.contactLabel}>Phone</p>
              <p style={styles.contactText}>+92 303 8485313</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.contactForm}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formRow}>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>Free Consultation</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',  // Centers horizontally
    alignItems: 'center',      // Centers vertically
    padding: '40px',
    backgroundColor: '#0c0c0c',
    color: '#fff',
    height: '486px',
  },  
  contactInfo: {
    width: '35%',
    marginLeft: '20px',
  },
  contactForm: {
    width: '35%',
    border: '1px solid #fff',
    backgroundColor: '#040402',
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#e2b479',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '30px',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contactItem: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#e2b479',
  },
  contactLabel: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#ddd',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
  },
  input: {
    padding: '10px',
    backgroundColor: '#040402',
    border: '1px solid #fff',
    color: '#fff',
    width: '48%',
  },
  textarea: {
    padding: '10px',
    backgroundColor: '#040402',
    border: '1px solid #fff',
    color: '#fff',
    height: '150px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#e2b479',
    border: 'none',
    color: '#090909',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '1rem',
    width: '100%',
  },
};

export default ContactCom;
