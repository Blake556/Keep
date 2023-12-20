import React, { useState, useEffect } from 'react';
import '../styles/Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

function Note(props) {

    // style={{ backgroundColor: props.color, border: `1px solid ${props.color}`
  return (
 
    <div className="Note col-3"  style={{ backgroundColor: props.color}}>
    
        <div className="note-title d-flex justify-content-between"> 
            <h5>{props.title}</h5>
            <FontAwesomeIcon 
                icon={faStar} 
                className='star'
                onClick={() => props.handleStarClick(props.id)}
                style={{ color: props.star ? 'gold' : 'gray'}}
                />
        </div>
        <div className="note-body"> 
            <p>{props.body}</p>
        </div>
        <div className="delete d-flex align-items-end">
            <button 
                className="delete-button"
                onClick={() => props.handleDeleteNote(props.id)}
                >
            <FontAwesomeIcon 
                icon={faTrash}
                className="delete-icon"
                onClick={() => props.handleDeleteNote(props.id)}
            />
            </button>
        </div>
        

    </div>
  );
}

export default Note;
