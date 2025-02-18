//ESTE ARCHIVO FUE RESULTADO DE LA INSTRUCCIÓN PROPORCIONADAD A LA IA PARA DIVIDIR LA LÓGICA DEL CONTROLADOR EN ARCHIVOS MÁS PEQUEŃOS Y ESCALABLES.


import axios from 'axios';
import { Place } from '../interfaces';

const PORT = import.meta.env.VITE_BACKEND_PORT;

export const fetchPlaces = async (city: string) => {
  try {
    const response = await axios.get<Place[]>(`http://localhost:${PORT}/api/v2/places?q=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo los datos:', error);
    return [];
  }
};
