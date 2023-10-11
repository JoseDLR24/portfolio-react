import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton({icon, link, desc, content}){
    return(
        <>
        <a href={link} alt={desc} target="_blank" className='space-x-2'><FontAwesomeIcon icon={icon} className='text-lg'/><span>{content}</span></a>
        </>
    )
}