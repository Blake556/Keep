import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'


function App() {
  const [notes, setNotes] = useState([])

  function handleAddedNiotes() {

  }
  
  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
          <SideBar />
          <Main />
      </div>
    </div>
  );
}

export default App;
