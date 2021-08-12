import React from 'react';
import './aboutMe.css';

const AboutMe = (props) => {
    return (
        <div className='about-me'>
          <h4>About Me</h4>
          
          <p>{props.aboutMe}</p>

        </div>
    )
}

export default AboutMe;
