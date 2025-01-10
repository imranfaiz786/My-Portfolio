import React from "react";
import { Link } from "react-router-dom"; // Correct import

const Navbar = () => {
  const [isBtnHovered, setIsBtnHovered] = React.useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1 style={styles.logoText}>IF PortFolio</h1> {/* Replace with an actual logo */}
      </div>
      <ul style={styles.navList}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
      <div style={styles.contactButtonWrapper}>
        <Link
          to="/contact"
          style={{
            ...styles.btn,
            ...(isBtnHovered ? styles.btnHover : {}),
          }}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '10px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#040402',
    top: 0,
    left: 0,
    zIndex: 10, // Ensure it stays on top
  },
  logo: {
    flex: 1,
  },
  logoText: {
    color: '#e2b479',
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '40px', // Margin from the left
    cursor: 'pointer',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    flexGrow: 2,
    justifyContent: 'center', // Centers the nav items horizontally
    alignItems: 'center',
    marginRight: '180px',
  },
  navItem: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 20px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease-in-out, background-color 0.3s ease-in-out',
  },
  navItemHover: {
    color: '#e2b479', // Hover color for text
  },
  btn: {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    padding: '10px 20px',
    textTransform: 'uppercase',
    border: '2px solid #e2b479',
    borderRadius: '50px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
    marginRight: '40px', // Margin from the right
  },
  btnHover: {
    backgroundColor: '#e2b479',
    color: '#090909', // Text color change when hover
  },
  contactButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

// Hover Effect Handling for NavItem (using inline styles)
const NavItem = ({ children, to }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      style={{
        ...styles.navItem,
        ...(isHovered ? styles.navItemHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={to} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
