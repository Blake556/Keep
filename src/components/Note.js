import React, { useState, useEffect } from 'react';
import '../styles/Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Note(props) {
    // Holds the state for if the star icon is clicked 'favorite notes' if it is that will be stored here.
    const [favoriteNote, setFavoriteNote ] = useState(false)

    // handles the click event for favoriteNote state
    const handleFavoriteNote = (event) => {
        setFavoriteNote(true)
    }
    console.log()
    // style={{ backgroundColor: props.color, border: `1px solid ${props.color}`
  return (
    // Depending on the state of createNote compnoent and the color selected for the note: style={{ backgroundColor: props.color}} will pass the color selected and apply it to the note thats rendered as well as the other properties such as title, body etc.
    <div className="Note col-3"  style={{ backgroundColor: props.color}}>
    
        <div className="note-title d-flex justify-content-between align-items-center"> 
            <h5>{props.title}</h5>
            <FontAwesomeIcon 
                icon={faStar} 
                className='star'
                onClick={() => props.handleStarClick(props.index)}
                style={{ color: props.id ? 'gold' : 'gray'}}
                />
        </div>
        <div className="note-body"> 
            <p>{props.body}</p>
        </div>
        

    </div>
  );
}

export default Note;
