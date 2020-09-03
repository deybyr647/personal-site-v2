import React from 'react';
import './aboutPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faCss3, faHtml5, faLinux, faGitAlt, faPython, faJsSquare } from '@fortawesome/free-brands-svg-icons';

import NameWithImage from '../../components/namewithimage/namewithimage';

let skills = [
    {
        icon: <FontAwesomeIcon icon={faHtml5}/>,
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
        icon: <FontAwesomeIcon icon={faJsSquare}/>,
        title: 'GitHub'
    },
    {
        icon: <FontAwesomeIcon icon={faReact}/>,
        title: 'React.js'
    },
    {
        icon: <FontAwesomeIcon icon={faGitAlt}/>,
        title: 'CSS'
    },
    {
        icon: <FontAwesomeIcon icon={faPython}/>,
        title: 'Node.js'
    },
    {
        icon: <FontAwesomeIcon icon={faLinux}/>,
        title: 'GitHub'
    }
]

let MySkills = ({children}) => ( //Same as TechUsed in App.js
    <div className='skills'>
    <h3>My Skills</h3>
    <p>Sooner or later I'll add on to this list, but for now, these are the technologies I'm currently familiar with...</p>
      <ul>
        {children}
      </ul>
    </div>
)
  
let SkillIcon = ({iconObj}) => ( //Same as TechIcon in App.js
    <li title={iconObj.title}>{iconObj.icon}</li>
)

let AboutMyself = () => (
    <div className='aboutMe'>
        <h4>About Me</h4>
        <p>My name is Deyby Antony Rodriguez and currently, I am a high school senior living in New York. Technology, well to be more specific, Computer Science, has been an interest for quite some time now. I aspire to one day become a web developer, in Front-End, Back-End, or Full-Stack development. Aside from technology, I love the winter, New York City, and I am also interested in business and finance.</p>
    </div>
)

let About = () => (
    <>
    <div className='main'>
        <NameWithImage/>
        <AboutMyself/>
    </div>

    <div className='main'>
        <MySkills>
            {skills.map(s => <SkillIcon iconObj={s}/>)}
        </MySkills>
    </div>
    </>
)

export default About;