import { MongoClient, type Collection } from 'mongodb'

let mongoClient: MongoClient

export const connectToDatabase = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const client = new MongoClient(process.env.MONGO_URI!)
  await client.connect()
  mongoClient = client
}

export function getClient (collectionName: string): Collection {
  return mongoClient.db('sample_restaurants').collection(collectionName)
}
