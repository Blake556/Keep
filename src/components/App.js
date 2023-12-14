import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'


function App() {
  const [notes, setNotes] = useState([])

  function handleAddedNotes(note) {
    notes.push(note)
    setNotes([...notes])
  } 
  console.log(notes)

  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
          <SideBar />
          <Main handleAddedNotes={handleAddedNotes} notes={notes}/>
      </div>
    </div>
  );
}

export default App;


//Work, Code Pool Sleep BJJ Gym