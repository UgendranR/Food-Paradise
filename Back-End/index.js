import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import homeRoutes from './routes/home.js'
import userRoutes from './routes/user.js'
import restaurantRoutes from './routes/restaurant.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/restaurant', restaurantRoutes);

dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`)))
    .catch((error)=>console.error(error));

