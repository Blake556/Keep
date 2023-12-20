import React from 'react';
import '../styles/FavoriteNotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Notes from './Notes';

function FavoriteNotes(props) {
  console.log(props.notes);

  // Check if there are any favorite notes
  const hasFavoriteNotes = props.notes.some(note => note && note.star);

  return (
    <div className="Favorite-Notes">
    {/* The code directly below will check to see if one note is a favorite if so the default msg will not be rendered */}
    {props.notes.some(note => note && note.star) ? (
    // The second loops over notes will loop over each individual note if note exist ans its star property equals true, this will display individual notes
      props.notes.map(note => {

        if (note && note.star) {
          return (
            <div
              className="favorite-notes-box row d-flex align-items-center"
              style={{ backgroundColor: note.color }}
              key={note.id}
            >
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
          );
        }
        return null; // Don't render if note is not a favorite
      })
    ) : (
      // if no notes render below
      <div className="default-message d-flex justify-content-center align-items-center">
        <h5>No favorite Notes added</h5>
      </div>
    )}
  </div>
  );
}

export default FavoriteNotes;