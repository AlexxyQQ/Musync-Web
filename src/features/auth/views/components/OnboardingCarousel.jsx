import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

// Separate the Carousel slide component
const CarouselSlide = () => (
  <Box
    sx={{
      flex: "6",
      backgroundColor: "yellow",
      position: "relative",
      overflow: "hidden",
      m: 3,
      borderRadius: "20px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      display: "none",
      "@media (min-width: 800px)": {
        display: "block",
      },
    }}
  >
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={true}
      navButtonsAlwaysInvisible={true}
    >
      <Paper>
        <img
          src="https://source.unsplash.com/random?wallpapers"
          alt="Carousel Slide 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Paper>
      <Paper>
        <img
          src="https://source.unsplash.com/random?nature"
          alt="Carousel Slide 2"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Paper>
    </Carousel>
  </Box>
);

export default CarouselSlide;
