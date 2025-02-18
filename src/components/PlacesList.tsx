//ESTE ARCHIVO FUE RESULTADO DE LA INSTRUCCIÓN PROPORCIONADAD A LA IA PARA DIVIDIR LA LÓGICA DEL CONTROLADOR EN ARCHIVOS MÁS PEQUEŃOS Y ESCALABLES.

import { useEffect, useState } from 'react';

import { fetchPlaces } from '../services/weatherService';
import { PlaceItem } from './PlaceItem';
import { SearchInput } from './SearchInput';
import { WeatherDetails } from './WeatherDetails';
import { Place } from '../interfaces';

export const PlacesList = () => {
  const [city, setCity] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    if (city.trim().length < 3) {
      setPlaces([]);
      setSelectedPlace(null);
      return;
    }

    const fetchData = async () => {
      const data = await fetchPlaces(city);
      setPlaces(data);
    };

    fetchData();
  }, [city]);

  const handleViewMore = (place: Place) => {
    setSelectedPlace(place);
  };

  const clearInput = () => {
    setCity('');
    setPlaces([]);
    setSelectedPlace(null);
  };

  return (
    <div className="container mx-auto p-10 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-1 md:col-span-1 bg-gray-800 hover:bg-gray-600 p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-1xl font-light font-Montserrat text-center mt-3 text-white mb-6">Buscar clima por ciudad</h1>
          
          <SearchInput value={city} onChange={(e) => setCity(e.target.value)} onClear={clearInput} />
          
          <ul className="space-y-4">
            {places.map((place, index) => (
              <PlaceItem key={index} place={place} onViewMore={handleViewMore} />
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 bg-gray-800 hover:bg-gray-700 p-9 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          {selectedPlace && (
            <>
              <h2 className="text-1xl text-white font-light font-Montserrat mb-10">
                Clima detallado en {selectedPlace.city_name}, {selectedPlace.state}
              </h2>
              <WeatherDetails weather={selectedPlace.weather} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
