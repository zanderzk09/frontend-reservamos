//ESTE ARCHIVO FUE RESULTADO DE LA INSTRUCCIÓN PROPORCIONADAD A LA IA PARA DIVIDIR LA LÓGICA DEL CONTROLADOR EN ARCHIVOS MÁS PEQUEŃOS Y ESCALABLES.

import { Place } from '../interfaces';

interface PlaceItemProps {
  place: Place;
  onViewMore: (place: Place) => void;
}

export const PlaceItem = ({ place, onViewMore }: PlaceItemProps) => (
  <li className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out hover:scale-105">
    <h2 className="text-sm text-gray-200 font-light font-Montserrat">{place.city_name}, {place.state}</h2>
    <button
      onClick={() => onViewMore(place)}
      className="mt-2 text-sm bg-slate-800 font-extralight font-Montserrat text-gray-200 px-4 py-2 rounded-md hover:bg-slate-600 transition-colors duration-200"
    >
      Ver más información
    </button>
  </li>
);
