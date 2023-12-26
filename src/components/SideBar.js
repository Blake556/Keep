import React from 'react';
import '../styles/SideBar.css';
import  FavoriteNotes from './FavoriteNotes'

function SideBar(props) {
  return (
    <div className="SideBar col-3">
     <FavoriteNotes 
        notes={props.notes} 
        handleStarClick={props.handleStarClick}
        //Passing pop-up state and handler below
         setViewNote={props.setViewNote}
        //Passing data for pop-up state and handler below
        viewNoteData={props.viewNoteData}
        handleNoteClick={props.handleNoteClick}
     />
    
    </div>
  );
}

export default SideBar;
