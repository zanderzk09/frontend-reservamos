### ESTE ES EL FRONTEND DE LA PRUEBA TÉCNICA PARA EL PUESTO DE JR FULL STACK EN RESERVAMOS


---------- INSTRUCCIONES DE INSTALACIÓN ------------------------------------------------------------------------------------------

# npm install // PARA RECONSTRUIR LOS MODULOS DE NODE.

# npm run dev // PARA PODER HACER LAS PETICIONES A LA API, TEN EN CUENTA QUE TAMBIÉN DEBE DE ESTAR CORRIENDO EL BACKEND AL MISMO TIEMPO.

# copia la URL de http://localhost:(tu_puerto) y pegala en cualquier navegador de tu preferencia.


---------- DOCUMENTACIÓN DE LA IA -----------------------------------------------------------------------------------------------

# 1.- EN EL FRONTEND SE UTILIZÓ LA IA CHATGPT DE OPENAI PARA REALIZAR UNA GRAN PARTE DE LAS CLASES DE TAILWIND CSS PARA DARLE ESTILOS A LOS COMPONENTES.
# 2.- SE UTILIZÓ PARA REALIZAR LA SEPARACIÓN DE RESPONSABILIDADES EN LA LÓGICA DE LOS COMPONENTES.
# 3.- SE UTILIZÓ PARA REALIZAR LAS INSTALACIONES NECESARIAS (TAILWINDCSS, CORS, AXIOS, DOTENV, EXPRESS, REACT-ICONS, etc).

ALGUNOS DE LOS PROMPTS USADOS: 

Contexto: Hice toda la implentación comenzando con la conexión del back y front, funciones de manejo de eventos, lógica de la API,
estados y efectos hasta componentes y estilos dentro del mismo archivo para tener todo a fácil acceso.

# (Soy consciente de que no es para nada convenienete que una función o clase haga muchas cosas, sin embargo personalmente es más fácil codificar donde tengo todo a mi disposición y posteriomente separar la lógica y las responsabilidades de cada función una vez que todo funcione correctamente. Además de que es más fácil para la IA analizar el código y así ayudar a que realice bien las indicaciones en el primer prompt) 

# ------------------TODOS LOS ARCHIVOS QUE FUERON MODIFICADOS, REFACTORIZADOS O HECHOS POR LA IA TIENEN UN COMENTARIO HASTA ARRIBA---------------------------------------


# PROMPTS
  
  *---------------------ANTES DE REALIZAR LA REFACTORIZACIÓN DEL CÓDIGO PARA SEGUIR LOS PRINCIPIOS SOLID---------------------------------------------------------------------

  # pon el puntero del ratón encima de la URL para ver las imágenes


  ![ PROMPT: Hice este prompt para que sólo se realicen busquedas cuando hayan más de 3 letras escritas,y también para borrar las ciudades y sus detalles si no hay nada en el input](/src/assets/prompt1.png)
  ![ RESULTADO: Este fue el resultado que me proporcionô la IA](/src/assets/prompt1.1.png) archivo ----> src/components/PlacesList.tsx

  ![ PROMPT: Hice este prompt para agregar un botón al input para borrar el texto](/src/assets/prompt2.png)
  ![ RESULTADO: Este fue el resultado que me proporcionô la IA](/src/assets/prompt2.2.png) archivo ----> src/components/SearchInput.tsx

  ![ PROMPT: Hice este prompt para agregar un estilo básico a los componentes con tailwind CSS para posteriomente trabajar sobre el y modificarlo a mi gusto personal](/src/assets/prompt4.png) 
  ![ RESULTADO: Este fue el resultado que me proporcionô la IA](/src/assets/prompt4.4.png) archivos ----> src/components/ SearchInput.tsx, PlaceItem.tsx, PlacesList.tsx, WeatheDetails.tsx


  *---------------------DESPUÉS DE REALIZAR LA REFACTORIZACIÓN DEL CÓDIGO SIGUIENDO LOS PRINCIPIOS SOLID------------------------------------------------------------------

  ![ PROMPT: Utilicé este prompt para refactorizar el código y separar responsabilidades en clases más pequeñas y escalables](/src/assets/prompt3.png)
  ![ RESULTADO: Este fue el resultado que me proporcionô la IA](/src/assets/prompt3.3.png) archivos ----> src/components/ SearchInput.tsx, PlaceItem.tsx, PlacesList.tsx, WeatheDetails.tsx | src/services/weatherService.ts


  ESTA FUE LA ESTRUCTURA DE ARCHIVOS Y CARPETAS QUE LA IA ME SUGIRIÓ:
  /src
  ├── /components
  │     ├── PlacesList.tsx
  │     ├── WeatherDetails.tsx
  │     ├── SearchInput.tsx
  │     ├── WeatherCard.tsx
  │     └── WeatherIcon.tsx
  ├── /services
  │     ├── weatherService.ts
  ├── /types
  │     ├── Weather.ts
  │     ├── Place.ts
  ├── App.tsx
  ├── main.tsx
#


  
  











# AL FINAL DECIDÍ HACER ALGUNOS CAMBIOS EN LA ESTRUCTURA.





