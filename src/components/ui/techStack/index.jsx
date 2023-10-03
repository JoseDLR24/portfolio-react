import React from 'react';

// importing svg imgs
import htmlIcon from '../../../assets/html5.svg';
import cssIcon from '../../../assets/css3.svg';
import tailwindCSSIcon from '../../../assets/tailwindcss.svg';
import javascriptIcon from '../../../assets/javascript.svg'

const programmingLanguagesData = {
    frontend: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'Tailwind CSS', icon: tailwindCSSIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React.js', icon: 'react-icon.png' },
        { name: 'Vue.js', icon: "../../assets/vuejs.svg"}
    ],
    backend: [
        { name: 'MongoDB', icon: 'mongodb-icon.png' },
        { name: 'Express.js', icon: 'express-icon.png' },
        { name: 'Node.js', icon: 'nodejs-icon.png' },
        { name: 'ASP.NET', icon: 'aspnet-icon.png' },
        { name: 'PHP', icon: 'php-icon.png' },
    ],
};

export default function ProgrammingLanguages() {
    return (
        <>
            <div>
                <h2>Frontend</h2>
                <ul>
                    {programmingLanguagesData.frontend.map((language, index) => (
                        <li key={index}>
                            <img src={language.icon} alt={language.name} className='w-10'/> {language.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Backend</h2>
                <ul>
                    {programmingLanguagesData.backend.map((language, index) => (
                        <li key={index}>
                            <img src={language.icon} alt={language.name} /> {language.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}