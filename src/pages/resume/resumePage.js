import React from 'react';
import './resumePage.css';
import resumePDF from './Resume.pdf'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

let ResumeHeader = () => (
    <div className='main'>
        <h1>My Resume</h1>
    </div>
)

let ResumeDoc = () => (
    <div className='main'>
        <div className='resumeContainer'>
            <Document file={resumePDF}>
                <Page className='PDFPage' pageNumber={1}/>
            </Document>
        </div>
    </div>
)

let ExternalView = () => (
    <div className='main'>
        <h4><a target='_blank' rel='noopener noreferrer' href='https://drive.google.com/file/d/1pG2iOI74eOXmLITIXZnXPNfNXxVV4k7b/view?usp=sharing'>View In A New Tab</a></h4>
    </div>
)

let Resume = () => (
    <>
    <ResumeHeader/>
    <ResumeDoc/>
    <ExternalView/>
    </>
)

export default Resume;
