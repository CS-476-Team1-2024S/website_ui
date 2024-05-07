import React from 'react';
import LoggedInAs from '../components/LoggedInAs';

const About = () => {
    
    return (
        <div className = "content">
            <h1>About</h1>
            <LoggedInAs />
            <p>This is the about page</p>
            <a href="#/">Back to Home</a>
        </div>
    );
};
export default About;