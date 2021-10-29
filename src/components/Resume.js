import React from 'react'
import '../css/resume.scss'
import PDF from '../pdf/RESUME.pdf'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume(){

    const pageNumber = 1

    return(
    <div className="resume-container" id="resume">
        <h1 className="resume-heading">Resume</h1>

        <div className="document-container">
            <Document file={PDF}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>

        <div className="download"><a href={PDF} download="resume">Download</a></div>
    </div>
    )
}

export default Resume;
