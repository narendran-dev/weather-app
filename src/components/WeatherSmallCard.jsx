import { Card, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";

/* The code is defining a React functional component called `WeatherSmallCard`. This component takes
three props: `name`, `value`, and `imageName`. */
export default function WeatherSmallCard({ name, value, imageName }) {
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          width: "100%",
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(2.3px)',
          WebkitBackdropFilter: 'blur(2.3px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Box>
          <Box sx={{ mb: 1, typography: "h5", fontWeight: "bold" }}>
            {value}
          </Box>
          <Box sx={{ color: "text.secondary", typography: "subtitle2" }}>
            {name}
          </Box>
        </Box>
        <Box
          sx={{
            width: 80,
            height: 80,
            lineHeight: 0,
            borderRadius: "50%",
            bgcolor: "background.neutral",
          }}
        >
          <img
            src={`/assets/weatherIcons/${imageName}.svg`}
            height="100%"
            width="100%"
          />
        </Box>
      </Card>
    </Grid>
  );
}

WeatherSmallCard.propTypes = {
  imageName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
};
