import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import personalImage from './images/IMG_5314.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faGithub, faCss3} from '@fortawesome/free-brands-svg-icons';

import About from './pages/about/aboutPage';

import IconMenu from './components/iconmenu/iconmenu';

let NameWithImage = () => (
  <div className='namewithimage'>
    <img alt='Deyby' src={personalImage}></img>
    <h1>Deyby Rodriguez</h1>
  </div>
)

let BriefIntro = () => (
  <div className='intro'>
    <h2>A Brief Intro...</h2>
    <p>Welcome to my site! <br/> 
    Feel free to look around my site & take a look at my portfolio<br/>
    I'm eager to engage in new projects & if you'd like to collaborate on a project,
    feel free to get in touch with me!
    </p>
  </div>
)

let TechUsed = ({children}) => (
  <div className='techUsed'>
  <h3>This website was built with the following tools...</h3>
    <ul>
      {children}
    </ul>
  </div>
)

let TechIcon = ({iconObj}) => (
  <li title={iconObj.title}>{iconObj.icon}</li>
)

let techIcons = [
  {
    icon: <FontAwesomeIcon icon={faReact}/>,
    title: 'React.js'
  },
  {
    icon: <FontAwesomeIcon icon={faCss3}/>,
    title: 'CSS'
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs}/>,
    title: 'Node.js'
  },
  {
    icon: <FontAwesomeIcon icon={faGithub}/>,
    title: 'GitHub'
  }
]

let LandingContent = () => (
  <div className = 'main'>
    <NameWithImage/>
    <BriefIntro/>
    <TechUsed>
      {techIcons.map(ico => (
        <TechIcon iconObj={ico}/>
      ))}
    </TechUsed>
  </div>
)

let App = () => (
  <div className='container'>
    <Router>
      <IconMenu/>

      <Switch>
        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/'>
          <LandingContent/>
        </Route>
      </Switch>

    </Router>

   
  </div>
)

export default App;
