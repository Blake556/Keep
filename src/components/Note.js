import React, { useState, useEffect } from 'react';
import '../styles/Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Note(props) {

    // style={{ backgroundColor: props.color, border: `1px solid ${props.color}`
  return (
 
    <div className="Note col-3"  style={{ backgroundColor: props.color}}>
    
        <div className="note-title d-flex justify-content-between align-items-center"> 
            <h5>{props.title}</h5>
            <FontAwesomeIcon 
                icon={faStar} 
                className='star'
                onClick={() => props.handleStarClick(props.index)}
                style={{ color: props.star ? 'gold' : 'gray'}}
                />
        </div>
        <div className="note-body"> 
            <p>{props.body}</p>
        </div>
        

    </div>
  );
}

export default Note;
