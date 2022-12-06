import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';



const Home = () => {
    return (
        <div name="home" className="h-screen w-full ">
            <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">

                <div class='flex flex-wrap lg:ml-20 md:justify-start justify-center max-w-xl mt-0 md:my-36'>
                    <Fade left>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-center md:text-left font-bold'>Hi. I'm Leonel. <br />I'm a <span className='text-secondary'>Web Dev</span></h1>
                        <div className='mt-10 md:mt-20'>
                            <Link
                                to="Projects"
                                smooth
                                duration={500}
                                offset={-100}
                                className='group font-bold w-fit px-14 py-3 my-4 flex items-center rounded-md bg-secondary text-white cursor-pointer hover:scale-110 duration-300'>
                                Projects
                            </Link>
                        </div>
                    </Fade>
                </div>
                <div>
                    {/*}
                    <img src={HeroImage} alt='my avatar' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                    */}
                </div>
            </div>
        </div>
    );
};

export default Home