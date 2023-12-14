import React from 'react';
import '../styles/Header.css';
import keep from './../keep.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRotateRight, faList, faGear } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div className="Header row d-flex align-items-center">
     

            <div className="header-box  col-3">
                <div className="title-box  d-flex align-items-center">
               
                    <img src={keep} className="title-img" height="45px"/>
                  
                   
                    <h4 className="title-text">Keep</h4>
                
                </div>
            </div>

            <div className="header-box search-box col-6">
                <button className='btn search-btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </button>
                <input 
                    type="text" 
                    placeholder='Search'
                    className='search-note '
                />
            </div>

            <div className="header-box filler-btns col-3 d-flex justify-content-end align-items-center">
                <FontAwesomeIcon icon={faRotateRight} className="filler-icons" />
                <FontAwesomeIcon icon={faList} className="filler-icons"/>
                <FontAwesomeIcon icon={faGear} className="filler-icons"/>
                <div className="fake-acount">G</div>
            </div>
       
        
    </div>
  );
}

export default Header;
