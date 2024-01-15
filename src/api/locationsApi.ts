import { api } from "./core";

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

export const fetchCities = async (city: string): Promise<LocationFetchDataMini[]> => {
  return api<LocationFetchDataMini[]>(
    `https://localhost:7107/api/GeoSearch/${city}?resultsNumber=5`
  ).then((response) => {
    return response;
  });
};

export const fetchLocationByIdApi = (
  id: number
): Promise<LocationFetchData> => {
  return api<LocationFetchData>(
    `https://localhost:7107/api/GeoSearch/getLocation/${id}`
  ).then((response) => {
    return response;
  });
};
