function WeatherIcon({ weatherMain, size = 60 }) {
  const weatherMap = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
  };

  return (
    <div style={{ fontSize: `${size}px` }}>
      {weatherMap[weatherMain] || "🌤️"}
    </div>
  );
}

export default WeatherIcon;