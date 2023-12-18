import WeatherApp from "./components/WeatherApp";
import { WeatherProvider } from "./context/WeatherContext";

/**
 * The App component returns a WeatherProvider component that wraps around a WeatherApp component.
 * @returns The App component is returning the WeatherProvider component, which wraps around the
 * WeatherApp component.
 */
function App() {
  return (
    <>
      <WeatherProvider>
        <WeatherApp />
      </WeatherProvider>
    </>
  );
}

export default App;
