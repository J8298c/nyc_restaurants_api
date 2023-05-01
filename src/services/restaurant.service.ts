import { type Restaurant } from '../interfaces/Restaurant'
import { getRestaurantCollection } from '../database/database_utils'

interface FetchQuery {
  zipcode: string
  food_type?: string
  rating?: number
}

interface RestaurantServiceResponse {
  restaurants: Restaurant[]
}

const queryDBForRestaurants = async (query: { zipcode: string }): Promise<Restaurant[]> => {
  const collection = getRestaurantCollection('restaurants')
  return await collection.find({ 'address.zipcode': query.zipcode }).toArray()
}

export const multipleRestaurantService = async (query: FetchQuery): Promise<RestaurantServiceResponse> => {
  const restaurants = await queryDBForRestaurants({ zipcode: '11420' })
  return {
    restaurants
  }
}
