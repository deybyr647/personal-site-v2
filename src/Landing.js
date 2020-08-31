import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Landing.css';
import personalImage from './images/IMG_5314.jpg';

import IconMenu from './components/iconmenu/iconmenu';

let NameWithImage = () => (
  <div className='namewithimage'>
    <h1>Deyby Rodriguez</h1>
    <img alt='Deyby' src={personalImage}></img>
  </div>
)

let LandingContent = ({children}) => (
  <div className = 'main'>
    {children}
  </div>
)

let App = () => (
  <div className='container'>
    <IconMenu/>
    <LandingContent>
    <NameWithImage/>
    </LandingContent>
  </div>
)

export default App;
