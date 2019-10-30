import PropTypes from 'prop-types';
import React from 'react';

// Create component for label
function Label(props) {
  return <label className={props.className || ''}>{props.label}</label>
}

// Create component for button
class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          className={this.props.className || ''}
          type={this.props.type || 'button'}
          value={this.props.value || null}
          name={this.props.name || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};
// Create component for select input
class Select extends React.Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(', ');
    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });
    return (
      <select
        className={this.props.className || null}
        id={this.props.id || null}
        name={this.props.name || null}
        required={this.props.required || null}
      >
        <option value='' disabled>{this.props.disabled || 'Select one option'}</option>
        {selectOptionsList}
      </select>
    );
  }
};
// Create component for input
class Input extends React.Component {
  render() {
    return (
        <input
          className={this.props.className || null}
          id={this.props.id || null}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
          value={this.props.value || ''}
          onChange={this.props.onChange || null}
        />
    );
  }
}
// Create component for form
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { 
        loading:false,
        name: this.props.name,
        zipCode: "",
        firstName: "",
        lastName: "",
        phone:"",
        email:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    fetch('/app_create', {
      method: 'POST',
      body: data,
    })
    this.props.setLoading()
  }
  textInputsFor(textInputs) {
    var textInputsHtml = textInputs.map((text) => {
      var name = (text.charAt(0).toLowerCase() + text.slice(1)).replace(' ', '')
      return (
        <div className="mt-3">
          <Label 
            className='col-md-12 h6 px-0'
            label={text}
          />
          <Input
            type='text'
            className='px-0'
            name={name}
            placeholder={text}
            value={this.state[name]}
            onChange={this.handleChange}
          />
        </div>
      )
    })
    return textInputsHtml
  }
  radioButtonsFor(radioButtons) {
    const key = Object.keys(radioButtons)[0]
    const name = key
    var radioButtonsArray = radioButtons[key]['options'].map(key => {
      return (
        <div className="col-6 text-center">
          <Label
            className='h6'
            label={key.charAt(0).toUpperCase() + key.slice(1)}
          />
          <Input
            name={name}
            type='radio'
            value={key}
          />
        </div>
      )
    })
    return (
      <div className="row my-3">
        {radioButtonsArray}
      </div>
    )
  }
  render() {
    const textInputsArray = ['Zip Code','First Name','Last Name','Phone','Email']
    return (
      <form 
        className="applicant-form" 
        method='post' 
        action='/' 
        onSubmit={this.handleSubmit}
      >
        <h5 className="form-header text-left mb-3">
          Find Affordable Health Care Plans
        </h5>
        {this.textInputsFor(textInputsArray)}
        <Button
          className="default-button col-12"
          type='submit'
          value='submit'
          text='Start Viewing Plans Now'
        />
      </form>
    )
  }
}