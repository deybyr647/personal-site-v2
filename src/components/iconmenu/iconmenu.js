import React from 'react';
import './iconmenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faLink, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
        url: '/about',
        title: 'Resume',
        rel: 'noopener noreferrer',
        target: '_blank'
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
        </ul>
    )
} 

export default IconMenu;