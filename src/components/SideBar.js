import React from 'react';
import '../styles/SideBar.css';
import  FavoriteNotes from './FavoriteNotes'

function SideBar() {
  return (
    <div className="SideBar col-3">
     <FavoriteNotes />
     <FavoriteNotes />
     <FavoriteNotes />
    </div>
  );
}

export default SideBar;
