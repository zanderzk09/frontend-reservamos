import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWeatherByCity } from '../api';
import { kelvinToCelsius } from '../helpers';
import { WeatherInfo } from './weatherInfo';

interface WeatherDetailsProps {
  lat: number;
  long: number;
  detail: boolean;
  placeName: string;
  placeState: string;
}


interface WeatherData {
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
  icon: string;
  date: string;
}

export const WeatherDetails = ({ lat, long, detail, placeName, placeState }: WeatherDetailsProps) => {
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

  if (loading) return <p>Loading...</p>;
  if (!weatherData.length) return <p>No data</p>;

  const currentWeather = weatherData[0];
  const dailyForecast = weatherData.filter((_, index) => index % 5 === 0);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="relative p-4 mt-10 bg-gray-900 text-white rounded-lg">
      <h2 className="text-4xl font-bold">Current Weather</h2>

      <div className="flex items-center gap-4 mt-2">

        <WeatherInfo icon={currentWeather.icon} weather={currentWeather.weather} temp={currentWeather.temp} />


      </div>

      {detail && (

        <div className="relative min-h-screen">
          <button
            onClick={handleBackClick}
            className="absolute top-20 -right-4 m-4 px-5 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600"
          >
            Back
          </button>
          <p className="mt-2">
            Máx: {kelvinToCelsius(currentWeather.tempMax)}°C | Mín: {kelvinToCelsius(currentWeather.tempMin)}°C
          </p>


          <h3 className="text-xl mt-14 font-light text-center lg:text-4xl lg:mt-0">Forecast for the next 7 days at <p className="font-bold">{placeName}, {placeState}</p> </h3>
          <div className="grid grid-cols-3 gap-4 mt-10 ">
            {dailyForecast.map((day, index) => (
              <div key={index} className="p-2 bg-gray-800 rounded-lg text-center">
                <p className="font-semibold text-xl">{day.date}</p>

                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.weather}
                  className="mx-auto"
                />

                <p className="font-semibold">{day.weather}</p>
                <p>{kelvinToCelsius(day.temp)}°C</p>
                <p className="text-sm">Max: {kelvinToCelsius(day.tempMax)}°C</p>
                <p className="text-sm">Mín: {kelvinToCelsius(day.tempMin)}°C</p>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};
