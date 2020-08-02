import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Pdf from '../pdf/resume-web-aug-1.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume (){

    return(

            <Document file={Pdf}>
                <Page pageNumber={1}/>
            </Document>


    )
}

export default Resume;
