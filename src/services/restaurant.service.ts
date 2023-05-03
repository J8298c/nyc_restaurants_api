import { type Restaurant } from '../interfaces/Restaurant'
import { getRestaurantCollection } from '../database/database_utils'
import { ObjectId } from 'mongodb'

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

export const singleRestaurantService = async (id: string): Promise<Restaurant> => {
  const coll = getRestaurantCollection('restaurants')
  // @ts-expect-error _id for mongo
  return await coll.findOne({ _id: ObjectId.createFromHexString(id) })
}
