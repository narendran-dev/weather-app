import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
/**
 * The useWeatherContext function returns the current value of the WeatherContext.
 * @returns The `useWeatherContext` function is returning the result of calling
 * `useContext(WeatherContext)`.
 */

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
