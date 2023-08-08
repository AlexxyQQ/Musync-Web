import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Separate the Carousel slide component
const CarouselSlide = () => {
  const images = [
    "https://i.imgur.com/ZjzaI2Y.jpeg",
    "https://i.imgur.com/lZqe7oN.jpeg",
    "https://i.imgur.com/tjlre3y.jpeg",
  ];

  const titles = [
    "Welcome to Musync",
    "Listen to you library",
    "Get started now",
  ];
  const descriptions = [
    "Seamlessly switch between your computer and phone without missing a beat.",
    "Seamlessly switch between your computer and phone without missing a beat.",
    "Login with you Google account and forget about remembering you password.",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentImageIndex + 1;
    if (newIndex <= images.length - 1) {
      // Corrected condition
      setCurrentImageIndex(newIndex);
    }
    if (newIndex === images.length) {
      // Reset to the first image
      setCurrentImageIndex(0);
    }
  };

  const handleSkip = () => {
    setCurrentImageIndex(2); // Reset to the first image
  };

  return (
    <Box
      sx={{
        flex: "6",
        backgroundColor: "Black",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src="https://i.imgur.com/XYUTHEy.png"
          alt="Logo"
          style={{ width: "auto", height: "80px" }}
        />
        <Typography variant="h4" sx={{ color: "white", marginTop: "5px" }}>
          Musync
        </Typography>
      </Box>
      <Box
        sx={{
          flex: "6",
          m: 3,
          maxHeight: "50vh", // Set maximum height to screen height
          width: "auto",
          display: "block",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Carousel index={currentImageIndex} indicators={false}>
          {images.map((index) => (
            <Paper key={index}>
              <img
                src={images[currentImageIndex]}
                alt="Carousel Slide 1"
                style={{
                  width: "100%",
                  height: "50vh",
                  maxHeight: "50vh", // Set maximum height to screen height
                  objectFit: "cover",
                }}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
      {/* Titles */}
      <Box sx={{ my: 3, textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "white" }}>
          {titles[currentImageIndex]}
        </Typography>
      </Box>
      {/* Description */}
      <Box sx={{ my: 3, textAlign: "center" }}>
        <Typography variant="body1" sx={{ color: "white" }}>
          {descriptions[currentImageIndex]}
        </Typography>
      </Box>
      {/* Buttons */}
      <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
        <Button disableRipple variant="outlined" onClick={handleNext}>
          Next
        </Button>
        <Box sx={{ mx: 2 }} />
        <Button disableRipple variant="outlined" onClick={handleSkip}>
          Skip
        </Button>
      </Box>
      {/* Terms and Condition */}
      <Box sx={{ my: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          By proceeding, you agree to our{" "}
          <Link href="/terms-and-conditions" color="inherit">
            Terms and Conditions
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default CarouselSlide;
