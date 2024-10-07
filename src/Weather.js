import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayInfo(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49b631c45785fe73d2a88477803dea22&units=metric`;
    axios.get(url).then(displayInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Form">
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={updateCity}
        className="SearchBar"
      />
      <input type="submit" value="Search" className="Submit" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            {" "}
            Temperature: <strong>
              {Math.round(weather.temperature)}ºC
            </strong>{" "}
          </li>
          <li>
            Humidity: <strong>{weather.humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{weather.wind}km/h</strong>
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
