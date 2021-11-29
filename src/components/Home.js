import React from 'react';
import '../assets/css/Home.css';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Assets from './HomePage/Assets';
import Accounting from './HomePage/Accounting';
import HRAndAdmin from './HomePage/HRAndAdmin';
import Sales from './HomePage/Sales';
import Customer from './HomePage/Customer';
import Security from './HomePage/Security';
import Price from './HomePage/Price';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-title">
          <span>You are now viewing an <b>IT Software</b> that has been verified by <b>over 1 million users.</b></span>
        </div>
        <Assets />
        <Accounting />
        <HRAndAdmin />
        <Sales />
        <Customer />
        <Security />
        <Price />
        <Footer />
      </div>
    )
  }
}

export default Home;
