import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Logo from 'images/health-insurance-icon-png.png'

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
    this.state = { 
        name: this.props.name,
        zipCode: "",
        firstName: "",
        lastName: "",
        phone:"",
        email:"",
        gender: "",
        dob: "",
        householdSize:"",
        householdIncome:""
    };
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



        <div className="container-fluid landing-page-background">
          <div className="container applicant-form-container">
            <h2 className="container text-center">Compare health insurance plans</h2>
            <form>
              <input
                className="form-group offset-md-4 col-md-3"
                name="zipCode" 
                value={this.state.zipCode} 
                onChange={this.handleChange} 
                placeholder="Zip Code" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                name="firstName" 
                value={this.state.firstName} 
                onChange={this.handleChange} 
                placeholder="First Name" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                name="lastName" 
                value={this.state.lastName}
                onChange={this.handleChange} 
                placeholder="Last Name" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                name="phone" 
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="Phone" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                name="email" 
                value={this.state.email}
                onChange={this.handleChange} 
                placeholder="Email" 
              />
              <br />

              <select
                className="form-group offset-md-4 col-md-3"
                value={this.state.gender} 
                name="destination" 
                onChange={this.handleChange}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <select
                className="form-group offset-md-4 col-1"
                value={this.state.month} 
                name="destination" 
                onChange={this.handleChange}
              >
                <option value="">Month</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                className="form-group col-1"
                value={this.state.day} 
                name="destination" 
                onChange={this.handleChange}
              >
                <option value="">Day</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                className="form-group col-1"
                value={this.state.year} 
                name="destination" 
                onChange={this.handleChange}
              >
                <option value="">Year</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <br />
              <button className="applicant-submit offset-md-6">Submit</button>
            </form>
          </div>
        </div>



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

        <footer className="container-fluid text-center">
            Healthcare-insurance.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
        </footer>

      </div>
    );
  }
}
