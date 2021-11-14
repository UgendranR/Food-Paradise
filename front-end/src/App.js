import React  from "react";
import Header from "./elements/Home/Home";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Postsignup from "./elements/Post_method/postsignup";
import OrderOnline from "./elements/Order_Online/OrderOnline";
import GeoLocation from "./elements/geo/Geo";
import Carousal from "./elements/carousal/carousal";




 function app(){


    return (
        <div className="app_body">
        
          <Router>
          <Routes>
           <Route path="/" element={<Header/>}/>  
           <Route exact path="/OrderOnline" element={<OrderOnline/>} />   </Routes>
          
          </Router>
          {/* <Top_shops/>
          <Testimonials/> */}

          <Carousal/>

      </div>
    );

}

export default app;

