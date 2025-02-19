import axios from 'axios';
import { Place } from '../interfaces';

const PORT = import.meta.env.VITE_BACKEND_PORT;

export const fetchWeatherByCity = async (lat: any, long: any) => {


  try {
    const { data } = await axios.get<Place[]>(`http://localhost:${PORT}/api/weather?lat=${lat}&long=${long}`)

    return data;
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return [];
  }
};

