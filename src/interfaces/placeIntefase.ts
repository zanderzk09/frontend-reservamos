import { Weather } from './weatherInterface';

export interface Place {
  city_name: string;
  state: string;
  weather: Weather[];
}