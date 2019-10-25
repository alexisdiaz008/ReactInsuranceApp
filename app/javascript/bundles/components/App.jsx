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
      
      <div>
        <Header />
        <div className="container-fluid landing-page-background">
          <div className="row">
            <div className="col-8">
              <h2>
                
              </h2>
            </div>
            <div className="col-4 py-3">
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
