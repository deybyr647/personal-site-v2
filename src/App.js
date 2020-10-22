import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faGithub, faCss3} from '@fortawesome/free-brands-svg-icons';

const Portfolio = lazy(() => import('./pages/portfolio/portfolioPage'));
const Resume = lazy(() => import('./pages/resume/resumePage'));
const NameWithImage = lazy(() => import('./components/namewithimage/namewithimage'));
const IconMenu = lazy(() => import('./components/iconmenu/iconmenu'));
const Footer = lazy(() => import('./components/footer/footer'));
const About = lazy(() => import('./pages/about/aboutPage'));

const renderLoader = () => <div className='loader'></div>;

let BriefIntro = () => (
  <div className='intro'>
    <h2>A Brief Introduction...</h2>
    <p>Welcome to my site! <br/> <br/>
    Feel free to look around my site & take a look at my portfolio.<br/> <br/>
    I'm always eager to engage in new & exciting projects. <br/> <br/> If you'd like to collaborate on a project,
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
    title: 'ReactJS'
  },
  {
    icon: <FontAwesomeIcon icon={faCss3}/>,
    title: 'CSS'
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs}/>,
    title: 'NodeJS'
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
    <Router>
      <Switch>
        <Route path='/resume'>
          <Suspense fallback={renderLoader()}>
            <Resume/>
            <IconMenu/>
            <Footer/>
          </Suspense>
        </Route>

        <Route path='/portfolio'>
          <Suspense fallback={renderLoader()}>
            <Portfolio/>
            <IconMenu/>
            <Footer/>
          </Suspense>
        </Route>

        <Route path='/about'>
          <Suspense fallback={renderLoader()}>
            <About/>
            <IconMenu/>
            <Footer/>
          </Suspense>
        </Route>

        <Route path='/'>
          <Suspense fallback={renderLoader()}>
            <LandingContent/>
            <IconMenu/>
            <Footer/>
          </Suspense>
        </Route>
      </Switch>
    </Router>
)

export default App;
