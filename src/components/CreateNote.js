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
            <button className='color-btn white' style={{ backgroundColor: 'white' }} 
              onClick={ () => handleColorBtnClick('white')}>
            </button>
            <button className='color-btn red' style={{ backgroundColor: 'red' }}
              onClick={ () => handleColorBtnClick('red')}>
            </button>
            <button className='color-btn green' style={{ backgroundColor: 'green' }}
              onClick={ () => handleColorBtnClick('green')}>
             </button>
            <button className='color-btn blue' style={{ backgroundColor: 'blue' }}
              onClick={ () => handleColorBtnClick('blue')}>
            </button>
            <button className='color-btn yellow' style={{ backgroundColor: 'yellow' }}
              onClick={ () => handleColorBtnClick('yellow')}>
            </button> 
            <button className='color-btn orange' style={{ backgroundColor: 'orange' }}
              onClick={ () => handleColorBtnClick('orange')}>
            </button>
            <button className='color-btn pink' style={{ backgroundColor: 'pink' }}
              onClick={ () => handleColorBtnClick('pink')}>
            </button>
          </div>
        </div>

        </div>
       
      </form>
    </div>
  );
}

export default CreateNote;
