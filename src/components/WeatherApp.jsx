// import Typography from "@mui/material/Typography";
import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
/**
 * The WeatherApp component renders a weather search input and a weather display component inside a
 * container.
 * @returns The WeatherApp component is returning a JSX fragment containing the following elements:
 */
const WeatherApp = () => {
  return (
    <>
      <AppBar elevation={0} position="fixed" color="transparent">
        <Toolbar
          sx={{
            justifyContent: 'center',
          }}
        >
          <Box
            borderRadius={1}
            display="flex"
            alignItems="center"
            color="white"
            my={0.5}
            sx={{
              background: "rgba(0, 0, 0, 0.7)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20.2px)",
              WebkitBackdropFilter: "blur(20.2px)",
              border: "1px solid rgba(0, 0, 0, 0.3)",
            }}
            p={1}
          >
            <Box component="img" height="40px" src="/assets/Logo.svg" />
            <Typography variant="h6">Weather App</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="xs">
        <WeatherSearch />
        <WeatherDisplay />
      </Container>
    </>
  );
};

export default WeatherApp;
