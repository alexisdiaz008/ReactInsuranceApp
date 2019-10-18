import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Logo from 'images/health-insurance-icon-png.png'
import Background from 'images/healthy_family_outside.jpg'

export default class App extends React.Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <header>
          <div className="header-alert text-center">
            Healthcare-insurance.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
          </div>
          <div className="container header">
            <div className="row">
              <div className="company-logo col-md-4">
                <p><img src={Logo} />Healthcare <span>Logo</span></p>
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



        <div className="container">
          <h3>
            Hello, {this.state.name}!
          </h3>
          <hr />
          <form >
            <label htmlFor="name">
              Say hello to:
            </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={(e) => this.updateName(e.target.value)}
            />
          </form>
        </div>

      </div>
    );
  }
}
