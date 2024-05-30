import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import ReactStars from "react-rating-stars-component";
import { CourseEndpoints } from "../../services/api";
import { apiConnector } from "../../services/apiConnector";
// for star icons
import { FaStar } from "react-icons/fa";

function ReviewSlider() {
  // get all the reviews from backend

  const [reviews, setReview] = useState([]);
  // only me review ke 15 word hee show karunga
  const miniMumLenghtReview = 15;
  useEffect(() => {
    async function getAllReviews() {
      try {
        const { data } = await apiConnector(
          "GET",
          CourseEndpoints.GET_ALL_RATING_AND_REVIEWS
        );
        console.log("All the reviews are ", data);
        console.log("ye data hai data.data ke andar", data?.data);
        if (data?.success) {
          console.log("Valid response");
          setReview(data?.data);
        }
        console.log("Review variable me data add ho gya hai ye ", reviews);
      } catch (error) {
        console.log("error Occured while fetching the reviews", error);
      }
    }
    getAllReviews();
  }, []);

  return (
    <div className="text-white mx-auto text-center grid items-center justify-center">
      <div className=" max-sm:grid-cols-4 ml-2  my-[50px] h-[184px] max-w-maxContentTab md:max-w-maxContent  md:mb-[10em]">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {reviews.map((myReview, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25  rounded-lg max-md:h-[240px] overflow-y-hidden">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        myReview?.user?.image
                          ? myReview?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${myReview?.user?.firstName} ${myReview?.user?.lastName}`
                      }
                      alt="User Image"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${myReview?.user?.firstName} ${myReview?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {myReview?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {myReview?.review.split(" ").length > miniMumLenghtReview
                      ? `${myReview.review
                          .split(" ")
                          .slice(0, miniMumLenghtReview)
                          .join(" ")}...`
                      : `${myReview?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {/* toFixed(1) rating ke bad decimal value dene ke leaye  */}
                      {myReview?.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={myReview?.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;
