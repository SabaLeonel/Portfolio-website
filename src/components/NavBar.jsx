import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; //importing the icons
import { Link } from 'react-scroll';

export const NavBar = () => {

    const [nav, setNav] = useState(false); 

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'projects',
        },
        {
            id: 3,
            link: 'experience',
        },
        {
            id: 4,
            link: 'about',
        },
        {
            id: 5,
            link: 'contact',
            style: 'bg-secondary font-bold text-white rounded-md',
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 fixed z-10 bg-body ">
            <div>
                <h1 className="text-lg ml-2 font-bold">Leonel Saba</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link, style}) => (
                    <li 
                    key={id} 
                    className={`px-4 cursor-pointer capitalize hover:scale-105 duration-200 ${style}`}>
                        <Link activeClass="text-bold text-secondary" smooth spy to={link} offset={-75} duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div 
            onClick={() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10 text-carbon-100 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul 
                className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-body">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link  offset={-75} onClick={() => setNav(!nav)} activeClass="text-bold text-secondary" smooth spy to={link}  duration={500}>
                            {link}
                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar;
