import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Logo from 'images/health-insurance-icon-png.png'

export default class Header extends React.Component {
	  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { }
  }


  render() {
    return (

        <header>
          <div className="header-alert text-center">
            Healthcare-insurance.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
          </div>
          <div className="container header">
            <div className="row">
              <div className="company-logo col-md-4">
                <p><img src={Logo} />Healthcare <span>Insurance</span></p>
              </div>
              <div className="col-md-8">
                <ul className="nav mt-3">
                  <li><a href="/">Individuals & Families</a></li>
                  <li><a href="/">Small Business</a></li>
                  <li><a href="/">Pre-Existing</a></li>
                  <li><a href="/">FAQ</a></li>
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">Get Quote</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid secondary-header">
            <div className="text-center">
              <h3>Open Enrollment is NOW! Don't wait, Get a <strong>Qualified Health Plan Today!</strong></h3>
            </div>
          </div>
        </header>

    )
  }
}