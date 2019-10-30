import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Logo from 'images/health-insurance-icon.png'

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
            <a href="/">Contact Us</a>
          </div>
        </div>
      </header>
    )
  }
}