import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import backgroundImage from '../assets/images/background.jpg';
import img1 from '../assets/images/img1.png';

const Header = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);  // Correctly handle hover state
  const [clientCount, setClientCount] = useState(0);  // State to hold the animated client count

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 150) {
        count += 1;
        setClientCount(count);
      } else {
        clearInterval(interval);
      }
    }, 10);  // Increment the count every 10ms (you can adjust speed by changing this value)

    return () => clearInterval(interval);  // Clean up the interval on component unmount
  }, []);

  return (
    <div style={styles.home}>
      <section style={styles.intro}>
        <div style={styles.textContainer}>
          <h2 style={styles.introTitle}>Hello I’m</h2>
          <h1 style={styles.introTitle1}>IMRAN FAIZ</h1>
          <p style={styles.introDescription}>Innovative Full Stack Developer Crafting <br /> Dynamic Web Experiences.</p>
          <div style={styles.contactButtonWrapper}>
            <Link
              to="/"
              style={{
                ...styles.btn,
                ...(isBtnHovered ? styles.btnHover : {}),
              }}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
            >
              Let's Get Started
            </Link>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={img1} alt="Profile" style={styles.image} />
        </div>
      </section>
      <div style={styles.clientInfo}>
        <h3 style={styles.clientText}>{clientCount}+ </h3> 
        <h3><span style={styles.clientSpan}>Happy Clients</span></h3>
      </div>
    </div>
  );
};

const styles = {
  home: {
    fontFamily: 'sans-serif',
    // backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#040402',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // padding: '20px',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative',  // Ensure that the content is contained within the full height
  },
  intro: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',  // Adjusts layout for space between text and image
    textAlign: 'left',
    // padding: '80px 20px',  // Adds vertical padding to adjust spacing
    // gap: '20px',  // Adds gap between text and image
    // flexWrap: 'wrap',  // Makes the layout responsive by wrapping items on smaller screens
    flexGrow: 1,  // Allows the intro section to grow and take available space
  },
  textContainer: {
    flex: 1,
    maxWidth: '40%',
    paddingLeft: '220px',  // Adds right padding to ensure content doesn't touch the image
  },
  imageContainer: {
    flex: 1,
    maxWidth: '40%',
    display: 'flex',
    justifyContent: 'center',  // Centers the image horizontally
    paddingRight: '120px',
  },
  introTitle: {
    fontSize: '3rem',
    marginBottom: '20px',  // Adds a bottom margin to title
  },
  introTitle1: {
    color: '#e2b479',
    fontSize: '5rem',
    marginBottom: '20px',  // Adjusts space below the main title
  },
  introDescription: {
    // color: '#e2b479',
    fontSize: '2rem',
    marginBottom: '30px',  // Adds space below the description
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover',  // Ensures the image scales correctly
  },
  btnHover: {
    backgroundColor: '#e2b479',
  },
  contactButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  clientInfo: {
    position: 'absolute',  // Makes the client info section position absolute at the bottom
    bottom: '30px',  // Adjust this value to fine-tune the positioning
    // paddingLeft: '600px',
    transform: 'translateX(-50%)',  // Centers the "Happy Clients" section horizontally
    textAlign: 'center',  // Centers the text
  },
  clientText: {
    fontSize: '2.5rem',
    paddingLeft: '530px',
    marginBottom: '10px'
  },
  clientSpan: {
    color: '#e2b479',  // Corrected inline style for "Happy Clients" text
    fontSize: '1.2rem',
    paddingLeft: '570px',
  },
  btn: {
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    borderRadius: '50px',
    border: '2px solid #e2b479',
    transition: 'background-color 0.3s ease',
  },
};

export default Header;
