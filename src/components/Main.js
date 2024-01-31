import React from "react";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import "../styles/Main.css";
import Note from "./Note";

function Main(props) {
  return (
    <div className="Main col-9">
      <CreateNote handleAddedNotes={props.handleAddedNotes} />
      {props.notes.length > 0 ? (
        <Notes
          notes={props.notes}
          handleStarClick={props.handleStarClick}
          handleDeleteNote={props.handleDeleteNote}
          viewNote={props.viewNote}
          setViewNote={props.setViewNote}
          viewNoteData={props.viewNoteData}
          handleNoteClick={props.handleNoteClick}
        />
      ) : (
        <div className="no-notes-msg">
          <h5>No notes added</h5>
        </div>
      )}
    </div>
  );
}

export default Main;
