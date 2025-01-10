import React from 'react';

const Contactshort = () => {
  return (
    <div style={styles.contactHeading}>
      <h1 style={styles.contactTag}>Contact Us</h1>
      <p style={styles.contactPara}>Home / Contact</p>
    </div>
  );
};

const styles = {
  contactHeading: {
    height: '250px',          // Maintain the height for the section
    display: 'flex',          // Use flexbox to align content
    flexDirection: 'column',  // Stack the items vertically
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center',     // Horizontally center the content
    textAlign: 'center',      // Ensure text is aligned in the center
    marginTop: '60px',
    backgroundColor: '#0c0c0c',
  },
  contactTag: {
    fontSize: '40px',         // Larger font size for the main heading
    fontWeight: '600',        // Bold text for the heading
    color: '#fff',            // Dark color for better contrast
    marginBottom: '10px',     // Add some space below the heading
  },
  contactPara: {
    fontSize: '16px',         // Slightly smaller font for the paragraph
    color: '#fff',            // Lighter color for the breadcrumb text
    fontStyle: 'italic',      // Optional: add some emphasis to the breadcrumb
  },
};

export default Contactshort;
