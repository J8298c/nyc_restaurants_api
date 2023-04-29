import { type Request, type Response } from 'express'

export const getMultipleRestaurants = async (req: Request, res: Response): Promise<void> => {
  try {
    res.send('Multiple Restaurants')
  } catch (err) {
    console.error(err)
  }
}

export const getSingleRestaurant = async (req: Request, res: Response): Promise<void> => {
  try {
    res.send('Single Restaurants')
  } catch (err) {
    console.error(err)
  }
}
