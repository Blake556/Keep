// CreateNote.js
import React, { useState, useEffect } from 'react';
import '../styles/CreateNote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';



function CreateNote() {

  const [saveNote, setSaveNote ] =  useState({
    title: '',
    body: '',
    date: '',
    color: '',
    star: false
  });


  useEffect(() => {
    console.log(saveNote);
  }, [saveNote]);
  
  const handleSaveNote = (event) => {

    const {name, value } = event.target

    setSaveNote(previousValue => {
      return {
        ...previousValue,
        [name]: value
      }
    });
    console.log(saveNote)


    adjustTextareaHeight(event.target);
    
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleColorBtnClick = (color) => {
    console.log(color);
    setSaveNote(previousValue => ({
        ...previousValue,
        color: color
     
    }))
  }



  return (
    <div className="CreateNote row">
      <form>
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
          <button className='add-btn' onClick={handleSaveNote}>
            <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

         
          <div className='col-2 d-flex justify-content-center'>
          <button className='favorite-btn'>
            <FontAwesomeIcon icon={faStar} className='star'/>
          </button>
          </div>


        <div className='col-8'>
          <div className='d-flex justify-content-end color-container'>

          {['white', 'red', 'green', 'blue', 'yellow', 'orange', 'pink'].map((color) => (
              <button
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
