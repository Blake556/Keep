import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [viewNote, setViewNote] = useState(false);
  const [viewNoteData, setViewNoteData] = useState(null);

  function handleNoteClick(clickedNote) {
    setViewNoteData(clickedNote);
    setViewNote(true);
  }

  function handleAddedNotes(note) {
    const newNote = { ...note, id: uuidv4() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleStarClick(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, star: !note.star };
        }
        return note;
      });
    });
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <SideBar
          notes={notes}
          handleStarClick={handleStarClick}
          viewNoteData={viewNoteData}
          setViewNote={setViewNote}
          handleNoteClick={handleNoteClick}
        />
        <Main
          notes={notes}
          handleStarClick={handleStarClick}
          handleAddedNotes={handleAddedNotes}
          handleDeleteNote={handleDeleteNote}
          viewNote={viewNote}
          viewNoteData={viewNoteData}
          setViewNote={setViewNote}
          handleNoteClick={handleNoteClick}
        />
      </div>
    </div>
  );
}

export default App;
