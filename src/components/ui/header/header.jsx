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
            <div className="content-container flex flex-col items-center space-y-1 py-5 md:flex-row md:justify-between md:space-y-0">
                <h1 className="text-2xl font-bold">JOSE.DEV</h1>
                <nav className="flex flex-row space-x-5">
                    <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Home
                    </Link>
                    <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    About
                    </Link>
                    <Link
                    to='skills'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Skills
                    </Link>
                    <Link
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    Projects
                    </Link>
                </nav>
            </div>
        </header>
    );
};
