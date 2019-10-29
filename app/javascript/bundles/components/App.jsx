import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'

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
        <div className="container-fluid section parallax landing-page-background">
          <div className="col-8">
            <h1 className="text-left px-3">
              Open Enrollment is NOW!
              <br />
              Don't wait,
              <br />
              Get a <strong>Qualified Health Plan Today!</strong>
            </h1>
          </div>
          <div className="col-4 py-3">
            <Form />
          </div>
        </div>
        <div className="container-fluid section static-banner">
          <h3 className="text-center">Let us help you find the right affordable health care plan<br /> for you, and your family.</h3>
        </div>
        <Footer />
      </div>
    )
  }
}
