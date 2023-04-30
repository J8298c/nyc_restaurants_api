interface FetchQuery {
  zipcode: string;
  food_type?: string;
  rating?: number  
}

interface RestaurantServiceResponse {
  restaurants: any[];
  success: boolean
}

export const multipleRestaurantService = async (query: FetchQuery): Promise<RestaurantServiceResponse> => {
  console.log(query)
  return { success: true, restaurants: []}
}