import { useWeatherContext } from "../hooks/useWeatherContext";
import { Card, CardContent, Typography, Collapse, Grid } from "@mui/material";
import WeatherSmallCard from "./WeatherSmallCard";
const icons = {
  "01d": "clear-day",
  "01n": "clear-night",
  "02d": "partly-cloudy-day",
  "02n": "partly-cloudy-night",
  "03d": "cloudy",
  "03n": "cloudy",
  "04d": "overcast",
  "04n": "overcast",
  "09d": "overcast-rain",
  "09n": "overcast-rain",
  "10d": "partly-cloudy-day-rain",
  "10n": "partly-cloudy-night-rain",
  "11d": "thunderstorms",
  "11n": "thunderstorms",
  "13d": "partly-cloudy-day-snow",
  "13n": "partly-cloudy-day-snow",
  "50d": "fog-day",
  "50n": "fog-night",
};

const pressureThreshold = 1013.25;

/* The `WeatherDisplay` component is a React functional component that displays weather information
based on the `weatherData` obtained from the `useWeatherContext` hook. */
const WeatherDisplay = () => {
  const { weatherData } = useWeatherContext();

  return (
    <>
      <Card
        id="wrapper"
        elevation={3}
        sx={{
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(2.3px)',
          WebkitBackdropFilter: 'blur(2.3px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        {!weatherData && (
          <CardContent>
            <img
              style={{
                objectFit: "contain",
              }}
              width="100%"
              src="/assets/weatherIcons/sunrise.svg"
            />
            <Typography textAlign="center">
              Search Select the cities to check the weather.
            </Typography>
          </CardContent>
        )}
        <Collapse in={Boolean(weatherData)} timeout="auto" unmountOnExit>
          <CardContent
            sx={{
              padding: "20px !important",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">
              {weatherData?.name}, {weatherData?.sys?.country}
            </Typography>
            <img
              src={`/assets/weatherIcons/${
                icons[weatherData?.weather[0]?.icon]
              }.svg`}
              height="100px"
              width="100px"
            />

            <Typography variant="h1">
              {Math.floor(weatherData?.main?.temp - 273.15)}ºC
            </Typography>
            <Typography variant="body1" id="tempDescription">
              {weatherData?.weather[0]?.main}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {weatherData && (
        <Grid my={2} spacing={1} container disableEqualOverflow>
          <WeatherSmallCard
            name="Humidity"
            value={`${weatherData?.main?.humidity}%`}
            imageName="humidity"
          />

          <WeatherSmallCard
            name="Wind"
            value={`${weatherData?.wind?.speed} m/s`}
            imageName="wind"
          />

          <WeatherSmallCard
            name="Pressure"
            value={`${weatherData?.main?.pressure}°`}
            imageName={`pressure-${
              weatherData?.main?.pressure >= pressureThreshold ? "high" : "low"
            }`}
          />

          <WeatherSmallCard
            name="Temp  Min-Max"
            value={`${Math.floor(weatherData?.main?.temp_min - 273.15)} -
            ${Math.floor(weatherData?.main?.temp_max - 273.15)}°`}
            imageName="thermometer"
          />
        </Grid>
      )}
    </>
  );
};

export default WeatherDisplay;
