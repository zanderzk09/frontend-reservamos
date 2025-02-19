import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import { fetchWeatherByCity } from '../api';
import { kelvinToCelsius } from '../helpers';
import { WeatherInfo } from './weatherInfo';

interface WeatherDetailsProps {
  lat: number;
  long: number;
  detail: boolean;
}

interface WeatherData {
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
  icon: string;
  date: string;
}

export const WeatherDetails = ({ lat, long, detail, }: WeatherDetailsProps) => {
  const navigate = useNavigate(); 
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeatherByCity(lat, long);
        setWeatherData(data as any);
      } catch (error) {
        console.error('Error al cargar el clima:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [lat, long]);

  if (loading) return <p>Cargando clima...</p>;
  if (!weatherData.length) return <p>No hay datos de clima disponibles.</p>;

  const currentWeather = weatherData[0];
  const dailyForecast = weatherData.filter((_, index) => index % 8 === 0);

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="p-4 mt-10 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <div className="flex items-center gap-4 mt-2">

        <WeatherInfo icon={currentWeather.icon} weather={currentWeather.weather} temp={currentWeather.temp} />

      </div>

      {detail && (
        <>
          <button
            onClick={handleBackClick}
            className="mt-4 px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700"
          >
            Home
          </button>

          <p className="mt-2">
            Máx: {kelvinToCelsius(currentWeather.tempMax)}°C | Mín: {kelvinToCelsius(currentWeather.tempMin)}°C
          </p>

          <h3 className="text-xl font-bold mt-4">Forecast for the next few days</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {dailyForecast.map((day, index) => (
              <div key={index} className="p-2 bg-gray-800 rounded-lg text-center">
                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.weather}
                  className="mx-auto"
                />

                <p className="font-semibold">{day.weather}</p>
                <p className="font-semibold">{day.date}</p>
                <p>{kelvinToCelsius(day.temp)}°C</p>
                <p className="text-sm">Max: {kelvinToCelsius(day.tempMax)}°C</p>
                <p className="text-sm">Mín: {kelvinToCelsius(day.tempMin)}°C</p>
              </div>
            ))}

          </div>
        </>
      )}
    </div>
  );
};
