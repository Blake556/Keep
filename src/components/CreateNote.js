import React, { useState, useEffect } from "react";
import "../styles/CreateNote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

function CreateNote(props, event) {
  const [clickedColor, setClickedColor] = useState(null);

  const handleColorChose = (color) => {
    setClickedColor(color);
  };

  const getCurrentDate = () => {
    const currentDay = new Date();
    const options = { month: "short", day: "numeric" };
    return currentDay.toLocaleString("en-US", options);
  };

  const [saveNote, setSaveNote] = useState({
    id: uuid(),
    title: "",
    body: "",
    date: getCurrentDate(),
    color: "",
    star: false,
  });

  useEffect(() => {}, [saveNote]);

  const handleSaveNote = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setSaveNote((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });

    adjustTextareaHeight(event.target);
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleColorBtnClick = (color) => {
    setSaveNote((previousValue) => ({
      ...previousValue,
      color: color,
    }));
  };

  const saveToListOfNotes = (event) => {
    props.handleAddedNotes(saveNote);
    event.preventDefault();

    setClickedColor(null);

    setSaveNote({
      id: uuid(),
      title: "",
      body: "",
      date: getCurrentDate(),
      color: "",
      star: false,
    });
  };

  return (
    <div className="CreateNote row">
      <form onSubmit={saveToListOfNotes}>
        <div className="row note-create-title">
          <input
            type="text"
            placeholder="Title"
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
            placeholder="Take a note..."
            onChange={handleSaveNote}
          />
        </div>
        <div className="row d-flex align-items-center options-panel">
          <div className="col-2 d-flex justify-content-center btn-box">
            <button
              type="button"
              className="add-btn"
              onClick={saveToListOfNotes}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="col-2 d-flex justify-content-center">
            <button className="favorite-btn"></button>
          </div>

          <div className="col-8">
            <div className="d-flex justify-content-end color-container">
              {[
                "rgb(89, 89, 89)",
                "rgb(131, 0, 0)",
                "rgb(34, 114, 49)",
                "rgb(0, 72, 131)",
                "rgb(186, 179, 38)",
                "rgb(178, 130, 40)",
                "rgb(158, 99, 109)",
              ].map((color) => (
                <button
                  type="button"
                  key={color}
                  className={` color-btn ${color}`}
                  style={{
                    backgroundColor: color,
                    border:
                      clickedColor === color
                        ? "solid 2px rgb(42, 195, 255)"
                        : "none",
                  }}
                  onClick={() => {
                    handleColorBtnClick(color);
                    handleColorChose(color);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
