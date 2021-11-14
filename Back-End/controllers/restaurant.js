import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Restaurant from '../models/restaurant.js';

export const signup = async(req,res) => {
    try{
        const{ name, email , password, confirmPassword , phoneNumber, location, imageUrl} = req.body;

        if(!(name && email && password)){
            return res.status(400).json({message:"All inputs are required"});
        }

        //check for already existing
        const alreadyExist = await Restaurant.findOne({email});
        if(alreadyExist) return res.status(400).json({message:"User already exist"});

         //Password validation
         if(password !== confirmPassword) return res.status(400).json({message:"Password not matching!"});
         if(phoneNumber.toString().length !== 10) return res.status(400).json({message:"Enter a valid Phone Number!"});
         
         //Encrypt password
         const hashedPassword = await bcrypt.hash(password, 12);

         const result = await Restaurant.create({
             email:email.toLowerCase(),
             password: hashedPassword,
             name,
             phoneNumber,
             location,
             imageUrl,
             foodItems: []
         })

          const token = jwt.sign({
              email: result.email, restaurent_id: result._id},
              'test',
              {expiresIn: "1hr"}
              )

              res.status(200).json({result: result, token}); 
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
}

export const signin = async(req,res) => {
    try{
        const{ email , password } = req.body;

        //check for already existing
        const alreadyExist = await Restaurant.findOne({email});
        if(!alreadyExist) return res.status(400).json({message:"User does not exist"});

         //Password validation
        const isPasswordCorrect = await bcrypt.compare(password, alreadyExist.password);
        
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});
        
        const token = jwt.sign({email: alreadyExist.email, id: alreadyExist._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result: alreadyExist, token});
; 
    }
    catch(error){
        res.status(500).json({message: "Something went wrong!"});
    }
}

export const getRestaurants = async(req, res) => {
    try {
        const restaurantsList = await Restaurant.find();
        res.status(200).json({results: restaurantsList.length, restaurants: restaurantsList});

    } catch (error) {
        
    }
}