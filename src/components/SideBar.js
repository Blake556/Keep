import React from "react";
import "../styles/SideBar.css";
import FavoriteNotes from "./FavoriteNotes";

function SideBar(props) {
  return (
    <div className="SideBar col-3">
      <FavoriteNotes
        notes={props.notes}
        handleStarClick={props.handleStarClick}
        setViewNote={props.setViewNote}
        viewNoteData={props.viewNoteData}
        handleNoteClick={props.handleNoteClick}
      />
    </div>
  );
}

export default SideBar;
