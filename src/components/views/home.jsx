import { Link, Element } from 'react-scroll';

//importing animations
import Lottie from "lottie-react";
import LandingAnimation from '../../assets/landing.json';

import Button from '../ui/buttons/button';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';




export default function Home({name, occupation}) {
    return(
        <section id='home' className="comp-container">
            {/* content container */}
            <div className="flex flex-col items-center justify-center w-96 text-center md:w-7/12 px-3 md:px-0 lg:flex-row lg:text-left lg:justify-between">
                <div className='h-60 pb-4'>
                    <p className="text-base lg:text-lg py-2 text-gray-600">Hello World, I'm</p>
                    {/* user name */}
                    <h2 className="text-4xl lg:text-5xl font-bold">{name}</h2>
                    {/* user occupation */}
                    <h1 className="text-xl font-semibold lg:text-2xl py-2">{occupation}</h1>
                    {/* btn container */}
                    <div className='flex flex-row justify-center lg:justify-start space-x-6 py-4'>
                        <div className='font-medium border-2 border-teal-400 rounded-xl p-3 space-x-2 cursor-pointer transition duration-300'>
                            <FontAwesomeIcon icon={faDownload} />
                            <Button 
                            link={""} 
                            content={"Resume"} 
                            desc={"View my resume"}/>
                        </div>
                        <div className='font-medium border-2 border-teal-400 rounded-xl p-3 space-x-2 cursor-pointer transition duration-300'>
                            <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1000}
                            className="cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> Contact
                            </Link>
                        </div>
                        
                    </div>
                </div>
                {/* img container */}
                <div className='w-96 md:w-4/5 lg:w-6/12'>
                    <Lottie animationData={LandingAnimation}/>
                </div>
            </div>            
        </section> 
    )
}