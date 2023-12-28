import React from 'react';
import CreateNote from './CreateNote'
import Notes from './Notes'
import '../styles/Main.css';
import Note from './Note'

function Main(props) {
  return (
    <div className="Main col-9">
     <CreateNote 
        handleAddedNotes={props.handleAddedNotes} 
        // handleStarClick={props.handleStarClick}
      />
     { props.notes.length > 0 ? (
     <Notes 
        notes={props.notes} 
        handleStarClick={props.handleStarClick}
        handleDeleteNote={props.handleDeleteNote} 
         //Passing pop-up state and handler below
        viewNote={props.viewNote}
        setViewNote={props.setViewNote}
        //Passing the data to populate pop-up note
        viewNoteData={props.viewNoteData}
        handleNoteClick={props.handleNoteClick}
      />
       ) : (
        <div className="no-notes-msg">
        <h5>No Notes added</h5>
        </div>
       )}
    </div>
   
  );
}

export default Main;
