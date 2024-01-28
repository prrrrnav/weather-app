import React, { useEffect, useState } from 'react';
import Weather_card from './Weather_card';


const Weather_head = () => {
  // Initializing array
  let array = ["Mumbai", "Kolkata", "Lucknow", "Delhi", "Muzaffarnagar", "noida", "bangalore"];

  // Initializing state variables
  let [weatherData, setWeatherData] = useState([array]);

  console.log(weatherData)
  const fetchData = async (location) => {
    try {
      let url = `https://api.weatherapi.com/v1/current.json?key=967b63af378d45babd2154330241201&q=${location}&days=1`;
      const response = await fetch(url);
      const data = await response.json();

      return {
        icon: data.current.condition.icon,
        condition: data.current.condition.text,
        temperature: data.current.temp_c,
        farenheit: data.current.temp_f,
        place: data.location.name
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const setSearchData = async (data) => {
    // Fetch data for each location in the array
    const weatherArray = await Promise.all(array.map(async (location) => await fetchData(location)));

    // Filter out null values (in case of any error during fetching)
    const filteredWeatherArray = weatherArray.filter((data) => data !== null);

    setWeatherData(filteredWeatherArray);
    console.log("Weather data fetched:", filteredWeatherArray);
  };

  useEffect(() => {
    // Fetch initial weather data when component mounts
    setSearchData();
  }, []);

  return (
    <div>
      <Searchbar sendDataToParentHandler={setSearchData} />
      <div className='weather-items-box'>
        {weatherData.map((data, index) => (
          <Weather_card
            key={index}
            index={index}
            icon={data.icon}
            condition={data.condition}
            place={data.place}
            temperature={data.temperature}
            farenheit={data.farenheit}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather_head;

// i want  that i can show cards containing statistics of different location

// mapping an array


