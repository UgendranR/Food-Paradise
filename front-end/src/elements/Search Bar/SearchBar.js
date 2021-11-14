import React, {useState} from 'react';
import "./SearchBar.css";

export default function SearchBar(){
    return(


        <div className="header max-width">

        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <i className="fi fi-rr-marker absolute-center location-icon"></i>
                <div>Bangalore</div>
              </div>
              <i className="fi fi-rr-caret-down absolute-center"></i>
            </div>
            <div className="location-search-separator"></div>
            <SearchBar/>
             <div className="header-searchBar">
              <i className="fi fi-rr-search absolute-center search-icon"></i>
              <input name="search" type="text"
                className="search-input"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div> 
          </div>
  
  
        </div>
        </div>
      
    );
}