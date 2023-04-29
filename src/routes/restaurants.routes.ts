import express from 'express'
import { getMultipleRestaurants, getSingleRestaurant } from '../controllers/restaurant.controller'

const restaurantRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
restaurantRouter.get('/near/:zipcode', getMultipleRestaurants)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
restaurantRouter.get('/:id', getSingleRestaurant)

export default restaurantRouter
