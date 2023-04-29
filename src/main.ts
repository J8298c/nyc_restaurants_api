import express from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from './database/database_utils'

dotenv.config()
const app = express()

const PORT = process.env.PORT ?? 3000

if (process.env.MONGO_URI === undefined) {
  console.log('missing database connection string')
  process.exit(1)
}

(async function databaseSetup () {
  try {
    await connectToDatabase()
    console.log('connected to database')
  } catch (err) {
    console.error('failed to connect to database')
    process.exit(1)
  }
})()
app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})
