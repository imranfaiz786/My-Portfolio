import React from 'react';
import PortfolioShort from '../components/portfolio';
import PortWork from '../components/portWork';
import Idea from '../components/Idea';

const Portfolio = () => {
  return (
    <div>
      <PortfolioShort/>
      <PortWork/>
      <Idea/>
    </div>
  );
};

export default Portfolio;
