import axios from 'axios';
import { Place } from '../interfaces';

const PORT = import.meta.env.VITE_BACKEND_PORT;

export const fetchPlaceByCity = async (city: string) => {
  try {
    const { data } = await axios.get<Place[]>(`http://localhost:${PORT}/api/places/city?q=${city}`);

    return data;
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return [];
  }
};

export const fetchPopularCities = async (): Promise<Place[]> => {
  try {
    const response = await fetch(`http://localhost:${PORT}/api/places/popularity`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las ciudades populares:", error);
    return [];
  }
};




