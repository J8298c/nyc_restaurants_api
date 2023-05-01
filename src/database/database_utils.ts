import { MongoClient, type Collection } from 'mongodb'
import { Restaurant } from '../interfaces/Restaurant'

let mongoClient: MongoClient

export const connectToDatabase = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const client = new MongoClient(process.env.MONGO_URI!)
  await client.connect()
  mongoClient = client
}

export function getRestaurantCollection (collectionName: string): Collection<Restaurant> {
  return mongoClient.db('sample_restaurants').collection<Restaurant>(collectionName)
}
