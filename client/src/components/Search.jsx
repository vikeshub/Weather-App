import React, { useState } from 'react';
import axios from 'axios';

function Search({ setWeatherData }) {
  const [location, setLocation] = useState('');

  const fetchWeatherData = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Open Weather API key
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      alert('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
      />
      <button onClick={fetchWeatherData}>Search</button>
    </div>
  );
}

export default Search;
