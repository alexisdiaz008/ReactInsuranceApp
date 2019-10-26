import PropTypes from 'prop-types';
import React from 'react';

// Create component for label
function Label(props) {
  return <label className={props.className || ''}>{props.label}</label>
}
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
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
          value={this.props.value || ''}
        />
    );
  }
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
// Create component for form
export default class Form extends React.Component {
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
  defaultTextInputsHtml() {
    const textInputs = ['Zip Code','First Name','Last Name','Phone','Email']
    var textInputsHtml = textInputs.map((text) => {
        return (
          <div className="row mt-3">
            <Label 
              className='col-md-12 h6 px-0'
              label={text}
            />
            <Input
              required='true'
              type='text'
              placeholder={text}
            />
          </div>
        )
      })
    return textInputsHtml
  }
  render() {
    var defaultTextInputs = this.defaultTextInputsHtml()
    return (
      <form className="applicant-form" method='' action=''>
        {defaultTextInputs}
        <div className="row my-3">
          <div className="col-6 text-center">
            <Label
              className='h6'
              label='Male'
            />
            <Input
              name='gender'
              required='true'
              type='radio'
              value='male'
            />
          </div>
          <div className="col-6 text-center">
            <Label
              className='h6'
              label='Female'
            />
            <Input
              name='gender'
              required='true'
              type='radio'
              value='female'
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <Label
              className='col-12 h6'
              label='Day'
            />
            <Select
              className='col-12'
              options='Dec, Jan'
              required='true'
            />
          </div>
          <div className="col-4">
            <Label
              className='col-12 h6'
              label='Month'
            />
            <Select
              className='col-12'
              options='Jan'
              required='true'
            />
          </div>
          <div className="col-4">
            <Label
              className='col-12 h6'
              label='Year'
            />
            <Select
              className='col-12'
              options='Dec, Jan'
              required='true'
            />
          </div>
        </div>
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