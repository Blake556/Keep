import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([])

  function handleAddedNotes(note) {
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



  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
          <SideBar />
          <Main 
            handleStarClick={handleStarClick}
            handleAddedNotes={handleAddedNotes} 
            notes={notes}
          />
      </div>
    </div>
  );
}

export default App;


//Work, Code Pool Sleep BJJ Gym