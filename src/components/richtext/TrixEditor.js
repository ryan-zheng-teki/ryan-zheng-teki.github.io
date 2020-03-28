import React from 'react';
import loadQuill from './loadQuill';
import 'trix/trix';
import 'trix/trix-core';

export class TrixEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editor: null,
        }
        this.initializeTrixEditor = this.initializeTrixEditor.bind(this);
    }

    componentDidMount() {
        loadQuill(this.initializeQuillEditor);
    }
    
    initializeTrixEditor() {
        this.setState({
            editor: new window.Quill('#editor', {
                theme: 'snow'
            })
        })
    }
    
    render() {
        return (
            <div id="editor">
                <p>Hello World!</p>
                <p>Some initial <strong>bold</strong> text</p>
            </div>
        );
    }   
}