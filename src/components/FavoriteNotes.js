import React from 'react';
import '../styles/FavoriteNotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ViewNote from './ViewNote';

function FavoriteNotes(props) {



  return (
    <div className="Favorite-Notes">
    {/* The code directly below will check to see if only one note is a favorite. if there atleast favorites then the default msg will not be rendered */}
    {props.notes.some(note => note && note.star) ? (
    // The second loops over notes will loop over each individual note if note exist ans its star property equals true, this will display individual notes
      props.notes.map(note => {

        if (note && note.star) {
          return (
            <div
              className="favorite-notes-box row d-flex align-items-center"
              style={{ backgroundColor: note.color }}
              key={note.id}
              // Becuase handleNoteClick handles both pop-up and extracts the data to fill in the pop-up with data. this is all thats needs to be passed for the pop-up to work. All the state is pulled from app unlike , Note /> where the state is loaclly defined 

              //From what i gathered so far if <ViewNot /> is taken away from <Note /> then <ViewNot /> will also not work when <FavoriteNote /> is clicked on so when this function is called below its using  <ViewNot /> inside <Note /> to render starting from <App />
              onClick={() => props.handleNoteClick(note)}
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