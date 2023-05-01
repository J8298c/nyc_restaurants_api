interface FetchQuery {
  zipcode: string;
  food_type?: string;
  rating?: number  
}

interface RestaurantServiceResponse {
  restaurants: any[];
  success: boolean
}

const fetchRestaurantsWithQuery = async () => {
  return [{name: 'test one', food_type: 'latin', boro: 'queens'}]
}

export const multipleRestaurantService = async (query: FetchQuery): Promise<RestaurantServiceResponse> => {
  console.log(query)
  const restaurants = await fetchRestaurantsWithQuery()
  return { success: true, restaurants}
}