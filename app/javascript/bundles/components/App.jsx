import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
        gender: this.props.gender,
        dob: "",
        householdSize:"",
        householdIncome:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    if (type == checked) {
      this.setState({
        [name]: !checked
      })
    } else {
      this.setState({
        [name]: value
      })
      console.log('caught')
    }
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      
      <div>

        <Header />

        <div className="container-fluid landing-page-background">
          <div className="container applicant-form-container">
            <h2 className="container text-center">Compare health insurance plans</h2>
            <form>
              <input
                className="form-group offset-md-4 col-md-3"
                type="text"
                name="zipCode" 
                value={this.state.zipCode} 
                onChange={this.handleChange} 
                placeholder="Zip Code" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                type="text"
                name="firstName" 
                value={this.state.firstName} 
                onChange={this.handleChange} 
                placeholder="First Name" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                type="text"
                name="lastName" 
                value={this.state.lastName}
                onChange={this.handleChange} 
                placeholder="Last Name" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                type="text"
                name="phone" 
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="Phone" 
              />
              <br />
              <input
                className="form-group offset-md-4 col-md-3"
                type="text"
                name="email" 
                value={this.state.email}
                onChange={this.handleChange} 
                placeholder="Email" 
              />
              <br />

              <select
                className="form-group offset-md-4 col-md-3"
                type="select"
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
                type="select"
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
                type="select"
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
                type="select"
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

        <Footer />
        

      </div>
    );
  }
}
