import React from 'react';
import '../styles/Main.css';

import CreateNote from './CreateNote'

import Notes from './Notes'

function Main() {
  return (
    <div className="Main col-9">
     
     <CreateNote />
     <Notes />

    </div>
  );
}

export default Main;
