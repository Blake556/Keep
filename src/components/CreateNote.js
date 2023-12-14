import React, { useState, useEffect } from 'react';
import '../styles/CreateNote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';



function CreateNote(props) {

  // This function only gets the current date to return it to the saveNote state object
  const getCurrentDate = () => {
    const currentDay = new Date();
    const options = { month: 'short', day: 'numeric' };
    return currentDay.toLocaleString('en-US', options);
  };


  // Holds all the necessary data when a note is taken and stores it in saveNote state
  const [saveNote, setSaveNote ] =  useState({
    title: '',
    body: '',
    date: getCurrentDate(),
    color: 'white',
    star: false
  });


  // Might get deleted i dont know yet if this is necessary code
  useEffect(() => {
    // console.log(saveNote);
  }, [saveNote]);
  

  // Instead of writing multiple states to hold separate inputs will take the name and value and using the spread operator loop over both inputs and save their data to the corresponding property in the saveNote sstate up above. 
  const handleSaveNote = (event) => {
    event.preventDefault();
    const {name, value } = event.target

    setSaveNote(previousValue => {
      return {
        ...previousValue,
        [name]: value
      }
    });
    // console.log(saveNote)

    adjustTextareaHeight(event.target);
  };


  // we call adjustTextareaHeight function up above, this function is only to adjust the div dynamically depending on how many words are written 
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };


  // This function will be called if any of the color buttons are selected and depending on which button is clicked the function has a "color" string that will be called and used to set the color property in the saveNote state
  const handleColorBtnClick = (color) => {
    // console.log(color);
    setSaveNote(previousValue => ({
        ...previousValue,
        color: color
     
    }))
  }


// After passing  props.handleAddedNotes through App.js, Main.js it ends up in saveToListOfNotes function so saveNote object and its data can be passed back to App component where itll be stored in an array of objects so multiple notes will be stored in App to pass to different components 
  const saveToListOfNotes = (event) => {
    props.handleAddedNotes(saveNote)
    event.preventDefault();
  }


  return (
    <div className="CreateNote row">
      <form onSubmit={saveToListOfNotes}>
        <div className="row note-create-title">
          <input 
            type="text" 
            placeholder='Title'
            name="title"
            value={saveNote.title}
            onChange={handleSaveNote}
          />
        </div>
        <div className="row note-create-body">
          <textarea 
            type="text" 
            name="body"
            value={saveNote.body} 
            row={1} 
            placeholder='Take a note...'
            onChange={handleSaveNote} />
        </div>
        <div className="row d-flex align-items-center options-panel">

          <div className="col-2 d-flex justify-content-center btn-box">
          <button 
            type="button"
            className='add-btn' 
            onClick={saveToListOfNotes}>
            <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

         
          <div className='col-2 d-flex justify-content-center'>
          <button className='favorite-btn'>
            <FontAwesomeIcon icon={faStar} className='star'/>
          </button>
          </div>

        {/* Refactored  down below, instead of hard coding mutiply button will map over and create all  button with and there colors */}
        <div className='col-8'>
          <div className='d-flex justify-content-end color-container'>

          {['white', 'red', 'green', 'blue', 'yellow', 'orange', 'pink'].map((color) => (
              <button
                type="button"
                key={color}
                className={`color-btn ${color}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorBtnClick(color)}>
              </button>
          ))}

          </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
