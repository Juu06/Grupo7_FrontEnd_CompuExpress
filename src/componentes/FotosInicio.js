import React, {  } from "react";
// Import Swiper React components
import slide1 from "../images/slide-1.jpg";
import slide2 from "../images/slide-2.jpg";
import slide3 from "../images/slide-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

// import required modules
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        width: "99%",
        borderRadius: "10px",
        height: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Carousel showThumbs={false} autoPlay interval={2000} infiniteLoop>
        <Box sx={{ borderRadius: "10px" }}>
          <img
            alt=""
            src={slide1}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </Box>
        <Box sx={{ borderRadius: "10px" }}>
          <img
            alt=""
            src={slide2}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </Box>
        <Box sx={{ borderRadius: "10px" }}>
          <img
            alt=""
            src={slide3}
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </Box>
      </Carousel>
    </Box>
  );
}
