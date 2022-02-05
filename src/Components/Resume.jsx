import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import portfolio from '../assets/portfolio.pdf'

const Resume = () => {
    return (
        <div>
            <Document file={portfolio}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default Resume;