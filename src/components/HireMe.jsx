import React, { useState } from 'react';
import img1 from '../assets/images/img2.png';

const Hire = () => {
  // State to manage hover effect
  const [hoveredBox, setHoveredBox] = useState(null);

  // Function to handle hover in
  const handleHoverIn = (index) => {
    setHoveredBox(index);
  };

  // Function to handle hover out
  const handleHoverOut = () => {
    setHoveredBox(null);
  };

  return (
    <div style={styles.home}>
      <section style={styles.intro}>
        <div style={styles.imageContainer}>
          <img src={img1} alt="Profile" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.introTitle}>Why You Hire Me?</h2>
          <p style={styles.introDescription}>
          As a skilled full-stack developer, I specialize in crafting high-performance web applications using modern technologies like React.js, Node.js, Python (Flask/Django), MongoDB, MySQL, and Blockchain. I deliver seamless, scalable solutions that combine sleek front-end designs with robust back-end functionality. With a focus on innovation, efficiency, and quality, I ensure your project stands out and performs at its best. Let's turn your ideas into reality with precision and professionalism!
          </p>
          <h3 style={styles.textContainerh3}>Imran Faiz</h3>
          <p>– CEO of the company</p>
        </div>
      </section>

      {/* New Section for Rectangle Boxes */}
      <section style={styles.boxSection}>
        <div
          style={{
            ...styles.box,
            ...(hoveredBox === 1 ? styles.boxHover : {}),
          }}
          onMouseEnter={() => handleHoverIn(1)}
          onMouseLeave={handleHoverOut}
        >
          <i className="fas fa-laptop-code" style={styles.icon}></i>
          <div style={styles.textWrapper}>
            <h1 style={{ ...styles.heading, ...(hoveredBox === 1 ? { color: '#e2b479' } : {}) }}>
              Frontend Development
            </h1>
            <p style={styles.paragraph}>Design sleek, interactive interfaces that engage users.</p>
          </div>
        </div>
        <div
          style={{
            ...styles.box,
            ...(hoveredBox === 2 ? styles.boxHover : {}),
          }}
          onMouseEnter={() => handleHoverIn(2)}
          onMouseLeave={handleHoverOut}
        >
          <i className="fas fa-server" style={styles.icon}></i>
          <div style={styles.textWrapper}>
            <h1 style={{ ...styles.heading, ...(hoveredBox === 2 ? { color: '#e2b479' } : {}) }}>
              Backend Development
            </h1>
            <p style={styles.paragraph}>Create powerful systems that drive smooth performance.</p>
          </div>
        </div>
        <div
          style={{
            ...styles.box,
            ...(hoveredBox === 3 ? styles.boxHover : {}),
          }}
          onMouseEnter={() => handleHoverIn(3)}
          onMouseLeave={handleHoverOut}
        >
          <i className="fas fa-code-branch" style={styles.icon}></i>
          <div style={styles.textWrapper}>
            <h1 style={{ ...styles.heading, ...(hoveredBox === 3 ? { color: '#e2b479' } : {}) }}>
              Full Stack Development
            </h1>
            <p style={styles.paragraph}>Build complete, seamless web solutions from start to finish.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  home: {
    margin: 0,
    padding: 0,
    backgroundColor: '#040402',
  },
  intro: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-40px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '30%',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  textContainer: {
    flex: 2,
    maxWidth: '500px',
    marginRight: '100px',
    marginTop: '60px',
  },
  textContainerh3: {
    color: '#e2b479',
    marginBottom: '12px',
    fontSize: '1.5rem',
  },
  introTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#e2b479',
  },
  introDescription: {
    fontSize: '0.98rem',
    lineHeight: '2',
    marginBottom: '20px',
  },

  // New styles for the rectangle boxes section
  boxSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '0 20px',
    marginBottom: '60px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    width: '20%',
    height: '120px',
    border: '1px solid white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '0 10px',
    cursor: 'pointer',  // Cursor will change to pointer to indicate that the box is interactive
    transition: 'transform 0.3s ease, background-color 0.3s ease',  // Smooth transition for hover effects
  },
  boxHover: {
    transform: 'scale(1.05)',  // Slight zoom effect
  },
  icon: {
    fontSize: '40px',
    marginRight: '15px',
    marginLeft: '8px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    marginTop: '10px',
    marginBottom: '5px',
    fontSize: '1.4rem',
    transition: 'color 0.3s ease', // Smooth color transition for hover
  },
  paragraph: {
    marginTop: '5px',
    marginBottom: '10px',
    fontSize: '0.9rem',
  },
};

export default Hire;
