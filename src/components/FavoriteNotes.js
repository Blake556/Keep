import React from "react";
import "../styles/FavoriteNotes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ViewNote from "./ViewNote";

function FavoriteNotes(props) {
  return (
    <div className="Favorite-Notes">
      {props.notes.some((note) => note && note.star) ? (
        props.notes.map((note) => {
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
                <div
                  className="favorite-notes-child col-10 d-flex justify-content-center align-items-center"
                  onClick={() => props.handleNoteClick(note)}
                >
                  <h5 className="">{note.title}</h5>
                </div>
              </div>
            );
          }
          return null; // Don't render if note is not a favorite
        })
      ) : (
        <div className="default-message d-flex justify-content-center align-items-center">
          <h5>No favorite notes</h5>
        </div>
      )}
    </div>
  );
}

export default FavoriteNotes;
