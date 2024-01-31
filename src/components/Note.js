import React, { useState } from "react";
import "../styles/Note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import ViewNote from "./ViewNote";

function Note(props) {
  const updateNoteClickedState = () => {
    const clickedNoteData = {
      id: props.id,
      color: props.color,
      title: props.title,
      body: props.body,
    };

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
          style={{ color: props.star ? "gold" : "gray" }}
        />
      </div>
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
          <FontAwesomeIcon icon={faTrash} className="delete-icon" />
        </button>
      </div>
      <ViewNote
        viewNote={props.viewNote}
        setViewNote={props.setViewNote}
        viewNoteData={props.viewNoteData}
      />
    </div>
  );
}

export default Note;
