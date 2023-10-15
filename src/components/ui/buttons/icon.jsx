import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icon({icon, link, desc, content}){
    return(
        <>
        <a href={link} alt={desc} target="_blank" className='space-x-2'><FontAwesomeIcon icon={icon} className='text-3xl'/></a>
        </>
    )
}