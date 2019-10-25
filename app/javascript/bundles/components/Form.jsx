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
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
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

// Create component for datalist input
class Datalist extends React.Component {
  render() {
    // Get all options from option prop
    const dataOptions = this.props.options.split(', ');

    // Generate list of options
    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        
        <input list={this.props.htmlFor} />
          
        <datalist
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {dataOptionsList}
        </datalist>
      </fieldset>
    );
  }
};
// Create component for checkbox input

class Checkbox extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='checkbox'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}

// Create component for radio input
class Radio extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}
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
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        
        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
};
// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
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
  render() {
    return (
      <form className="applicant-form" method='' action=''>
        <Label 
          className='col-md-12'
          label='Zip Code'
        />
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Zip Code'
          required='true'
          type='text'
        />
        <Label 
          className='col-md-12'
          label='First Name'
        />
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='First Name'
          required='true'
          type='text'
        />
        <Label 
          className='col-md-12'
          label='Last Name'
        />
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Last Name'
          required='true'
          type='text'
        />
        <Label 
          className='col-md-12'
          label='Phone'
        />
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Phone'
          required='true'
          type='text'
        />
        <Label 
          className='col-md-12'
          label='Email'
        />
        <Input
          hasLabel='true'
          htmlFor='emailInput'
          label='Email'
          required='true'
          type='email'
        />
        <Radio
          hasLabel='true'
          htmlFor='radioOne'
          label='Male'
          name='radios'
          required='true'
        />
        <Radio
          hasLabel='true'
          htmlFor='radioTwo'
          label='Female'
          name='radios'
          required='true'
        />
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Day'
          options='Dec, Jan'
          required='true'
        />
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Month'
          options='Dec, Jan'
          required='true'
        />
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Year'
          options='Dec, Jan'
          required='true'
        />
        <Button
          className="default-button"
          type='submit'
          value='submit'
          text='Start Viewing Plans Now'
        />
      </form>
    )
  }
}