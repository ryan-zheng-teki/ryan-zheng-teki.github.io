import React from 'react';
import loadQuill from './loadQuill';

export class QuillEditor extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      editor: null,
    };
    this.initializeQuillEditor = this.initializeQuillEditor.bind(this);
  }

  componentDidMount() {
    loadQuill(this.initializeQuillEditor);
  }
    
  initializeQuillEditor() {
    this.setState({
      // @ts-ignore
      editor: new window.Quill('#editor', {
        modules: {     
          toolbar: {
            container: '#toolbar',
          }
        },

        theme: 'snow'
      })
    });
  }
    
  render() {
    return (
      <>
        <div id="toolbar">
          <select className="ql-size">
            <option value="small" />
            <option value="large" />
            <option value="huge" />
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
          <button className="ql-code-block" />

          <button className="ql-script" value="sub" />
          <button className="ql-script" value="super" />
        </div>
        <div id="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
        </div>
      </>
    );
  }   
}








