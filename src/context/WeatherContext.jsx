import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const WeatherContext = createContext();

/**
 * The WeatherProvider component is a context provider that allows access to weather data and the
 * ability to update it.
 * @returns The `WeatherProvider` component is returning a `WeatherContext.Provider` component with the
 * `children` prop passed as its children.
 */
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node,
};

