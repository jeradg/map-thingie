import React, { Component } from 'react';

import './App.css';

import JourneyMap from './components/JourneyMap/JourneyMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Map thingie
        </header>
        <main className="App-main">
          <JourneyMap
            className="App__JourneyMap"
          />
        </main>
      </div>
    );
  }
}

export default App;
