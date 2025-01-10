import React, { useState } from 'react';

const Idea = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      alert(`Your message: "${message}" has been submitted for a quote!`);
      // You can replace this alert with a real API call to submit the form
    } else {
      alert('Please type a message before submitting!');
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.tagline}>Have an Idea?</p>
      <div style={styles.content}>
        <h1 style={styles.heading}>Let’s Make Something < br / > Amazing Together.</h1>
        <div style={styles.inputContainer}>
          <textarea
            style={styles.textarea}
            placeholder="Type your message here..."
            value={message}
            onChange={handleMessageChange}
          />
          <button style={styles.button} onClick={handleSubmit}>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#040402',
  },
  tagline: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    maxWidth: '800px',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: '650',
    color: '#e2b479',
    marginBottom: '40px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #fff',
    backgroundColor: '#fff',
    width: '650px',
  },
  textarea: {
    width: '100%',
    height: '40px',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    resize: 'none',
    outline: 'none',
    marginTop: '10px',
  },
  button: {
    backgroundColor: 'black',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '18px 28px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
    marginRight: '10px',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

export default Idea;
