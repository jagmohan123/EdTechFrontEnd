import React from "react";
// we install the swiper by which we create the slider cards
// also we import swiper and swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import CourseCard from "./CourseCard";
function CourseSlider({ courses }) {
  return (
    <div className="flex-col">
      {courses?.length ? (
        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={10}
          pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
        >
          {courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} height={"h-[220px]"}/>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  );
}

export default CourseSlider;
