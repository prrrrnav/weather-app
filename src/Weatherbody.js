import React from 'react';
import { useEffect, useState } from 'react';
import Weather_card from './Weather_card';
import Searchbar from './Searchbar';
import './Weather_head.css';

const Weatherbody = () => {
    // Array of default locations
    let array = ["Mumbai", "Kolkata", 'Dhanpura', "Lucknow", "Delhi", "Muzaffarnagar", "noida", "bangalore"];
    // State to manage the searched location
    let [searchData, setSearchData] = useState('');
    // State to store weather data
    let [weatherData, setWeatherData] = useState([]);
    let [filteredArray, setFilteredArray] = useState([])

    // Function to fetch weather data from the API
    const fetchData = async (arrayItemLocation) => {
        try {
            // API URL for fetching weather data
            let url = `https://api.weatherapi.com/v1/current.json?key=489383cd91904f60b66183504241104 &q=${arrayItemLocation}&days=1`;
            let response = await fetch(url);
            let locationData = await response.json();

            // Extracting relevant information from the API response
            return {
                icon: locationData.current.condition.icon,
                condition: locationData.current.condition.text,
                temperature: locationData.current.temp_c,
                farenheit: locationData.current.temp_f,
                place: locationData.location.name
            };
        } catch (error) {
            // Log and handle any errors during API call
            console.log(error);   
            return null;
        }
    };

    // Function to handle setting the searched location's weather data
    async function settingSearchedLocation() {
        try {
            // Fetch weather data for the searched location
            // if (searchData !== '' || null) {
                let searchedLocationObject = await fetchData(searchData);
                const locationData = searchedLocationObject;

                // Set the weather data for the searched location
                setWeatherData([locationData]);
                // console.log(locationData);
            // }
        } catch (error) {
            // Log and handle any errors during the process
            // console.log(error);
            // setWeatherData([]);
            return '';
        }
    }

    // Function to set the weather data for the default locations
    async function setweatherArray() {
        // Fetch weather data for all default locations concurrently using Promise.all
        let mappedWeatherArray = await Promise.all(array.map(async (arrayItemLocation) => {
            return await fetchData(arrayItemLocation);
        }));
        // Filter out any null values in the mapped array
        let filteredWeatherArray = mappedWeatherArray.filter((data) => data !== null);
        // Set the filtered weather data to the state
        setWeatherData(filteredWeatherArray);
        setFilteredArray(filteredWeatherArray)
    }

    // useEffect to set the default weather data when the component mounts
    useEffect(() => {
        setweatherArray();
    }, []);

    // useEffect to handle setting the searched location's weather data when the searchData changes
    useEffect(() => {
        settingSearchedLocation();
    }, [searchData]);

    // Function to handle receiving data from the child component (Searchbar)
    function handleChildData(childData) {
        setSearchData(childData);
        // console.log(childData);
    }
    try {
        if (weatherData !== null || '') {

            return (
                <div>
                    <Searchbar sendDataToParent={handleChildData} />
                    <div className='weather-items-box'>
                        {

                            weatherData.map((locationData, index) => (
                                <Weather_card className='card'
                                    key={index}
                                    index={index}
                                    icon={locationData.icon}
                                    condition={locationData.condition}
                                    place={locationData.place}
                                    temperature={locationData.temperature}
                                    farenheit={locationData.farenheit}
                                />
                            ))
                        }
                    </div>
                </div>
            );

        }
    }
    catch (err) {
        setWeatherData(filteredArray);
    }



};

export default Weatherbody;
