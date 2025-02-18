//ESTE ARCHIVO FUE RESULTADO DE LA INSTRUCCIÓN PROPORCIONADAD A LA IA PARA DIVIDIR LA LÓGICA DEL CONTROLADOR EN ARCHIVOS MÁS PEQUEŃOS Y ESCALABLES.

import { WeatherIcon } from '../helpers';
import { Weather } from '../interfaces';

interface WeatherDetailsProps {
  weather: Weather[];
}

export const WeatherDetails = ({ weather }: WeatherDetailsProps) => (
  <ul className="space-y-10">
    {weather.map((w, idx) => (
      <li key={idx} className="flex items-center justify-between border-b pb-4 border-gray-600 transition-all duration-300 ease-in-out">
        <div className="mt-2">
          <strong className="text-sm font-light font-Montserrat text-white">
            {w.date}: {w.description.toUpperCase()}
          </strong>
          <div className="flex items-center space-x-2 mt-2">
            <WeatherIcon iconCode={w.iconCode} size={40} />
            <span className="text-gray-400 font-light font-Montserrat text-sm">
              {w.min_temperature}°C - {w.max_temperature}°C
            </span>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
