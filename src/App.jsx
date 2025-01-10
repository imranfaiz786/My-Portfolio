import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing the correct components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={styles.page}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr style={styles.line} /> {/* This adds a thin white line */}
      <Footer />
    </Router>
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
    width: '950px',
    border: 'none',
    borderTop: '1px solid white',
    margin: '0 auto',
    padding: '0',
    marginTop: '0px',
  },
};


export default App;
