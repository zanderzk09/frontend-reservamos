import { useLocation } from 'react-router-dom';
import { WeatherDetails } from '../components';


export const CityWeatherDetail = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const placeName = String(params.get('city'))
  const placeState = String(params.get('state'))
  const lat = Number(params.get('lat'));
  const long = Number(params.get('long'));

  if (!lat || !long) return <p>Error.</p>;

  return (
    <div className="">
      <div className="text-2xl text-gray-200 font-bold font-Montserrat">
        {placeName}, {placeState}
      </div>

      <WeatherDetails lat={lat} long={long} detail={true} />
    </div>
  );
};
