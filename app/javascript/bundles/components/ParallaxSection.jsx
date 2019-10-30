import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'
import Form from '../components/Form'
import FormBackground from 'images/stethascope.jpg'

export default class ParallaxSection extends React.Component {

	constructor(props){
		super(props)
		this.state = { 
      loading:false,
    }
	}
	handleLoading() {
	  this.setState({
	    'loading':!this.state['loading']
    })
	}
	formBanner() {
		return(
			<h1 className="text-left form-banner-text">
        Open Enrollment is <strong>NOW!</strong>
        <br />
        Don't wait, Get a 
        <br />
        <strong>Qualified Health Plan Today!</strong>
      </h1>
		)
	}
	formSection(){
		return(
			<div className="container-fluid section parallax landing-page-background" >
        <div className="col-7 d-sm-none d-lg-block">
          {this.formBanner()}
        </div>
        <div className="col-lg-4 col-sm-10 form-container">
          <Form
          	setLoading={this.handleLoading.bind(this)}
           />
        </div>
      </div>
		)
	}
  render() {
  	console.log(this.state)
    return (
    	<div> 
	      {this.formSection}
	      <div className="container-fluid section static-banner">
	        <h3 className="text-center">Let us help you find the right affordable health care plan<br /> for you, and your family.</h3>
	      </div>
      </div>
    )
  }
}