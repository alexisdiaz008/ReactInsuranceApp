import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ParallaxSection from '../components/ParallaxSection'

export default class App extends React.Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ParallaxSection />
        <Footer />
      </div>
    )
  }
}