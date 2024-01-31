import React from "react";
import "../styles/ViewNote.css";
import "../styles/Header.css";

function ViewNote(props) {
  return props.viewNote ? (
    <div
      className="ViewNote"
      style={{ backgroundColor: props.viewNoteData.color }}
    >
      <div className="view-note-head d-flex align-items-center">
        <h5 className="view-note-ppt">{props.viewNoteData.title}</h5>
        <button
          className="pop-up-close-btn"
          onClick={() => props.setViewNote(false)}
        >
          X
        </button>
      </div>
      <div className="view-note-body">
        <p>{props.viewNoteData.body}</p>
      </div>
    </div>
  ) : null;
}

export default ViewNote;
