import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Your Portfolio</h1>
                <nav className="lg:flex lg:space-x-6">
                    <a href="#home" className="text-white">Home</a>
                    <a href="#about" className="text-white">About</a>
                    <a href="#projects" className="text-white">Projects</a>
                    <a href="#skills" className="text-white">Skills</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
