import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import slide1 from "../../assets/slider_image/img-1.jpg";
import slide2 from "../../assets/slider_image/img-2.jpg";
import slide3 from "../../assets/slider_image/img-3.jpg";
import slide4 from "../../assets/slider_image/img-4.jpg";
import slide5 from "../../assets/slider_image/img-5.jpg";
import slide6 from "../../assets/slider_image/img-6.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-screen w-full object-cover h-[450px]"
            src={slide6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
