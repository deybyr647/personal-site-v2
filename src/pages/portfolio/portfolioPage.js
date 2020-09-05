import React from 'react';
import './portfolioPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { RecycleNearMe, ReactToDoList, simplWeather, P5_Snake} from '../../images';

let projectList = [
    {
        demoUrl: 'https://deybyr647.com/RecycleNearMe',
        name: 'RecycleNearMe',
        description: 'RecycleNearMe aims to educate its users about recycling, ecology, and related topics. The site also eases the process of recycling for its users by providing information on how to package recycle-able materials, and by using user geolocation to show nearby recycling centers within a certain radius of the users location. Map shows recycling center information, such as address and if the location is open/closed. Developed with HTML, CSS, JavaScript, Google Maps JavaScript API, Google Places API, GNews API, and NewsAPI',
        img: RecycleNearMe,
        githubUrl: 'https://github.com/deybyr647/RecycleNearMe'
    },
    {
        demoUrl: 'https://deybyr647.com/simplWeather',
        name: 'simplWeather',
        description: 'A simple site which shows current weather information for a given US zip code. Weather information provided by OpenWeatherMap API. Created with HTML, CSS, and JavaScript',
        img: simplWeather,
        githubUrl: 'https://github.com/deybyr647/simplWeather'
    },
    {
        demoUrl: 'https://deybyr647.com/p5-snake.js/',
        name: 'P5-Snake.js',
        description: 'Snake.js, but created using the P5.js library, for added features and difficulty',
        img: P5_Snake,
        githubUrl: 'https://github.com/deybyr647/p5-snake.js/'
    },
    {
        demoUrl: 'https://deybyr647.com/CN-React-ToDoList',
        name: 'React To Do List',
        description: 'Guided project, in which I created a To Do List app, along with some peers at a Google Code Next bootcamp using StackBlitz IDE, React.js and Bootstrap CSS',
        img: ReactToDoList,
        githubUrl: 'https://github.com/deybyr647/CN-React-ToDoList'
    }
]

let PortfolioHeader = () => (
    <div className='main'>
        <h1>My Portfolio</h1>
    </div>
)

let Project = ({project}) => (
    <div className='project'>
        <h4>{project.name}</h4>
        <img src={project.img} alt={project.name}/>
        <p>{project.description}</p>

        <div className='projectLinks'>
            <a target='_blank' rel='noopener noreferrer' href={project.demoUrl}><FontAwesomeIcon icon={faLink}/></a>
            <a target='_blank' rel='noopener noreferrer' href={project.githubUrl}><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    </div>
)

let ProjectContainer = () => (
    <div className='main'>
        {projectList.map(p => <Project project={p}/>)}
    </div>
)

let Portfolio = () => (
    <>
    <PortfolioHeader/>
    <ProjectContainer/>
    </>
)

export default Portfolio;