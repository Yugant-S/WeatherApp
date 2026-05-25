function WeatherCard({ weather }) {
  return (
    <>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>Temp: {weather.main.temp} °C</p>
      <p>Feels Like: {weather.main.feels} </p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </>
  );
}

export default WeatherCard;
