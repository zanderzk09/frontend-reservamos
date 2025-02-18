import { JSX } from 'react';

export const WeatherIcon = ({
  iconCode,
  size = 50,
}: {
  iconCode: string;
  size?: number;
}): JSX.Element | null => {  
  if (!iconCode) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return <img className="bg-slate-500" src={iconUrl} alt="Clima" style={{ width: size, height: size }} />;
}

