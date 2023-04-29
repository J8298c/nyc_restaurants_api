import { type Request, type Response } from 'express'

interface MultiRestaurantQuery {
  zipcode: string;
  rating?: number;
  food_type?: string;
}

export const getMultipleRestaurants = async (req: Request, res: Response): Promise<void> => {
  try {
    const zipcode = req.params.zipcode
    const query: MultiRestaurantQuery = {
      zipcode
    }

    if (Object.keys(req.query).length > 0) {
      // eslint-disable-next-line @typescript-eslint/naming-convention

      if (req.query.rating !== undefined) {
        query.rating = Number(req.query.rating)
      }
      if (req.query.food_type !== undefined) {
        query.food_type = String(req.query.food_type)
      }
    }
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
