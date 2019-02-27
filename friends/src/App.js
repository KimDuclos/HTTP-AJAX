import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendsList/>
        </header>
      </div>
    );
  }
}

export default App;