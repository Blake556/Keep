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
  
  function handleStarClick(index) {
    const updateNotes = [...notes]
    updateNotes[index].star = !updateNotes[index].star
    setNotes(updateNotes)
  }

  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
          <SideBar />
          <Main 
            handleStarClick={handleStarClick}
            handleAddedNotes={handleAddedNotes} 
            notes={notes}
          />
      </div>
    </div>
  );
}

export default App;


//Work, Code Pool Sleep BJJ Gym