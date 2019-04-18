import React, { Component, PropTypes } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  _onCodeClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
  }
  _onStrikeClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }


  render() {
    return (
      <div className="TextEditorWrapper">
        <div class="container">

          <div class="first-btn">
              <button className="bold-btn" onClick={this._onBoldClick.bind(this)}><b>B</b></button>
            </div>
          <div class="second-btn">
              <button className="underline-btn" onClick={this._onUnderlineClick.bind(this)}>U</button>
            </div>
          <div class="third-btn">
              <button className="code-btn" onClick={this._onCodeClick.bind(this)}>C</button>
            </div>
          <div class="fourth-btn">
            <button className="strike-btn" onClick={this._onStrikeClick.bind(this)}>S</button>
          </div>
        </div>
        
        <Editor editorState={this.state.editorState} 
                onChange={this.onChange} 
                handleKeyCommand={this.handleKeyCommand}
              />
    </div>
      
    );
  }
}

export default TextEditor