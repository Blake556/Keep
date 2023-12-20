import React from 'react';
import '../styles/Notes.css';
import Note from './Note'

function Notes(props) {

  let noteData = props.notes
  // console.log(noteData)
  return (
    <div className="Notes row">
    {props.notes.map((note, index) => {
      return (
        <Note
          key={index} // Added out of standard react practice
          id={note.id} //Added to be able to usefor functions like star or trash
          title={note.title} 
          body={note.body}
          date={note.date}
          color={note.color}
          star={note.star}
          // handleStarClick={props.handleStarClick}
          handleStarClick={() => props.handleStarClick(note.id)} // with the current version of adding an id 
          handleDeleteNote={() => props.handleDeleteNote(note.id)} 
        />
      )
    })}
    </div>
  );
}

export default Notes;
