import React from 'react';
import './portfolioPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import {RecycleNearMe, ReactToDoList, simplWeather, P5_Snake, Snake, nycCrime, moodcam, oldsite, reactSimplWeather, RecycleIT} from '../../images';

let projectList = [
    {
        demoUrl: 'https://recycleit.deybyr647.com',
        name: 'RecycleIT',
        description: 'RecycleIT is a web app designed to motivate its users to recycle, while also educating them! The app provides users with information regarding recycling guidelines and the benefits of recycling! Most importantly, the app aids its users in finding nearby recycling centers. Using current location or a zip code, RecycleIT shows users nearby recycling center locations on a map, and provides them with valuable information, such as operating hours, addresses, websites, and more! Developed using TypeScript, NextJS, Bootstrap, and Google Maps Platform APIs',
        img: RecycleIT,
        githubUrl: 'https://github.com/deybyr647/RecycleIT'
    },
    {
        demoUrl: 'https://simplweatherv1.deybyr647.com',
        name: 'SimplWeather v2',
        description: 'A single page weather app which simply takes a zip code as input and uses it to provide current weather data, along with a 7 day weather forecast. Made with React, Bootstrap, OpenWeatherMap\'s API, Google Maps Geocoding API, along with other libraries under the hood.',
        img: reactSimplWeather,
        githubUrl: 'https://github.com/deybyr647/React-SimplWeathr'
    },
    {
        demoUrl: 'https://github.com/deybyr647/CN-Hackathon',
        name: 'MoodCam',
        description: 'Collaborative 1st place winning project at Google Code Next\'s 3rd Annual Summer Hackathon. Native Windows app which uses artificial intelligence to recognize mood based on facial expressions in pictures, and tells you to take breaks when you look upset while using a certain app. Built using Rust, Python, NodeJS, ExpressJS, Face-API.js, HTML, CSS and JavaScript',
        img: moodcam,
        githubUrl: 'https://github.com/I-graham/CN-Hackathon'
    },
    {
        demoUrl: 'https://rnm.deybyr647.com',
        name: 'RecycleNearMe',
        description: 'A site which aims to educate its users about recycling & which also displays information about nearby recycling centers using user location. Created with HTML, CSS, JavaScript, Google Maps JavaScript API, Google Maps Places API, GNews API and NewsAPI',
        img: RecycleNearMe,
        githubUrl: 'https://github.com/deybyr647/RecycleNearMe'
    },
    {
        demoUrl: 'https://deybyr647.github.io/simplWeather/',
        name: 'SimplWeather',
        description: 'A simple site which shows current weather information for a given US zip code. Created with HTML, CSS, JavaScript, and with OpenWeatherMap\'s Weather API',
        img: simplWeather,
        githubUrl: 'https://github.com/deybyr647/simplWeather'
    },
    {
        demoUrl: 'https://deybyr647.github.io/personal-website-deprecated/',
        name: 'Personal Website v1',
        description: 'The first iteration of my personal portfolio website. Built using HTML, CSS, and JavaScript',
        img: oldsite,
        githubUrl: 'https://github.com/deybyr647/personal-website-deprecated'
    },
    {
        demoUrl: 'https://p5snakejs.deybyr647.com',
        name: 'P5-Snake.js',
        description: 'Snake.js, but created using the P5.js library, for added features and difficulty',
        img: P5_Snake,
        githubUrl: 'https://github.com/deybyr647/p5-snake.js/'
    },
    {
        demoUrl: 'https://colab.research.google.com/drive/1xeE7-buPI10MpJAooznkm8RTjsJOTVuE?usp=sharing',
        name: 'NYC Crime Data Across The Years',
        description: 'Data Science project which involved the analysis of criminal records spanning from 2010 to 2019, from New York City. Analysis was conducted using Python and Pandas within a Google Colaboratory Notebook, using publicly available criminal data from the City of New York',
        img: nycCrime,
        githubUrl: 'https://github.com/deybyr647/NYC-Crime-Data-Across-The-Years'
    },
    {
        demoUrl: 'https://deybyr647.github.io/CN-React-ToDoList/',
        name: 'React To Do List',
        description: 'Guided project, in which I created a To Do List app, along with some peers at a Google Code Next bootcamp using ReactJS and Bootstrap CSS',
        img: ReactToDoList,
        githubUrl: 'https://github.com/deybyr647/CN-React-ToDoList'
    },
    {
        demoUrl: 'https://snakejs.deybyr647.com',
        name: 'Snake.js',
        description: 'A remake of the popular game Snake, using HTML, CSS, and JavaScript',
        img: Snake,
        githubUrl: 'https://github.com/deybyr647/snake.js/'

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
        {projectList.map((p, index) => <Project project={p} key={index}/>)}
    </div>
)

let Portfolio = () => (
    <>
    <PortfolioHeader/>
    <ProjectContainer/>
    </>
)

export default Portfolio;