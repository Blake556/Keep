import React from 'react';
import '../styles/FavoriteNotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Notes from './Notes';


function FavoriteNotes(props) {

  return (
    <div className="Favorite-Notes">
      {props.notes.map(note => {

        return note && note.star == true ? (

          <div className="favorite-notes-box row d-flex align-items-center"
          style={{ backgroundColor: note.color}}>
              <div className="favorite-notes-child favorite-notes-star col-2 d-flex align-items-center">
              <FontAwesomeIcon 
                icon={faStar} 
                className=""
                onClick={() => props.handleStarClick(note.id)}
              />
              </div>
              <div className="favorite-notes-child col-10 d-flex justify-content-center align-items-center">
                  <h5 className="">{note.title}</h5>
              </div>
          </div>

      ) : (
        <div className="default-message d-flex justify-content-center align-items-center">
          <h5>No favorite Notes added</h5>
        </div>
        ) })}
    </div>
  );
}

export default FavoriteNotes;
