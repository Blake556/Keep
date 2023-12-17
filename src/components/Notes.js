import React from 'react';
import '../styles/Notes.css';
import Note from './Note'

function Notes(props) {

  let noteData = props.notes
  console.log(noteData)
  return (
    <div className="Notes row">
    {props.notes.map(note => {
      return (
        <Note 
          title={note.title} 
          body={note.body}
          date={note.date}
          color={note.color}
          star={note.star} 
          handleStarClick={props.handleStarClick}
        />
      )
    })}
    </div>
  );
}

export default Notes;
