import '.styles/logos/logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={'.styles/logos/logo.svg'} className='App-logo' alt='logo' />
        <p>
          <code>src/App.js</code>
        </p>
        <a>
          className="App-link" href="https://reactjs.org" target="_blank"
          rel="noopener noreferrer" Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

