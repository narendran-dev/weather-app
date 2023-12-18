import { useState, useCallback } from "react";
import axios from "axios";
import { Box, Autocomplete, FormLabel } from "@mui/material";
import { useWeatherContext } from "../hooks/useWeatherContext";
import debounce from "../utils/debounce";

/* The `WeatherSearch` component is a React component that allows users to search for weather data by
entering a city name. */
const WeatherSearch = () => {
  const { setWeatherData } = useWeatherContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationloading, setLocationloading] = useState(false);
  const fetchLocations = useCallback(async (_, query) => {
    try {
      setLocationloading(true);
      if (query.length < 1) {
        return;
      }
      const { data } = await axios({
        method: "GET",
        url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        params: { namePrefix: query, countryIds: "Q668" },
        headers: {
          "X-RapidAPI-Key":
            "5e6cbb8cf9msh11288c51f7f4d5dp12bca2jsn8c2b480f5829",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      });
      const resData = data.data.map((o) => {
        return {
          name: o.city,
          latitude: o.latitude,
          longitude: o.longitude,
        };
      });
      setLocations(resData);
    } catch (error) {
      console.error("Error fetching locations", error);
    } finally {
      setLocationloading(false);
    }
  }, []);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location?.name}&appid=e203317f0df5474c05874e35b030eda3`,
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const debouncedFetchLocations = debounce(fetchLocations, 1000);

  return (
    <div>
      <Autocomplete
        options={locations}
        getOptionLabel={(option) => option.name}
        value={selectedLocation}
        loading={locationloading}
        onChange={(_, newValue) => {
          setSelectedLocation(newValue);
          fetchWeatherData(newValue);
          setSearchQuery("");
        }}
        onInputChange={debouncedFetchLocations}
        renderInput={(params) => (
          <Box
            textAlign="center"
            width="100%"
            padding="20px 0"
            ref={params.InputProps.ref}
          >
            <FormLabel htmlFor={"search"}>Enter the City Name</FormLabel>
            <Box
              autoFocus
              autoComplete="off"
              value={searchQuery}
              sx={{
                display: "inline-block",
                width: "100%",
                fontSize: "1em",
                textAlign: "center",
                border: "none",
                borderRadius: 3,
                padding: "10px",
                boxShadow: "0 0 15px 1px #bfa8bc",
                transition: "all 0.3s",
                "&:focus": {
                  outline: "none",
                },
              }}
              component="input"
              type="text"
              name="search"
              {...params.inputProps}
            />
          </Box>
        )}
      />
    </div>
  );
};

export default WeatherSearch;
