import React from 'react';

// importing tools icon svg
import figmaIcon from '../../../assets/figma.svg';
import xdIcon from '../../../assets/xd.svg';
import photoshopIcon from '../../../assets/photoshop.svg';

const toolsData = [
    { name: 'Figma', icon: figmaIcon },
    { name: 'Adobe XD', icon: xdIcon },
    { name: 'Photoshop', icon: photoshopIcon },
]

export default function Tools() {
    return (
        <div className='w-full space-y-5'>
            <div className='space-y-4'>
                <h3 className='text-md lg:text-lg font-semibold'>Tools</h3>
                <ul className='flex flex-wrap md:space-x-8 lg:space-x-10'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='text-sm flex flex-col items-center w-20'>
                            <img src={tool.icon} alt={tool.name} className='w-8 md:w-12 lg:w-14'/> {tool.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}