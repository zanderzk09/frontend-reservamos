# CHALLENGE FRONTEND RESERVAMOS


_En este proyecto consumí una api que cree en mi backend para la prueba de Reservamos Full Stack_


### Instalación 🔧


- _Instala los modulos de node_

```
 npm install
```

- _En el proyecto está un archivo .env.example y sólo debes de editar el archivo a .env para poder usarlo_

```
 npm run dev
```

- _Abre el navegador y pega la url especificada en consola_


## Construido con 🛠️

- React 
- TypeScript
- Axios
- Tailwind CSS


## Autor ✒️

_Alexander Arrazate_

## NOTAS SOBRE LA IA

_Usé chatgGPT para arreglar algunos errores de tipado que se iban presentando, así como de agregar estilo con Tailwind CSS, y alguno de lógica_

- PROMPTS :

- 1

```
Divide la logica de este componente, para que sea modular y fácil de leer:

interface WeatherData {
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
  icon: string;
}

export const WeatherDetails = ({ lat, long, detail }: WeatherDetailsProps) => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const latitude = lat ?? Number(params.get('lat'));
  const longitude = long ?? Number(params.get('long'));

  const [weatherData, setWeatherData] = 
...resto del código
```

- 2

```

Modifica esta función para desestructur la fecha y luego retornarla y junto los próximos 7 días de la semana:

export const getWeatherByPlace = async (req, res) => {


  const { lat, long } =  req.query
  
  console.log(lat, long)

  try {
    const weatherData = await axios.get(https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=418d5c266716e5286e1afe642c7ec951);

    const data = weatherData.data.list;
...resto del código
```

- 3 

```
  Agrega una ruta con react-router-dom para cada componente y así poder navegar entre ambos, el primero tendrá el path=/ y el otro /detail, estes el código:
  import { Place } from '../interfaces';
  import { InfoView } from './infoView';
  import { WeatherDetails } from './WeatherDetails';

  interface PlaceItemProps {
    place: Place;
  }


  export const PlaceItem = ({ place }: PlaceItemProps) => (

    <li className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl">
...resto del código
```









