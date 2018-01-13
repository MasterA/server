import React from 'react';
import { Footer } from 'react-materialize';

const footer = () => {
  return (
    <Footer copyrights="2018 Copyright"
    	moreLinks={
    		<a className="grey-text text-lighten-4 right" href="#!">Austin, Texas</a>
    	}
    	links={
    		<ul>
    			<li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
    			<li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
    			<li><a className="grey-text text-lighten-3" href="#!">Recruter</a></li>
    			<li><a className="grey-text text-lighten-3" href="#!">Support</a></li>
    		</ul>
    	}
    	className='example'
    >
    		<h5 className="white-text">Bass & Austin</h5>
    		<p className="grey-text text-lighten-4">We will find the job you like
          the most based on your skills and experience.</p>
    </Footer>
  );
};

export default footer;
