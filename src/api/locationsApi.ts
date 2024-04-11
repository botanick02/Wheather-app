import { api } from "./core";


const locationEndpointUrl = process.env.REACT_APP_GEO_SEARCH_API_ENDPOINT || "alturl";

console.log(locationEndpointUrl);

export interface LocationFetchData {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface LocationFetchDataMini {
  id: number;
  name: string;
}

export const fetchCities = async (
  city: string
): Promise<LocationFetchDataMini[]> => {
  return api<LocationFetchDataMini[]>(
    `${locationEndpointUrl}/api/GeoSearch/searchLocationsByName/${city}?resultsNumber=5`
  ).then((response) => {
    return response;
  });
};

export const fetchLocationByIdApi = (
  id: number
): Promise<LocationFetchData> => {
  return api<LocationFetchData>(
    `${locationEndpointUrl}/api/GeoSearch/getLocationById/${id}`
  ).then((response) => {
    return response;
  });
};

export const fetchLocationByGPSApi = (
  latitude: number,
  longitude: number
): Promise<LocationFetchData> => {
  return api<LocationFetchData>(
    `${locationEndpointUrl}/api/GeoSearch/getLocationByCords/${latitude}/${longitude}`
  ).then((response) => {
    return response;
  });
};
