import React from 'react';
import Document from 'react-pdf/dist/umd/Document';
import Page from 'react-pdf/dist/umd/Page';

const PDFfile = () => {
    return (
        <Document>
            <Page>
                <text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi nulla rem id, nihil nostrum vero aspernatur quo ratione fuga, aut officiis officia similique iste necessitatibus, perspiciatis natus harum molestiae facilis? Magni laudantium commodi ratione molestiae quas qui blanditiis esse!
                </text>
            </Page>
        </Document>
    );
}

export default PDFfile;
