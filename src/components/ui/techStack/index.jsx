import React from 'react';

// importing frontend svg icons
import htmlIcon from '../../../assets/html5.svg';
import cssIcon from '../../../assets/css3.svg';
import tailwindCSSIcon from '../../../assets/tailwindcss.svg';
import javascriptIcon from '../../../assets/javascript.svg';
import reactIcon from '../../../assets/react.svg';
import vueIcon from '../../../assets/vuejs.svg';

// importing backend svg icons
import mongodbIcon from '../../../assets/mongodb.svg';
import expressIcon from '../../../assets/expressJS.svg';
import nodeIcon from '../../../assets/nodejs.svg';
import aspnetIcon from '../../../assets/dotnet.svg';
import phpIcon from '../../../assets/php.svg'
import mySQLIcon from '../../../assets/mysql.svg';


const programmingLanguagesData = {
    frontend: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'TailwindCSS', icon: tailwindCSSIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React.js', icon: reactIcon },
        { name: 'Vue.js', icon: vueIcon}
    ],
    backend: [
        { name: 'MongoDB', icon: mongodbIcon }, 
        { name: 'Express.js', icon: expressIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'ASP.NET', icon: aspnetIcon },
        { name: 'PHP', icon: phpIcon },
        { name: 'WorkBench', icon: mySQLIcon },
    ],
};

export default function ProgrammingLanguages() {
    return (
        <div className='w-full space-y-5'>
            <div className='space-y-4'>
                <h3 className='text-md lg:text-lg font-semibold'>Frontend</h3>
                <ul className='flex flex-wrap md:space-x-8 lg:space-x-10'>
                    {programmingLanguagesData.frontend.map((language, index) => (
                        <li key={index} className='text-sm flex flex-col items-center w-20 mb-3'>
                            <img src={language.icon} alt={language.name} className='w-8 md:w-12 lg:w-14'/> {language.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='space-y-4'>
                <h3 className='text-md lg:text-lg font-semibold'>Backend</h3>
                <ul className='flex flex-wrap md:space-x-8 lg:space-x-10'>
                    {programmingLanguagesData.backend.map((language, index) => (
                        <li key={index} className='text-sm flex flex-col items-center w-20 mb-4'>
                            <img src={language.icon} alt={language.name} className='w-8 md:w-12 lg:w-14'/> {language.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}