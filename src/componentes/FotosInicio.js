import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../images/slide-1.jpg";
import slide2 from "../images/slide-2.jpg";
import slide3 from "../images/slide-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box sx={{width: '1100px', height: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
              src={slide1}
              style={{
                width: '100%', height: '500px'
              }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
              src={slide2}
              style={{
                width: '100%', height: '500px'
              }}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
              src={slide3}
              style={{
                width: '100%', height: '500px'
              }}
            />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}