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

let Resume = () => (
    <>
    <ResumeHeader/>
    <ResumeDoc/>
    </>
)

export default Resume;
