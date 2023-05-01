interface Address {
  building: string
  coord: number[]
  street: string
  zipcode: string
}

interface Grade {
  date: Date
  grade: string
  score: number
}

export interface Restaurant {
  _id?: string
  address: Address
  borough: string
  cuisine: string
  grades: Grade[]
  name: string
  restaurant_id: string
}
