import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import './App.css';

import Nav from './Components/Nav';
import TextEditor from './Components/TextEditor';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <TextEditor/>
      </div>
    );
  }
}

export default App;
