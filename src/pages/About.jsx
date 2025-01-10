import React from 'react';
import Hire from '../components/HireMe';
import Work from '../components/MyWork';
import Customer from '../components/Customers';
import Idea from '../components/Idea';
import AboutCom from '../components/about';

const About = () => {
  return (
    <div style={styles.page}>
      <AboutCom/>
      <Hire/>
      <Work/>
      <Customer/>
      <hr style={styles.line} /> {/* This adds a thin white line */}
      <Idea/>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#040402', // Set background color for the entire page
    color: 'white',             // Optional: set text color to white for contrast
    minHeight: '100vh',         // Ensure the background color fills the viewport
  },
  line: {
    width: '1400px',
    border: 'none',
    borderTop: '1px solid white',
    margin: '0 auto',
    padding: '0',
    marginTop: '0px',
  },
};

export default About;
