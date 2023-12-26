import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import { v4 as uuidv4 } from 'uuid';

function App() {
  // This holds all the note data as an object and storesevery note object in notes array state
  const [notes, setNotes] = useState([])
  // This is responsible for the note poping up and closing based on click event
  const [viewNote, setViewNote] = useState(false)
  //When a notes is clicked on and pops-up this holds the data that will render inside that note
  const [viewNoteData, setViewNoteData] = useState(null);


 // I set both states in this function viewNote and viewNoteData. setViewNoteData(clickedNote) ( clickNote is the parameter that will get called as an argument in < Note /> and will be used to pass back the data ) viewNoteData is responsible for getting the specific note that was clicked on from the array of notes, so it can access it's title, body data for when viewNote state equals true and the note pops up viewNoteData state will populate the pop-up with data
 function handleNoteClick(clickedNote) {
    setViewNoteData(clickedNote)
    setViewNote(true)
    // console.log('Note clicked!');
 }

 console.log(viewNoteData)

  function handleAddedNotes(note) {
    // This works but if i favorite a note they all will get favorited.
    // notes.push(note)
    // setNotes([...notes])

    // I need to review this but basically the code had to be changed from up above to this becuase of the way i added an id and property to createNote and used uuidv4 as the value which just basically means id will have its own unique value from uuidv4 library

    const newNote = { ...note, id: uuidv4() };
    setNotes(prevNotes => [...prevNotes, newNote]);
  } 
  
//  This version of handleStarClick function worked when I added the index and used the index to determine which objects star was clicked on but decided it would be better practice to add the id when the object is getting created and use that to determine the position

//   function handleStarClick(index) {
//   setNotes((prevNotes) => {
//     // Create a new array with the modified object
//     const updatedNotes = [...prevNotes];
//     updatedNotes[index] = {
//       ...updatedNotes[index],
//       star: !updatedNotes[index].star,
//     };
//     return updatedNotes;
//   });
// }


// This handleStarClick takes the existing star property in the note object and will change the state to true if the star of that note is clicked on
function handleStarClick(id) {
  setNotes(prevNotes => {
    return prevNotes.map(note => {
      if (note.id === id) {
        return { ...note, star: !note.star };
      }
      return note;
    });
  });
}


function handleDeleteNote(id) {
  setNotes(prevNotes => {
    // Use filter to create a new array without the note with the specified id
    return prevNotes.filter(note => note.id !== id);
  });
}

// function handleViewnote() {
//   setViewNote(true)
// }

  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
          <SideBar 
            notes={notes} 
            handleStarClick={handleStarClick}
           //Passing pop-up state and handler below
            viewNoteData={viewNoteData}
            setViewNote={setViewNote}
            handleNoteClick={handleNoteClick}
          />
          <Main 
            notes={notes}
            handleStarClick={handleStarClick}
            handleAddedNotes={handleAddedNotes}
            handleDeleteNote={handleDeleteNote} 
           //Passing pop-up state and handler below
            viewNote={viewNote}
            viewNoteData={viewNoteData}
            setViewNote={setViewNote}
            handleNoteClick={handleNoteClick}
          />
      </div>
    </div>
  );
}

export default App;


