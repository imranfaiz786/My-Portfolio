import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);

  // Effect to animate each count
  useEffect(() => {
    let projectCounter = 0;
    let clientCounter = 0;
    let experienceCounter = 0;
    let awardCounter = 0;

    const projectInterval = setInterval(() => {
      if (projectCounter < 365) {
        projectCounter += 1;
        setProjectCount(projectCounter);
      } else {
        clearInterval(projectInterval);
      }
    }, 5);

    const clientInterval = setInterval(() => {
      if (clientCounter < 150) {
        clientCounter += 1;
        setClientCount(clientCounter);
      } else {
        clearInterval(clientInterval);
      }
    }, 10);

    const experienceInterval = setInterval(() => {
      if (experienceCounter < 3) {
        experienceCounter += 1;
        setExperienceCount(experienceCounter);
      } else {
        clearInterval(experienceInterval);
      }
    }, 200);

    const awardInterval = setInterval(() => {
      if (awardCounter < 15) {
        awardCounter += 1;
        setAwardCount(awardCounter);
      } else {
        clearInterval(awardInterval);
      }
    }, 70);

    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
      clearInterval(experienceInterval);
      clearInterval(awardInterval);
    };
  }, []);

  return (
    <div style={styles.statsContainer}>
      <div style={styles.statItem}>
        <h3 style={styles.statNumber}>{projectCount}</h3>
        <p style={styles.statLabel}>Successful Projects</p>
      </div>
      <div style={styles.statItem}>
        <h3 style={styles.statNumber}>{clientCount}+</h3>
        <p style={styles.statLabel}>Satisfied Clients</p>
      </div>
      <div style={styles.statItem}>
        <h3 style={styles.statNumber}>{experienceCount}</h3>
        <p style={styles.statLabel}>Years of Experience</p>
      </div>
      <div style={styles.statItem}>
        <h3 style={styles.statNumber}>{awardCount}+</h3>
        <p style={styles.statLabel}>Award Winning</p>
      </div>
    </div>
  );
};

const styles = {
    statsContainer: {
        backgroundColor: '#0c0c0c',
        display: 'flex',
        gap: '80px',
        alignItems: 'center',
        justifyContent: 'center',  // Centers the content horizontally
        padding: '80px 0px',  // Ensures there is some space around the stats
        flexWrap: 'wrap',  // Allows responsiveness for smaller screens
    },    
  statItem: {
    textAlign: 'center',
    flex: 1,
    maxWidth: '200px', // Limiting width for responsiveness
    margin: '10px',
  },
  statNumber: {
    fontSize: '3rem',
    color: '#e2b479',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '1.2rem',
    color: '#fff',
  },
};

export default Statistics;
