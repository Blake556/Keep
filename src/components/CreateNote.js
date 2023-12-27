import React, { useState, useEffect } from 'react';
import '../styles/CreateNote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
// Added  uuid llibrary which will give id a unique id value
import { v4 as uuid } from 'uuid';




function CreateNote(props, event) {
  //clickedColor is only responsible for managing the CSS border when one of the color buttons is clicked. See the color buttons styling for rest of explanation. 
  const [clickedColor, setClickedColor] = useState(null)


  const handleColorChose = (color) => {
    //passed the color argument from down below to the color parameter inside this function, color is the specific color of the button and will set the state to that color instead of null. when clickedColor is passed in the inline styles itll take that specific color that was clicked on and apply the border to that button  
    setClickedColor(color)
  };

  // This function only gets the current date to return it to the saveNote state object
  const getCurrentDate = () => {
    const currentDay = new Date();
    const options = { month: 'short', day: 'numeric' };
    return currentDay.toLocaleString('en-US', options);
  };


  // Holds all the necessary data when a note is taken and stores it in saveNote state
  const [saveNote, setSaveNote ] =  useState({
    id: uuid(),
    title: '',
    body: '',
    date: getCurrentDate(),
    color: '',
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
    //below  setClickedColor is passed only to reset to no (color button) border when the note is saved 
    setClickedColor(null)
    // All this does is reset the inputs to blank so another note can be typed without haveing to delete previous input text
    setSaveNote({
      id: uuid(),
      title: '',
      body: '',
      date: getCurrentDate(),
      color: '',
      star: false,
    });
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
            type="submit" 
            name="body"
            value={saveNote.body} 
            row={1} 
            placeholder='Take a note...'
            onChange={handleSaveNote} />
        </div>
        <div className="row d-flex align-items-center options-panel">

          <div className="col-2 d-flex justify-content-center btn-box">
            <button type="button" className='add-btn'  onClick={saveToListOfNotes}>
              <FontAwesomeIcon 
                icon={faPlus}
               
              />
            </button>
          </div>

         
          <div className='col-2 d-flex justify-content-center'>
            <button className='favorite-btn'>
              {/* <FontAwesomeIcon 
                icon={faStar} 
                className='star'
                type="text"
                onClick={() => props.handleStarClick(props.index)}
              /> */}
            </button>
          </div>

        {/* Refactored  down below, instead of hard coding mutiply button will map over and create all  button with and there colors */}
        <div className='col-8'>
          <div className='d-flex justify-content-end color-container'>

          {['rgb(89, 89, 89)', 'rgb(131, 0, 0)', 'rgb(34, 114, 49)', 'rgb(0, 72, 131)', '    rgb(186, 179, 38)', ' rgb(178, 130, 40)', 'rgb(158, 99, 109)'].map((color) => (
              <button
                type="button"
                key={color}
                className={` color-btn ${color}`}
                
                style={ { backgroundColor: color, border: clickedColor === color ? 'solid 2px rgb(42, 195, 255)' :  'none' } }
                // handleColorBtnClick(color) will handle adding the current color to the object while handleColorChose(color) only is responsible for giving a single button a border when clicked this is posible becuase color argument comes from map which gets the specific color then is passed to the handleColorChose  function as an argument.;
                onClick={() => {
                  handleColorBtnClick(color)  
                  handleColorChose(color);
                }}>
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










//// CreateNote.js
// import React, { useState, useEffect } from 'react';
// import '../styles/CreateNote.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

// function CreateNote(props) {
//   const getCurrentDate = () => {
//     const currentDay = new Date();
//     const options = { month: 'short', day: 'numeric' };
//     return currentDay.toLocaleString('en-US', options);
//   };

//   const [saveNote, setSaveNote] = useState({
//     title: '',
//     body: '',
//     date: getCurrentDate(),
//     color: 'gray',
//     star: false,
//   });

//   const [activeColor, setActiveColor] = useState('gray');

//   useEffect(() => {
//     // console.log(saveNote);
//   }, [saveNote]);

//   const handleSaveNote = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;

//     setSaveNote((previousValue) => ({
//       ...previousValue,
//       [name]: value,
//     }));

//     adjustTextareaHeight(event.target);
//   };

//   const adjustTextareaHeight = (textarea) => {
//     textarea.style.height = 'auto';
//     textarea.style.height = `${textarea.scrollHeight}px`;
//   };

//   const handleColorBtnClick = (color) => {
//     setSaveNote((previousValue) => ({
//       ...previousValue,
//       color: color,
//     }));
//   };

//   const saveToListOfNotes = (event) => {
//     props.handleAddedNotes(saveNote);
//     event.preventDefault();
//   };

//   return (
//     <div className="CreateNote row">
//       <form onSubmit={saveToListOfNotes}>
//         <div className="row note-create-title">
//           <input
//             type="text"
//             placeholder="Title"
//             name="title"
//             value={saveNote.title}
//             onChange={handleSaveNote}
//           />
//         </div>
//         <div className="row note-create-body">
//           <textarea
//             type="text"
//             name="body"
//             value={saveNote.body}
//             row={1}
//             placeholder="Take a note..."
//             onChange={handleSaveNote}
//           />
//         </div>
//         <div className="row d-flex align-items-center options-panel">
//           <div className="col-2 d-flex justify-content-center btn-box">
//             <button
//               type="button"
//               className="add-btn"
//               onClick={saveToListOfNotes}
//             >
//               <FontAwesomeIcon icon={faPlus} />
//             </button>
//           </div>
//           <div className="col-2 d-flex justify-content-center">
//             <button className="favorite-btn">
//               <FontAwesomeIcon icon={faStar} className="star" />
//             </button>
//           </div>
//           <div className="col-8">
//             <div className="d-flex justify-content-end color-container">
//               {['gray', 'red', 'green', 'blue', 'yellow', 'orange', 'pink'].map(
//                 (color) => (
//                   <button
//   type="button"
//   key={color}
//   className={`color-btn ${activeColor === color ? 'active' : ''}`}
//   style={{ backgroundColor: color }}
//   onClick={() => {
//     handleColorBtnClick(color);
//     setActiveColor(color);
//   }}
// >
// </button>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateNote;
