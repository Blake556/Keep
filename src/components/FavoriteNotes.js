import React from 'react';
import '../styles/FavoriteNotes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function FavoriteNotes() {
  return (
    <div className="Favorite-Notes row d-flex align-items-center">
        <div className="favorite-notes-child favorite-notes-star col-2 d-flex align-items-center">
        <FontAwesomeIcon icon={faStar} className=""/>
        </div>
        <div className="favorite-notes-child col-10 d-flex justify-content-center align-items-center">
            <h5 className="">Email list</h5>
        </div>
       
    </div>
  );
}

export default FavoriteNotes;


