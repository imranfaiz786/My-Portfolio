import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import frontend from '../assets/images/frontend.jpg';
import backend4 from '../assets/images/backend4.jpg';
import backend5 from '../assets/images/backend5.jpg';
import database from '../assets/images/database2.jpg';
import blockchain2 from '../assets/images/blockchain2.jpg';
import blockchain from '../assets/images/blockchain3.jpg';

const PortWork = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div style={styles.container}>
      {/* Text Section and Button in Horizontal Layout */}
      <section style={styles.textSection}>
        <div style={styles.textContent}>
          <h1 style={styles.title}>My Portfolio</h1>
          <p style={styles.description}>
            Here is my latest work. Where you will find my creativity <br /> and my working talents.
          </p>
        </div>
        <div style={styles.contactButtonWrapper}>
          <Link
            to="/home"
            style={{
              ...styles.btn,
              ...(isBtnHovered ? styles.btnHover : {}),
            }}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
          >
            See All My Works
          </Link>
        </div>
      </section>

      {/* Image section for work examples */}
      <section style={styles.imageSection}>
      <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={backend5} alt="Profile" style={styles.image} />
        </div>
          </div>

          <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={blockchain2} alt="Profile" style={styles.image} />
        </div>
          </div>

          <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={database} alt="Profile" style={styles.image} />
        </div>
          </div>

          <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={frontend} alt="Profile" style={styles.image} />
        </div>
          </div>

          <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={backend4} alt="Profile" style={styles.image} />
        </div>
          </div>

          <div style={styles.imageBox1}>
        <div style={styles.imageBox}>
          <img src={blockchain} alt="Profile" style={styles.image} />
        </div>
          </div>
          
      </section>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c0c0c',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px',
  },
  // Text section layout with horizontal alignment for content and button
  textSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '200px',
    width: '100%',
    marginBottom: '40px',
  },
  textContent: {
    color: '#fff',
    maxWidth: '60%', // Limit text width for better readability
  },
  title: {
    fontSize: '3rem',
    marginBottom: '15px',
    color: '#e2b479',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  contactButtonWrapper: {
    display: 'flex',
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'center',
    paddingLeft: '20px', // Space between text and button
  },
  btn: {
    padding: '16px 36px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '50px',
    border: '2px solid #e2b479',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  },
  btnHover: {
    backgroundColor: '#e2b479',
    transform: 'scale(1.05)', // Slight scale-up effect on hover
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center', // Align images horizontally in the center
    gap: '10px', // Space between images
    flexWrap: 'wrap', // Allow wrapping on smaller screens
    paddingTop: '40px',
  },
  imageBox1: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '510px',
    height: '510px',
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default PortWork;
