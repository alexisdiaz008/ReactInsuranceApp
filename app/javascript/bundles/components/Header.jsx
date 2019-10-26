import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Logo from 'images/health-insurance-icon-png.png'

export default class Header extends React.Component {
	  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = {}
  }


  render() {
    return (
      <header>
        <div className="container-fluid header">
          <div className="company-logo col-md-4">
            <p><img src={Logo} /></p>
          </div>
          <div className="col-md-8 text-center">
            <a href="/">Individuals & Families</a>
            <a href="/">Small Business</a>
            <a href="/">Pre-Existing</a>
            <a href="/">FAQ</a>
            <a href="/">Contact Us</a>
            <a href="/">Get Quote</a>
          </div>
        </div>
      </header>
    )
  }
}