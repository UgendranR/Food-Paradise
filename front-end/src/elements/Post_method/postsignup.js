import React,{useState} from 'react';
import Axios from 'axios';
 

function Postsignup( ) {



    const url="https://food-paradise-server.herokuapp.com/user/signup"
    const [data,setData]=  useState({
        email : "",
        password : "",
        confirmPassword : "",
        firstName : "",
        lastName : "",
        phoneNumber : "",
    })

    function submit(e){
        e.preventDefault();
        console.log(data)
        Axios.post(url,{
        email :data.email,
        password : data.password,
        confirmPassword : data.confirmPassword,
        firstName : data.firstName,
        lastName : data.lastName,
        phoneNumber : data.phoneNumber,
        })
        .then(res =>{
            console.log(res.data)
        })

    }
    function handle(e){
            const newdata= {...data}
            newdata[e.target.id]=e.target.value;
            setData(newdata)
            //console.log(newdata) 
    }

    return (
       
        <div>
            <form className="form2" onSubmit={(e) => submit(e)}>
                   
                    <input onChange={(e) => handle(e)} type="text" id="email" placeholder="Your Email" required></input>
                    <input onChange={(e) => handle(e)} type="text" id="password"  placeholder="Password" required></input>
                    <input onChange={(e) => handle(e)} type="text" id="confirmPassword" placeholder="Confirm Password" required></input>
                    <input onChange={(e) => handle(e)} type="text" id="firstName" placeholder="First Name" required></input>
                    <input onChange={(e) => handle(e)} type="text" id="lastName" placeholder="Last Name" required></input>
                    <input onChange={(e) => handle(e)} type="text" id="phoneNumber"  placeholder="Phone Number" required></input>

                    
                     <input type="checkbox" id="conditions"  required></input>
                    <label id="conditions" for="conditions">  
I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</label><br></br> 
                  <button  >Create account</button>
                  
                  </form>
            
        </div>
    );
}

export default Postsignup;