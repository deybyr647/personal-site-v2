import React from 'react';
import './iconmenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
//import { faLinkedinIn, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import About from '../../pages/about/aboutPage';

//const element = <FontAwesomeIcon icon={faCoffee} />;


let links = [
    {
        icon: <FontAwesomeIcon icon={faLink}/>,
        url: 'https://deybyr647.com',
        title: 'Personal Website',
        rel: 'noopener noreferrer',
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faBriefcase}/>,
        url: 'https://deybyr647.com',
        title: 'Portfolio',
        rel: 'noopener noreferrer',
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        url: 'https://deybyr647.com',
        title: 'Resume',
        rel: 'noopener noreferrer',
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        url: '/about',
        title: 'Resume',
        rel: 'noopener noreferrer',
        target: '_blank'
    }
]

let IconLink = ({linkObj}) => (
    <li title={linkObj.title}><a href={linkObj.url} rel={linkObj.rel} target={linkObj.target}>{linkObj.icon}</a></li>
)

let IconLink2 = ({linkObj}) => (
    <li title={linkObj.title}><Link to={linkObj.url}>{linkObj.icon}</Link></li>
)

let IconMenu = () => {
    return(
            <ul className='cbp-vimenu'>
            <li><a href="https://google.com" className="icon-logo"></a></li>
	        <li><a href="https://google.com" className="icon-archive">Archive</a></li>
	        <li><a href="https://google.com" className="icon-search">Search</a></li>
	        <li className="cbp-vicurrent"><a href="https://google.com" className="icon-pencil">Pencil</a></li>
            {links.map(link => (
                <IconLink2 linkObj={link}/>
            ))}
        </ul>
    )
} 

export default IconMenu;