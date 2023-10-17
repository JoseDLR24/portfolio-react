import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

export default function Header() {
    // HEADER ANIMATION TO APPEAR/DISSAPEAR

    // initialize variables to store state
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // compares current scroll position with previous scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(prevScrollPos > currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);



    return (
        <header className={`comp-container min-h-fit fixed top-0 left-0 w-full transition-transform transform duration-300 ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'} bg-white z-50 shadow-lg`}>
            <div className="flex flex-col items-center justify-center w-96 text-center md:w-7/12 px-3 md:px-0 space-y-2 py-2 md:py-5 md:flex-row md:justify-between md:space-y-0">
                <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    className="cursor-pointer text-2xl font-bold"
                >
                    JOSE.DEV
                </Link>
                <nav className="flex flex-row space-x- lg:space-x-6">
                    <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        className="cursor-pointer p-2 transform hover:-translate-y-1 duration-500 ease-in-out"
                    >
                        About
                    </Link>
                    <Link
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        className="cursor-pointer p-2 transform hover:-translate-y-1 duration-500 ease-in-out"
                    >
                        Skills
                    </Link>
                    <Link
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        className="cursor-pointer p-2 transform hover:-translate-y-1 duration-500 ease-in-out"
                    >
                        Projects
                    </Link>
                    <Link
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={1000}
                        className="cursor-pointer p-2 transform hover:-translate-y-1 duration-500 ease-in-out"
                    >
                        Contact
                    </Link>
                    <a
                        href='https://drive.google.com/file/d/1YwFeQdcTSTl0mj1By4dPxvCu_1m8UclC/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer' // Recommended for security
                        className='cursor-pointer font-bold underline decoration-wavy decoration-teal-400 p-2 transform hover:-translate-y-1 duration-500 ease-in-out hidden lg:flex'
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};