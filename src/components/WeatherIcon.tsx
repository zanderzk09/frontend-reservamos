interface WeatherIconProps {
  icon: string;
  description: string;
}

export const WeatherIcon = ({ icon, description }: WeatherIconProps) => {
  return (

    <img
      src={`https://openweathermap.org/img/wn/${icon}.png`}
      alt={description}
    />
  );
};