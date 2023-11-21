import React, { useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';

//importing animations
import Lottie from "lottie-react";
import LandingAnimation from '../../assets/data.json';

import IconButton from '../ui/buttons/iconButton';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home({ name, occupation }) {
    const lottieRef = useRef(null);

    useEffect(() => {
        const startAnimation = () => {
            if (lottieRef.current) {
                lottieRef.current.play();
                console.log("Animation started playing after the page loaded.");
            }
        };

        // Start the animation when the page has completely loaded, or after a delay (adjust as needed)
        window.addEventListener('load', startAnimation);

        // Don't forget to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('load', startAnimation);
        };
    }, []);
    return (
        <section id='home' className="comp-container">
            {/* content container */}
            <div className="content-container lg:flex-row lg:text-left lg:justify-between">
                <div className='h-60 pb-4'>
                    <p className="text-base lg:text-lg py-2 text-gray-600">Hello World, I'm</p>
                    {/* user name */}
                    <h2 className="text-4xl lg:text-5xl font-bold">{name}</h2>
                    {/* user occupation */}
                    <h1 className="text-xl font-semibold lg:text-2xl py-2">{occupation}</h1>
                    {/* btn container */}
                    <div className='flex flex-row justify-center lg:justify-start space-x-6 py-4'>
                        <div className='font-medium border-2 border-teal-400 rounded-xl p-3 space-x-2 cursor-pointer transition-all hover:-translate-y-2 duration-500 ease-in-out hover:bg-teal-400 hover:text-white'>
                            <IconButton icon={faDownload} link={'https://drive.google.com/file/d/1l7qYj_9OTxbpABokssuqZlppBFYDiGVu/view?usp=share_link'} content={'Resume'} />
                        </div>
                        <div className='font-medium border-2 border-teal-400 rounded-xl p-3 space-x-2 cursor-pointer transform hover:-translate-y-2 duration-500 ease-in-out hover:bg-teal-400 hover:text-white'>
                            <Link
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="cursor-pointer"
                            >
                                <IconButton icon={faEnvelope} content={'Contact'} />
                            </Link>
                        </div>

                    </div>
                </div>
                {/* img container */}
                <div className='w-96 md:w-4/5 lg:w-6/12 md:flex'>
                    <Lottie animationData={LandingAnimation} loop={true} autoPlay={false} ref={lottieRef} />
                </div>
            </div>
        </section>
    )
}