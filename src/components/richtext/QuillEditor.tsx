import React from 'react';
import loadQuill from './loadQuill';
import { toolbarOptions } from './toolbarOptions';
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
                modules: {     
                    toolbar: {
                        container: '#toolbar',
                    }
                },

                theme: 'snow'
            })
        })
    }
    
    render() {
        return (
            <>
               <div id="toolbar">
               <select class="ql-size">
                    <option value="small"></option>
                    <option selected></option>
                    <option value="large"></option>
                    <option value="huge"></option>
                </select>
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
                <button class="ql-code-block"></button>

                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
                </div>
                <div id="editor">
                    <p>Hello World!</p>
                    <p>Some initial <strong>bold</strong> text</p>
                </div>
            </>
        );
    }   
}







