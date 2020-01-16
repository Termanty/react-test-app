import React from 'react';
import './App.css';

function App({notes}) {  
  const rows = notes.map(note => <li>{note.content}</li>)

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {rows}
      </ul>
    </div>
  );
}

export default App;