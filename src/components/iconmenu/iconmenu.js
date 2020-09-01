import React from 'react';
import './iconmenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faLink, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

let links = [
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

let IconLink = ({linkObj}) => (
    <li title={linkObj.title}><Link to={linkObj.url}>{linkObj.icon}</Link></li>
)

let IconMenu = () => {
    return(
        <ul className='cbp-vimenu'>
        <li title='home'><Link to='/'>{<FontAwesomeIcon icon={faHome}/>}</Link></li>
            {links.map(link => (
                <IconLink linkObj={link}/>
            ))}
        <li title='Old Personal Site'><a href='https://deybyr647.com'><FontAwesomeIcon icon={faLink}/></a></li>
        </ul>
    )
} 

export default IconMenu;