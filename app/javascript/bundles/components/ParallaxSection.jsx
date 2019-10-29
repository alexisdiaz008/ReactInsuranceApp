import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Form from '../components/Form'
import FormBackground from 'images/stethascope.jpg'

export default class ParallaxSection extends React.Component {

  render() {
  	let style = {
					  		backgroundImage:'url('+FormBackground+')',
						    backgroundPosition:"center",
							  backgroundSize:"cover"
							};
    return (
    	<div> 
	      <div className="container-fluid section parallax landing-page-background" style={style}>
	        <div className="col-8">
	          <h1 className="text-left px-32 form-banner-text">
	            Open Enrollment is NOW!
	            <br />
	            Don't wait, Get a 
	            <br />
	            <strong>Qualified Health Plan Today!</strong>
	          </h1>
	        </div>
	        <div className="col-4 py-3 form-container">
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