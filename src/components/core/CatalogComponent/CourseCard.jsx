import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../commonCodeandPage/RatingStars";
import getAvgRating from "../../../UtilsVariable_Function/avgRating";
import { useEffect } from "react";
function CourseCard({ course, height }) {
  // for showing the stars
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = getAvgRating(course?.ratingAndReviews);
    console.log("Ratings ", count);
    setAvgReviewCount(count);
  }, [course]);
  return (
    <div>
      {/* give the path name carefully  */}
      <Link to={`/courses/${course._id}`}>
        <div className="lg:flex-col">
          <div className="rounded-lg">
            <img
              src={course.thumbnail}
              alt="thumbnail"
              className={`${height} lg:w-[100%] max-sm:w-[100%] max rounded-xl object-fill `}
            />
          </div>
          <div className="flex flex-col gap-2 px-6 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2 max-sm:flex-wrap ">
              <span className="text-yellow-5">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>

            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
