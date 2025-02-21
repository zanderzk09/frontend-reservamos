import { useNavigate } from 'react-router-dom';
import { Place } from '../interfaces';
import { WeatherDetails } from './WeatherDetails';

interface PlaceItemProps {
  place: Place;
}

export const PlaceItem = ({ place }: PlaceItemProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => { //
    navigate(`/details?city=${place.city_name}&state=${place.state}&lat=${place.lat}&long=${place.long}`);
  };

  return (
    <div
      className="relative bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
      onClick={handleNavigate}
    >
      <h2 className="text-normal text-gray-200 font-light font-Montserrat">
        {place.city_name}, {place.state}
      </h2>

      <WeatherDetails lat={place.lat} long={place.long} detail={false} placeName={place.city_name} placeState={place.state} />
    </div>
  );
};
