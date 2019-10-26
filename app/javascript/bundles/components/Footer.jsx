import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'

export default class Footer extends React.Component {
	  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { }
  }


  render() {
    return (
      <footer>
        <div className="footer-alert text-center">
          Healthcare-insurance.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
        </div>
  			<div className="container-fluid text-center">
  			  Healthcare-insurance.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
        </div>
			</footer>
    )
  }
}