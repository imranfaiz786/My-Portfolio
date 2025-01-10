import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import backgroundImage from '../assets/images/background.jpg';
import img1 from '../assets/images/img2.png';

const AboutMe = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);  // Correctly handle hover state
  const [clientCount, setClientCount] = useState(0);  // State to hold the animated client count

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 325) {
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
      <div style={styles.imageContainer}>
          <img src={img1} alt="Profile" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.introTitle}>Why You Hire Me?</h2>
          <p style={styles.introDescription}>I’m Imran Faiz, a Senior Full Stack Web Developer with expertise in the latest technologies like React, Node.js, and JavaScript. I specialize in crafting high-performance, scalable web applications that deliver seamless user experiences. With years of hands-on experience, I transform ideas into innovative digital solutions, ensuring each project is optimized, future-proof, and built to last. Let’s collaborate to bring your vision to life.</p>
          <h3>Imran Faiz</h3>
          <p>– CEO of the company</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  home: {
    fontFamily: 'sans-serif',
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: 'black', // Replaces the background image with a black background color
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // padding: '20px',
    minHeight: '100vh',
    color: '#fff',
    position: 'relative',  // Ensure that the content is contained within the full height
    maxWidth: '80%',
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
    fontSize: '1rem',
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

export default AboutMe;
