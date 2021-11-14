import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true},
    password: {type: String, required:true},
    phoneNumber: {type: Number, required: true},
    location: {type: String, required: true},
    foodItems: [String],
    imageUrl: {type: String, required: true},
    id: {type: String}
})

export default mongoose.model("Restaurant", restaurantSchema )