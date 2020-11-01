import React from 'react';
import logo from './logo.svg';
import './App.css';


import Notes from './components/Notes'

function Default() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const App = () => {
  const notes = [
    {
      content: 'Static Note 1',
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: 1,
    }, 
    {
      content: 'Static note 2',
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: 2,
    }
  ]
  console.log(notes);
  return (
    <>
      <Notes preNotes={notes} />
    </>
  )
}


export default App;
