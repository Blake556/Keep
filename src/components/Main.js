import React from 'react';
import CreateNote from './CreateNote'
import Notes from './Notes'
import '../styles/Main.css';
import Note from './Note'

function Main(props) {
  return (
    <div className="Main col-9">
     <CreateNote handleAddedNotes={props.handleAddedNotes} />
     <Notes 
        notes={props.notes} 
        handleStarClick={props.handleStarClick}
        />
    </div>
  );
}

export default Main;
