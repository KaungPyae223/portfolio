import React from 'react';
import AboutIntro from '../Components/About/AboutIntro';
import Education from '../Components/About/Education';
import Skills from '../Components/About/Skills';
import Future from '../Components/About/Future';

const About = () => {
    return (
        <div>
            <AboutIntro/>
            <Education/>
            <Skills/>
            <Future/>
        </div>
    );
};

export default About;