import React from 'react';
import './resumePage.css';
import resumePDF from './Resume.pdf'

let Resume = () => (
    <div>
        <h1>Hello, Resume</h1>
        <div className='main'>
            <embed className='resume' src={resumePDF} type='application/pdf'/>
        </div>
    </div>
)

export default Resume;