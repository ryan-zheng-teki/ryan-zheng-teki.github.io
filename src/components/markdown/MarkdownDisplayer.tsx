
import React from 'react';
import showdown from 'showdown';
import ReactHtmlParser from 'react-html-parser';

export class MarkdownDisplayer  extends React.Component {
    constructor(props: any) {
        super(props);
    }

    generateMarkdownContent(): string {
        let converter = new showdown.Converter();
        let text = '# hello, markdown!';
        return converter.makeHtml(text);
    }

    render() {
        return (
            <>
                { ReactHtmlParser(this.generateMarkdownContent()) }
            </>
        )
    }
}