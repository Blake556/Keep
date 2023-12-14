import React from 'react';
import '../styles/Main.css';

import CreateNote from './CreateNote'

import Notes from './Notes'

function Main(props) {
  return (
    <div className="Main col-9">
     
     <CreateNote handleAddedNotes={props.handleAddedNotes}/>
      {/* notes{props.notes} */}
     <Notes />

    </div>
  );
}

export default Main;
