import React from 'react';
import comingSoon from '../assets/portfolio/coming-soon.png';
import Fade from 'react-reveal/Fade';


const Portfolio = () => {

    const projects = () => [
        {
            id: 1,
            src: comingSoon,
        },
        {
            id: 2,
            src: comingSoon,
        },
        {
            id: 3,
            src: comingSoon,
        },
        {
            id: 4,
            src: comingSoon,
        },
        {
            id: 5,
            src: comingSoon,
        },
        {
            id: 6,
            src: comingSoon,
        },
    ];


    return (
        <div name="projects" className='w-full'>
            <div className='max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full'>
                <Fade bottom>
                    <div>
                        <p className='text-4xl font-bold inline border-t-4  border-secondary'>Projects</p>
                        <p className='py-6 '>Check out some of my work here</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>
                        {
                            projects().map(({ id, src }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt="projects" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items items-center justify-center'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Portfolio