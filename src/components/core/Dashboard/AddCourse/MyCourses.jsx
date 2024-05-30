import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtnC from "../../../commonCodeandPage/IconBtnC";
import { getInstructorCourses } from "../../../../services/operations/coursesApis";
import { VscAdd } from "react-icons/vsc";
import CourseTable from "../InstructorCourses/CourseTable";
function MyCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  // first render me hee me instructor ke sabhi course ko fecth kar lunga
  useEffect(() => {
    async function fetchInstructorCourses() {
      const result = await getInstructorCourses(token);
      // valid result aaya to course me set kar dunga
      console.log("Instructor courses ",result);
      if (result) {
        setCourses(result);
      }
    }
    fetchInstructorCourses();
  }, []);

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtnC
          text="Add Course"
          // active={true}
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtnC>
      </div>
      {/* jab course me kuch hoga tabhi me courses show karunga  */}
      {courses && <CourseTable courses={courses} setCourses={setCourses} />}
    </div>
  );
}

export default MyCourses;
