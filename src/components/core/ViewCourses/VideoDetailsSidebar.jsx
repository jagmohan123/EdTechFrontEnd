import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtnC from "../../commonCodeandPage/IconBtnC";
function VideoDetailsSidebar({ setReviewModal }) {
  //   kon sa section active hai it means ek section at a time open rhega baki close rahenge
  const [activeStatus, setActiveStatus] = useState("");
  //   kon see video play ho rhi hai uske leaye jo video play ho rhi hai side bar uske bg color set karnas
  const [videoActive, setVideoActive] = useState("");
  //   back kee button jo enrolled courses me le jata hai

  // we need sectionid and subsection id so get from parameters
  const { sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // jo data ko hamne viewCourse file se slice me dala tha usko yha use kar kenge

  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  console.log("course entire data ", courseEntireData);
  console.log("courseSection Data", courseSectionData);
  //   by default ek video highlight show hoti hai jab bhi me video play karta hai side bar me ek video highlight hoti hai jo play ho rhi hai

  useEffect(() => {
    // this is also a syntex of calling the function
    (() => {
      // section me data na ho to return ho jao
      if (!courseSectionData?.length) {
        return;
      }

      // get Current sectionIndex that means kon se section me ham hai i mean kon sa section highlight hai
      //   it is used for highlight the section

      const currentSectionIndex = courseSectionData?.findIndex(
        (data) => data._id === sectionId
      );

      // same subsection me lecture ko highlight karne ke leaye currentsubSection kee id pta honi chaheaye
      const currentSubSectionIndex = courseSectionData?.[
        currentSectionIndex
      ]?.subSection?.findIndex((data) => data._id === subSectionId);

      //   active subsection ke id nikalkar active section me use kareng
      // kon se subsection kee video highlight hai
      const activeSubSectionId =
        courseSectionData[currentSectionIndex]?.subSection?.[
          currentSubSectionIndex
        ]?._id;

      // this is for hightlight the section that is current section
      setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
      // this is for highlght the subsection this is for subsection
      setVideoActive(activeSubSectionId);
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);
  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          {/* heading and button */}
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => navigate("dashboard/enrolled-courses")}
              className="flex flex-row items-center cursor-pointer"
            >
              <IoIosArrowBack size={20} />
              Back
            </div>
            <IconBtnC
              customClasses="ml-auto"
              text="Add Review"
              // yha par onclick likhna hai onClick nhi likhna
              onclick={() => setReviewModal(true)}
            />
          </div>

          {/* for headings and title */}
          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-500">
              {completedLectures?.length}/{totalNoOfLectures}
            </p>
          </div>
        </div>

        {/* for sections and subsections */}
        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData?.map((section, index) => (
            <div onClick={() => setActiveStatus(section?._id)} key={index}>
              {/* section */}
              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {section?.sectionName}
                </div>
                {/* add aerrow icon */}
                <div className="flex items-center gap-3">
                  <span
                    className={`${
                      activeStatus === section?.sectionName
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* Sub section */}
              {activeStatus === section._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {section.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videoActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
                      key={i}
                      onClick={() => {
                        //1navigate karna
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
                        );
                        //2 highlight karna hai us video lo
                        setVideoActive(topic._id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => {}}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoDetailsSidebar;
