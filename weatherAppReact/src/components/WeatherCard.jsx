import WeatherIcon from "./WeatherIcon";

function WeatherCard({ weather }) {
  const pressure = weather.main.pressure || "N/A";
  const visibility = weather.visibility
    ? (weather.visibility / 1000).toFixed(1)
    : "N/A";

  const feelsLike = Math.round(weather.main.feels_like);
  const temp = Math.round(weather.main.temp);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="weather-description">
            {weather.weather[0].description}
          </p>
        </div>

        <WeatherIcon
          weatherMain={weather.weather[0].main}
          size={60}
        />
      </div>

      <div className="temperature">{temp}°C</div>

      <div className="details-grid">
        <div className="detail-item">
          <p>Feels Like: {feelsLike}°C</p>
        </div>

        <div className="detail-item">
          <p>Humidity: {weather.main.humidity}%</p>
        </div>

        <div className="detail-item">
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>

        <div className="detail-item">
          <p>Pressure: {pressure} mb</p>
        </div>

        <div className="detail-item">
          <p>Visibility: {visibility} km</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;