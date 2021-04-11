/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import CardProductLanding from "./CardProductLanding";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// // Import Swiper styles
// import "swiper/swiper.scss";
// // import "components/pagination/pagination.scss";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

// const Div = styled.div`
//   background-color: #fffaf0;
//   height: 310px;
//   padding: 2px;
//   margin-top: 15px;
// `;

// const slideSWiper = {
//   width: "100%",
//   alignItems: "center",
//   textAlign: "center",
//   backgroundColor: "#Ffff",
// };
const Div = styled.div`
  min-height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

const TopText = styled.div`
  min-height: 18%;
  display: flex;
`;
const Loader = styled.div`
  width: 30px;
  margin: 120px auto;
`;
const CircleItem = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 100%;
  background-color: ${({ Color }) => Color || "tomato"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const ListDiv = styled.div``;

const DealsSwiper = (props) => {
  const {
    dealname,
    dealDescription,
    Icon,
    Color,
    product_deals,
    deal_id,
  } = props;

  // useEffect(() => {
  //   console.log(product_deals);
  // });
  const ListSlides = () => (
    <>
      <SwiperSlide style={slideSWiper}>
        <CardProductLanding
          key={1}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/model3.jpg"
        />
        <CardProductLanding
          key={2}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/model11.jpg"
        />
        <CardProductLanding
          key={3}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/j31.jpg"
        />
      </SwiperSlide>
      <SwiperSlide style={slideSWiper}>
        <CardProductLanding
          key={4}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/family4.jpg"
        />
        <CardProductLanding
          key={5}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/pregnancy1.jpg"
        />
        <CardProductLanding
          key={6}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/proposal.jpg"
        />
      </SwiperSlide>
      <SwiperSlide style={slideSWiper}>
        <CardProductLanding
          key={7}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/model 6.jpg"
        />
        <CardProductLanding
          key={8}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/model10.jpg"
        />
        <CardProductLanding
          key={9}
          // onClick={handleClick.bind(this, items)}
          imagesrc="media/baby1.jpg"
        />
      </SwiperSlide>
      )
    </>
  );
  return (
    <Div>
      <TopText></TopText>
      <Swiper
        effect="fade"
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        autoplay={true}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        style={{ height: "80%" }}
      >
        {ListSlides()}
      </Swiper>
    </Div>
  );
};

export default DealsSwiper;
