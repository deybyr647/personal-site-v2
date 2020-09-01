import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './aboutPage.css';
import personalImage from '../../images/IMG_5314.jpg';

import IconMenu from '../../components/iconmenu/iconmenu';

let About = () => (
    <div>
        <IconMenu/>
        <img alt='Deyby' src={personalImage}></img>
    </div>
)

export default About;