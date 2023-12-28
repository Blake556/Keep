import React, { useState } from 'react';
import '../styles/Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewNote from './ViewNote';

function Note(props) {
    // const limitText = (props) => {
    //     if(props.body.length >= 440) {
    //        return props.body.slice(0, 440) + '...'
    //     } else {
    //         return props.body
    //     }
    // }

    
    //Just like in prevouse projects the point of updateNoteClickedState function is so props.handleNoteClick(clickedNoteData) function can be called and the data inside updateNoteClickedState will get passed back to app component. clickedNoteData object is declared and then used as argument to pass back to App. i'm using props to grab the values of ther object, becuase the data initially is coming from < Notes /> and getting passed to <Note /> as props like props.title or props.body. Its no different then below when rendering it, in the return statement.
  const updateNoteClickedState = () => {
    const clickedNoteData = {
      id: props.id,
      color: props.color,
      title: props.title,
      body: props.body,
      // add other properties as needed
    };
    //console.log('Note clicked!');
    props.handleNoteClick(clickedNoteData);
  };


  
  return (
    <div className="Note col-3" style={{ backgroundColor: props.color }}>
      <div className="note-title d-flex justify-content-between">
        <h5>{props.title}</h5>
        <FontAwesomeIcon
          icon={faStar}
          className="star"
          onClick={() => props.handleStarClick(props.id)}
          style={{ color: props.star ? 'gold' : 'gray' }}
        />
      </div>
      {/* Calling updateNoteClickedState will trigger the pop-up as well as populate it with data becuase both states pop-up an fill are in this function  */}
      <div className="inner-note-box" onClick={updateNoteClickedState}> 
        <div className="note-body">
          <p>{props.body}</p>
        </div>
      </div>
      <div className="delete d-flex align-items-end">
        <button
          className="delete-button"
          onClick={() => props.handleDeleteNote(props.id)}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
          />
        </button>
      </div>
      <ViewNote
        //This checks viewNote state if false will not pop-up is if true it will pop-up
        viewNote={props.viewNote}
         // Only passing setViewNote to change the state back to false it the close ( X ) button is clicked 
        setViewNote={props.setViewNote}
       //This is used to pass the data, that is used to fill in the pop-up note
        viewNoteData={props.viewNoteData}
      />
    </div>
  );
}

export default Note;
