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
            <h1 className="text-left">
              Open Enrollment is NOW!
              <br />
              Don't wait, Get a <strong>Qualified Health Plan Today!</strong>
            </h1>
          </div>
          <div className="col-4 py-3">
            <Form />
          </div>
        </div>
        <div className="container-fluid section static">
          <h1>Boring</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
