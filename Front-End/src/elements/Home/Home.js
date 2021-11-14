import React ,{  useState } from "react";
import mainImage from "../img/food-zomato.jpg";
import "./Home.css";
import { Modal } from '../Model/Modal';
import { Modal1 } from '../Model/Modal1';
import styled from 'styled-components';
import { GlobalStyle } from '../globalstyles/globalstyles';
import SearchBar from '../Search Bar/SearchBar';




const Container = styled.div`


`;


function Top  () {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);

      // document.getElementById('blurr').style.filter = 'blur(5px)'

  };
  const [showModal1, setShowModal1] = useState(false);

  const openModal1 = () => {
    setShowModal1(prev => !prev);
  };
  return(
    <div id ="blurr" className="container-fluid">
      <div className="row" style={{ marginBottom: 30 }}>
        <img src={mainImage}  alt="aneka-makanan"></img>
      </div>
      <div>

      </div>
      <div className="message">
      <h1>FoodParadise</h1>
      <h2>Discover the best food and drinks in FoodParadise</h2>
      </div>
      
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
      

      <div className="login_signup">
      <div className="login">
      <button  onClick={openModal} className="loginbtn" type="">login</button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle/>
      </div>
      <div className="signup">
      <button onClick={openModal1} className="loginbtn" type="">signup</button></div>
      <Modal1 showModal={showModal1} setShowModal={setShowModal1} />
        <GlobalStyle />
      </div>
      </div>



  );}

export default Top;
