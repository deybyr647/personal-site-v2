import React from 'react';
import './iconmenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

let routes = [
    {
        icon: <FontAwesomeIcon icon={faBriefcase}/>,
        url: '/portfolio',
        title: 'Portfolio'
    },
    {
        icon: <FontAwesomeIcon icon={faUser}/>,
        url: '/about',
        title: 'About'
    },
    {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        url: '/resume',
        title: 'Resume'
    }
]

let extLinks = [
    {
        icon: <FontAwesomeIcon icon={faLinkedinIn}/>,
        url: 'https://www.linkedin.com/in/deyby-rodriguez',
        title: 'LinkedIn'
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope}/>,
        url: 'mailto:deybyr647@gmail.com?Subject=Hey%20Deyby!',
        title: 'Email'
    },
    {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        url: 'https://github.com/deybyr647',
        title: 'Instagram'
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram}/>,
        url: 'https://instagram.com/deybyr647',
        title: 'Instagram'
    }
]

let RouteLink = ({routeObj}) => (
    <li title={routeObj.title}><Link to={routeObj.url}>{routeObj.icon}</Link></li>
)

let ExternalLink = ({linkObj}) => (
    <li title={linkObj.title}><a target='_blank' rel='noopener noreferrer' href={linkObj.url}>{linkObj.icon}</a></li>
)

let IconMenu = () => {
    return(
        <ul className='cbp-vimenu'>
        <li className='initials' title='home'><Link to='/'><span>DR</span></Link></li>
            {routes.map(r => <RouteLink routeObj={r} />)}
            {extLinks.map(l => <ExternalLink linkObj={l} />)}
        </ul>
    )
} 

export default IconMenu;