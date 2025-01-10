import React from 'react';
// import backgroundImage from '../assets/images/background.jpg'; // Ensure this path is correct

const GlobalStyles = () => {
  return (
    <style>
      {`
        :root {
          --e-global-typography-primary-font-family: 'Roboto', sans-serif;
        }

        body {
          font-family: "Noto Sans", serif;
          background-Color: #040402,
          color: #fff;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        h1, h2, h3, p {
          margin: 0;
        }
      `}
    </style>
  );
};

export default GlobalStyles;
