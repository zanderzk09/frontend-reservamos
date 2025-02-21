import { kelvinToCelsius } from '../helpers';
import { WeatherIcon } from './WeatherIcon';

interface WeatherInfoProps {
  temp: number;
  weather: string;
  icon: string;
}

export const WeatherInfo = ({ temp, weather, icon }: WeatherInfoProps) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      <WeatherIcon icon={icon} description={weather} />
      <div>
        <p className="text-2xl font-bold">Today</p>

        <p className="text-lg">{weather.charAt(0).toUpperCase() + weather.slice(1)}</p>
        <p className="text-3xl">{kelvinToCelsius(temp)}°C</p>

      </div>
    </div>
  );
};