import { useEffect, useState } from 'react';
import {  fetchPopularCities } from '../api'; 
import { PlaceItem } from './PlaceItem';
import { Place } from '../interfaces';

export const PlacesList = () => {
  const [popularCities, setPopularCities] = useState<Place[]>([]);

  const loadPopularCities = async () => {
    try {
      const popularCitiesData = await fetchPopularCities();
      setPopularCities(popularCitiesData);
    } catch (error) {
      console.error("Error al cargar las ciudades populares:", error);
    }
  };

  useEffect(() => {
    loadPopularCities();
  }, []);


  return (
    <div className="container mx-auto p-10 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">

        <div className="col-span-1 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-md font-light font-Montserrat text-white mb-4 text-center">Most popular cities</h2>
          <ul className="space-y-4">
            {popularCities.map((place, index) => (
              <PlaceItem key={index} place={place}  />
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};