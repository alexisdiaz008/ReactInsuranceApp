import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Form from '../components/Form'
import FormBackground from 'images/stethascope.jpg'

export default class ParallaxSection extends React.Component {

	constructor(props){
		super(props)
		this.state = { 
        loading:{this.props.loading || null},
    }
	}

	formBanner() {
		return(
			<h1 className="text-left form-banner-text">
        Open Enrollment is NOW!
        <br />
        Don't wait, Get a 
        <br />
        <strong>Qualified Health Plan Today!</strong>
      </h1>
		)
	}

  render() {
    return (
    	<div> 
	      <div className="container-fluid section parallax landing-page-background" >
	        <div className="col-7 d-sm-none d-lg-block">
	          {this.formBanner()}
	        </div>
	        <div className="col-lg-4 col-sm-10 form-container">
	          <Form />
	        </div>
	      </div>
	      <div className="container-fluid section static-banner">
	        <h3 className="text-center">Let us help you find the right affordable health care plan<br /> for you, and your family.</h3>
	      </div>
      </div>
    )
  }
}