/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// // Import Swiper styles
// import "swiper/swiper.scss";
// // import "components/pagination/pagination.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  // Scrollbar,
  EffectFade,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Slide } from "@material-ui/core";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

const Div = styled.div``;

const Image1 = styled.img`
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  margin: 4px;
`;

const slideSWiper = {
  width: "100%",
  height: "300px",
  position: "relative",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "white",

  display: "flex",

  justifyContent: "center",
};

const Loader = styled.div`
  width: 30px;
  margin: 200px auto;
  @media (max-width: 768px) {
    margin: 100px auto;
  }
`;

const Swipper = () => {
  // name === "HeaderSwiper"
  // ? console.log(items)
  // : console.log("no such items")
  // items.categories.map(category=>category.name="HeaderSwiper"?console.log(items):nulls)));

  return (
    <Div>
      <Swiper
        effect="fade"
        autoplay={true}
        loop={true}
        spaceBetween={1}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        style={{ height: "100%" }}
      >
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/model 6.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/model11.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/j31.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/family4.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/pregnancy1.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/proposal.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/model 6.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/model10.jpg" alt="img" />\
        </SwiperSlide>
        <SwiperSlide style={slideSWiper}>
          <Image1 src="media/baby1.jpg" alt="img" />\
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default Swipper;
