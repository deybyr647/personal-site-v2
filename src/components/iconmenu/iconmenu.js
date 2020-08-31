import React from 'react';
import './iconmenu.css';

let links = [
    {
        icon: '',
        url: 'https://deybyr647.com',
        title: 'Personal Website',
        rel: 'noopener noreferrer',
        target: '_blank'
    }
]

let IconLink = ({linkObj}) => (
    <li title={linkObj.title}><a href={linkObj.url} rel={linkObj.rel} target={linkObj.target}></a></li>
)

let IconMenu = () => {
    return(
        <ul className='cbp-vimenu'>
            <li><a href="https://google.com" className="icon-logo">Logo</a></li>
	        <li><a href="https://google.com" className="icon-archive">Archive</a></li>
	        <li><a href="https://google.com" className="icon-search">Search</a></li>
	        <li className="cbp-vicurrent"><a href="https://google.com" className="icon-pencil">Pencil</a></li>
	        <li><a href="https://google.com" className="icon-location">Location</a></li>
	        <li><a href="https://google.com" className="icon-images">Images</a></li>
	        <li><a href="https://google.com" className="icon-download">Download</a></li>
            {links.map(link => (
                <IconLink linkObj={link}/>
            ))}
        </ul>
    )
} 

export default IconMenu;