import PropTypes from 'prop-types';
import React from 'react';
// import ReactDOM from 'react-dom'

export default class ParallaxSection extends React.Component {
  render() {
    return (
        <div id="loadingContainer">           
          <svg 
            id="loadingSpinner" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 80 80">
	            <defs>
		            <path id="a" d="M0 0h40v40H0z"/>
	            </defs>
		          <g fill="none" fill-rule="evenodd">
		          	<circle cx="40" cy="40" r="38" stroke="#DEECF9" stroke-width="2.817"/>
		          	<g transform="translate(40)">
			          	<mask id="b" fill="#fff">
				          	<use href="#a"/>
			          	</mask>
		          	<circle cy="40" r="38" stroke="#0078D7" stroke-width="2.817" mask="url(#b)"/>
		          	</g>
	          	</g>
          	</svg>
        </div>
    )
  }
}