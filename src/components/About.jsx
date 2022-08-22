import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div
            name="about"
            className='w-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <Fade bottom>
                    <p className='text-4xl font-bold inline border-b-4 border-wmelon-100'>
                        About
                    </p>
                    <p className='text-xl mt-20 text-justify'>
                        I'm a web developer from Neuchâtel, Switzerland. I like working with React, JavaScript, Tailwindcss. I'm always curious to expand my skills by learning the new technologies to build new projects from the ground up.
                    </p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default About