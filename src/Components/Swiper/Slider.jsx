import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/banners.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} // Disable navigation buttons
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center py-8 px-4 sm:px-5">
            <img
              src={banner}
              alt="banner"
              className="object-cover w-full sm:w-full md:w-full lg:w-full"
            />
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </>
  );
}
