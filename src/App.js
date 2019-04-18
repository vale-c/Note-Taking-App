import React, { Component, PropTypes } from 'react';
import 'draft-js/dist/Draft.css';
import './App.css';
import TextEditor from './Components/TextEditor';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TextEditor/>
    

      </div>
    );
  }
}

export default App;
