import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Carousal() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Best offers to Look For</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
       
        <img src="https://coupontricks.in/wp-content/uploads/2021/05/1-14.jpg " height="250px" width="400px"alt="new"/>
           
        <img src="https://happysale.in/hs/img/w/up/zomatocouponshappysalejpg1626767964284.jpg  " height="250px" width="400px"alt="new"/>

                  <img src="  https://geeekypedia.com/wp-content/uploads/2019/01/zomato-offer-code-2020.jpeg" height="250px" width="400px"alt="new"/>

                <img src="https://cdn.static-zoutons.com/images/originals/blog/BANNER38_1612358719.png" height="250px" width="400px"alt="new"/>

              <img src="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg" height="250px" width="400px"alt="new"/>

                  <img src="https://cdn.static-zoutons.com/images/originals/blog/main-banner_(41)_1624534666.png" height="250px" width="400px"alt="new"/>

                  <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1575611153757/zomato-coupons.jpg " height="250px" width="400px"alt="new"/>

        </Carousel>
      </div>
    </>
  );
}

export default Carousal 