import express from 'express';
import { signin, signup, getRestaurants } from '../controllers/restaurant.js';

const router = express.Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.get('/', getRestaurants)

export default router;