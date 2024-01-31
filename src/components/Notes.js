import React from 'react';
import '../styles/Notes.css';
import Note from './Note';

function Notes(props) {
  

  return (
    <div className="Notes row">
      {props.notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          body={note.body}
          date={note.date}
          color={note.color}
          star={note.star}
          handleStarClick={() => props.handleStarClick(note.id)}
          handleDeleteNote={() => props.handleDeleteNote(note.id)}
          viewNote={props.viewNote}
          setViewNote={props.setViewNote}
          viewNoteData={props.viewNoteData}
          handleNoteClick={props.handleNoteClick}
        />
      ))}
    </div>
  );
}

export default Notes;

