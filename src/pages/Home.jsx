import React from 'react';
import Statistics from '../components/Statistics';
import Header from '../components/Header';
import Hire from '../components/HireMe';
import Work from '../components/MyWork';
import Customer from '../components/Customers';
import ContactCom from '../components/ContactCom';
import Idea from '../components/Idea';

const Home = () => {
  return (
    <div>
      <Header/>
      <Statistics/>
      <Hire/>
      <Work/>
      <Customer/>
      <ContactCom/>
      <Idea/>
    </div>
  );
};

export default Home;
