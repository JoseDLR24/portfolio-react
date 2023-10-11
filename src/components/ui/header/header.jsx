import React, { useState, useEffect } from 'react';

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
        <header className={`comp-container min-h-fit fixed top-0 left-0 w-full transition-transform transform duration-300 ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'} bg-white z-50`}>
            <div className="content-container flex flex-col items-center space-y-1 py-5 border-b-2 border-teal-400 md:flex-row md:justify-between md:space-y-0">
                <h1 className="text-2xl font-bold">JOSE.DEV</h1>
                <nav className="flex flex-row space-x-5">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </nav>
            </div>
        </header>
    );
};
