import React from 'react';
import loadQuill from './loadQuill';
export class QuillEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editor: null,
        }
        this.initializeQuillEditor = this.initializeQuillEditor.bind(this);
    }

    componentDidMount() {
        loadQuill(this.initializeQuillEditor);
    }
    
    initializeQuillEditor() {
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







