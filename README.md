# Intro
WeatherFlow es una App hecha con React para ver el clima del día y el pronóstico semanal, tanto en la ubicación geográfica del usuario, como en otras 5 ciudades preseleccionadas.

## Deploy

Puedes ver un demo de la aplicación ingresando a [WeatherFlow](https://weatherflow.netlify.app/)

## Cómo instalar y levantar el proyecto de modo local

En primer lugar, debes clonar el proyecto.

Luego, como se trata de una React App, instala npm para poder iniciarlo.

1- Instalar npm 
```bash
npm install
```

2- Levantar el proyecto
```bash
npm start
```
## Uso

Una vez que inició la aplicación, debes aceptar la alerta que muestra el navegador para poder acceder a tu ubicación geográfica. De ese modo, podrás ver la temperatura en tu zona.

Luego, puedes desplegar las opciones de ciudades ubicadas arriba a la izquierda, para ver el clima actual y de los próximos cinco días en cada una de ellas.

## Decisiones

1- La primer decisión que tomé fue que, al iniciar la app, se vea el clima resultante de la geolocalización. Me pareció que esa información es la que el usuario quiere obtener al usar WeatherFlow.

2- Decidí también que se renderice un sólo item por día, con la información más importante, en el pronóstico de los "próximos 5 días".

3- Uso de librerías: 
    -Chakra UI para la interfaz y los estilos de casi todos los componentes.
    -react-geolocated para obtener la ubicación del usuario.
    -moment para las fechas.

4- Decidí desarrollar una alerta genérica por errores, ya que no tenía un caso de uso de error específico.

5- Elegí utilizar el ID de las ciudades, porque resulta mas seguro a futuro en términos de escalabilidad, y porque con los nombres de las ciudades quedarían caracteres especiales en la URL de las llamadas a la API.
    