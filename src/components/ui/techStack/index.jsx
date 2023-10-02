import React from 'react';

const programmingLanguagesData = {
    frontend: [
        { name: 'HTML', icon: '../../assets/html5.svg' },
        { name: 'CSS', icon: 'css-icon.png' },
        { name: 'Tailwind CSS', icon: 'tailwind-icon.png' },
        { name: 'JavaScript', icon: 'javascript-icon.png' },
        { name: 'React.js', icon: 'react-icon.png' },
        { name: 'Vue.js', icon: "../../assets/vuejs.svg"}
    ],
    backend: [
        { name: 'MongoDB', icon: 'mongodb-icon.png' },
        { name: 'Express.js', icon: 'express-icon.png' },
        { name: 'Node.js', icon: 'nodejs-icon.png' },
        { name: 'ASP.NET', icon: 'aspnet-icon.png' },
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
                            <img src={language.icon} alt={language.name} /> {language.name}
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