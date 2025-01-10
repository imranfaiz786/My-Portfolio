import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p style={styles.text}>Copyright © 2025 My Portfolio. All rights reserved.</p>
      </div>
      <div style={styles.icon}>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={styles.icon}></i>
        </a>
        
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/imranfaizweb/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
        
        {/* GitHub Icon */}
        <a href="https://github.com/imranfaiz786" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={styles.icon}></i>
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#040402',
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',  // Center the footer content
    gap: '400px',               // Space between the sections
    alignItems: 'center',
    height: '40px',
  },
  icon: {
    display: 'flex',
    gap: '20px',
    fontSize: '1.5rem', 
    color: '#fff',         // Size of the icons
  },
  text: {
    color: '#fff',
    fontSize: '1rem',
  },
};

export default Footer;
