import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'

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
          ObamaCare-Enroll.org is part of a privately owned agency and is not affiliated, operated, or endorsed by any government agency.
        </div>
        <div className="container">
          <div className="header row">
            Individuals & Families 
          </div>
        </div>
        <div className="container">
          <div className="secondary-header row">
            bottom of the header
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
