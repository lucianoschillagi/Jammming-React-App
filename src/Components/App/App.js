/* App Component */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// TODO: import SearchBar, SearchResults and Playlist components

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          { /*  Add a SearchBar component  */}
          <div className="App-playlist">
          { /*  Add a SearchResults component  */}
          { /*  Add a Playlist component  */}
          </div>
        </div>
    </div>
    );
  }
}

export default App;
