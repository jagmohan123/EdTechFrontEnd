// // function VideoDetails() {
// //   const { courseId, sectionId, subSectionId } = useParams();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const playerRef = useRef();
// //   const location = useLocation();
// //   // If need to call any api so we need token also
// //   const { token } = useSelector((state) => state.auth);
// //   // data kaa need hoga jo viewCourse slice ke andar dala tha
// //   const { courseSectionData, courseEntireData, completedLectures } =
// //     useSelector((state) => state.viewCourse);

// //   console.log("Video Details component me entire data", courseEntireData);
// //   // videos store and show karenge side bar me
// //   const [videoData, setVideoData] = useState([]);
// //   // check video end or not eske basis me prev,next and markas completed ka btn show karenge
// //   const [isVideoEnded, setVideoEnded] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [previewSource, setPreviewSource] = useState("");

// //   /* jaise hee me enroll courses me click karunga it redirect to video
// //   ko course or UI me kon see videp dikhana jaise hee click karu
// //   uske leaye useEffect ka use karke video show karunga
// // */
// //   useEffect(() => {
// //     // async function setVideoSpecificDetails() {
// //     //   // check kar lo data present hai ya nhi hai to return kar jao
// //     //   if (!courseSectionData.length) {
// //     //     return;
// //     //   }

// //     //   /* if courseId,sectionId and subSectionId nhi hai to ham navigate karenge
// //     //   dashboard/enrolled-courses vale page me
// //     //   */
// //     //   if (!courseId && !sectionId && !subSectionId) {
// //     //     navigate("dashboard/enrolled-courses");
// //     //   }

// //     //   // agar mere courseId,sectionId,subsectionId 3no hai to filter kar lunga video ko
// //     //   else {
// //     //     // sabse pahle section ka data leke aao jiske andar subsection hai
// //     //     // cpurse ke section se nikalna hai
// //     //     // const filterSectionData = courseSectionData.filter(
// //     //     //   (section) => section._id === sectionId
// //     //     // );

// //     //     const filteredData = courseSectionData.filter(
// //     //       (course) => course._id === sectionId
// //     //     )
// //     //     console.log("filtered Section Data", filteredData);

// //     //     // section filter ho gya hai uske andar subsection hai uske andar jo first video hai usko leke aana hai
// //     //     // const filteredVideoData = filterSectionData?.[0].subSection.filter(
// //     //     //   (subsection) => subsection._id === subSectionId
// //     //     // );

// //     //     const filteredVideoData = filteredData?.[0]?.subSection.filter(
// //     //       (data) => data._id === subSectionId
// //     //     )
// //     //     console.log("filteredVideoData", filteredVideoData);

// //     //     // setVideo data jo bhi aaya hai uski first video ko mene set kar deaya hai
// //     //     setVideoData(filteredVideoData[0]);
// //     //     // or videoEnded ko false set kar deaya hai
// //     //     // yha par course kaa thumnail dikha deaya
// //     //     setPreviewSource(courseEntireData.thumbnail);

// //     //     setVideoEnded(false);
// //     //   }
// //     // }
// //     // setVideoSpecificDetails();

// //     (async () => {
// //       if (!courseSectionData.length) return;
// //       if (!courseId && !sectionId && !subSectionId) {
// //         navigate(`/dashboard/enrolled-courses`);
// //       } else {
// //         // console.log("courseSectionData", courseSectionData)
// //         const filteredData = courseSectionData.filter(
// //           (course) => course._id === sectionId
// //         );
// //         // console.log("filteredData", filteredData)
// //         const filteredVideoData = filteredData?.[0]?.subSection.filter(
// //           (data) => data._id === subSectionId
// //         );
// //         // console.log("filteredVideoData", filteredVideoData)
// //         setVideoData(filteredVideoData[0]);
// //         setPreviewSource(courseEntireData.thumbnail);
// //         setVideoEnded(false);
// //       }
// //     })();
// //   }, [courseSectionData, courseEntireData, location.pathname]);

// //   /* aapki video end hone ke bad next ka button show karunga
// //    to uske leaye check karna  ifFirstVideo() vale function kee need padi
// //  uske basis me show karunga next vala btn */

// //   function isFirstVideo() {
// //     // so mere first section ke andar 0th index vala subsection and subsection ke andar 0th index vali video first video hogi
// //     // so we have to get the currentIndex of section and subsection also

// //     //  get the section current index
// //     // const currentSectionIndex = courseSectionData.findIndex(
// //     //   (section) => section._id === sectionId
// //     // );

// //     // //  get the susection current index
// //     // const currentSubSectionIndex = courseSectionData[
// //     //   currentSectionIndex
// //     // ]?.subSection.findIndex((subSection) => subSection._id === subSectionId);

// //     // // agar dono currentSectionIndex and currentSubSectionIndex 0 hai to that means its first value
// //     // if (currentSectionIndex === 0 && currentSubSectionIndex === 0) {
// //     //   return true;
// //     // } else {
// //     //   return false;
// //     // }

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     );

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId);

// //     if (currentSectionIndx === 0 && currentSubSectionIndx === 0) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }

// //   /*aapki video kee list jab end me pahuch jayega tab prev
// //     button show karunga
// //    to uske leaye check karna  isLasttVideo() vale function kee need padi
// //    uske basis me show karunga next vala btn*/

// //   function isLasttVideo() {
// //     // so mere  section ke andar nth-1 index vala subsection and subsection ke andar nth-1 index vali video last video hogi
// //     // so we have to get the currentIndex of section and subsection also and also need to know the totalNo of sections

// //     //  get the section current index
// //     // const currentSectionIndex = courseSectionData.findIndex(
// //     //   (section) => section._id === sectionId
// //     // );

// //     // //get the total no of subSection
// //     // const totalNoSubSections =
// //     //   courseSectionData[currentSectionIndex].subSection.length;

// //     // //  get the susection current index
// //     // const currentSubSectionIndex = courseSectionData[
// //     //   currentSectionIndex
// //     // ]?.subSection.findIndex((subSection) => subSection._id === subSectionId);

// //     // if (
// //     //   currentSectionIndex === courseSectionData.length - 1 &&
// //     //   currentSubSectionIndex === totalNoSubSections - 1
// //     // ) {
// //     //   return true;
// //     // } else {
// //     //   return false;
// //     // }

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     );

// //     const noOfSubsections =
// //       courseSectionData[currentSectionIndx].subSection.length;

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId);

// //     if (
// //       currentSectionIndx === courseSectionData.length - 1 &&
// //       currentSubSectionIndx === noOfSubsections - 1
// //     ) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }

// //   //  agar mujhe next video me jana hai to vha par next video me jane ke leaye btn hona chaheaye

// //   function gotoNextVideo() {
// //     // const currentSectionIndex = courseSectionData.findIndex(
// //     //   (section) => section._id === sectionId
// //     // );

// //     // const noOfSubsections =
// //     //   courseSectionData[currentSectionIndex].subSection.length;

// //     // const currentSubSectionIndex = courseSectionData[
// //     //   currentSectionIndex
// //     // ].subSection.findIndex((subsection) => subsection._id === subSectionId);

// //     // console.log("no of subsections", noOfSubsections);

// //     // // agar currentSubSectionIndex 0 me nhi hai to eska matlap aage hai so ham next me ja sakte hai
// //     // if (currentSubSectionIndex !== noOfSubsections - 1) {
// //     //   const nextSubSectionId =
// //     //     courseSectionData[currentSectionIndex].subSection[
// //     //       currentSectionIndex + 1
// //     //     ]._id;

// //     //   navigate(
// //     //     `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
// //     //   );

// //     //   // first case=> same section me 0th index me nhi hai so same section ke next video me move karna hai
// //     //   // so next video me move kar lo so navigate karna padega
// //     // } else {
// //     //   // second case=> dusre section kee first subsection kee pahli video bhi ho sakti hai

// //     //   const nextSectionId = courseSectionData[currentSectionIndex + 1]._id;

// //     //   const nextSubSectionId =
// //     //     courseSectionData[currentSectionIndex + 1].subSection[0]._id;
// //     //   navigate(
// //     //     `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
// //     //   );
// //     // }

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     );

// //     const noOfSubsections =
// //       courseSectionData[currentSectionIndx].subSection.length;

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId);

// //     // console.log("no of subsections", noOfSubsections)

// //     if (currentSubSectionIndx !== noOfSubsections - 1) {
// //       const nextSubSectionId =
// //         courseSectionData[currentSectionIndx].subSection[
// //           currentSubSectionIndx + 1
// //         ]._id;
// //       navigate(
// //         `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
// //       );
// //     } else {
// //       const nextSectionId = courseSectionData[currentSectionIndx + 1]._id;
// //       const nextSubSectionId =
// //         courseSectionData[currentSectionIndx + 1].subSection[0]._id;
// //       navigate(
// //         `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
// //       );
// //     }
// //   }

// //   // agar mujhe prevvideo me jana hai to eske leaye bhi gotoPrev vala function kee need hogi
// //   function gotoPrevVideo() {
// //     // const currentSectionIndex = courseSectionData?.findIndex(
// //     //   (section) => section._id === sectionId
// //     // );

// //     // const currentSubSectionIndex = courseSectionData[
// //     //   currentSectionIndex
// //     // ].subSection.findIndex((subsection) => subsection._id === subSectionId);

// //     // if (currentSectionIndex !== 0) {
// //     //   const prevSubSectionId =
// //     //     courseSectionData[currentSectionIndex].subSection[
// //     //       currentSubSectionIndex - 1
// //     //     ]._id;
// //     //   navigate(
// //     //     `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
// //     //   );
// //     // } else {
// //     //   const prevSectionId = courseSectionData[currentSectionIndex - 1]._id;

// //     //   const prevSubSectionLength =
// //     //     courseSectionData[currentSectionIndex - 1].subSection.length;

// //     //   const prevSubSectionId =
// //     //     courseSectionData[currentSectionIndex - 1].subSection[
// //     //       prevSubSectionLength - 1
// //     //     ]._id;
// //     //   navigate(
// //     //     `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
// //     //   );

// //     // }

// //     const currentSectionIndx = courseSectionData.findIndex(
// //       (data) => data._id === sectionId
// //     );

// //     const currentSubSectionIndx = courseSectionData[
// //       currentSectionIndx
// //     ].subSection.findIndex((data) => data._id === subSectionId);

// //     if (currentSubSectionIndx !== 0) {
// //       const prevSubSectionId =
// //         courseSectionData[currentSectionIndx].subSection[
// //           currentSubSectionIndx - 1
// //         ]._id;
// //       navigate(
// //         `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
// //       );
// //     } else {
// //       const prevSectionId = courseSectionData[currentSectionIndx - 1]._id;
// //       const prevSubSectionLength =
// //         courseSectionData[currentSectionIndx - 1].subSection.length;
// //       const prevSubSectionId =
// //         courseSectionData[currentSectionIndx - 1].subSection[
// //           prevSubSectionLength - 1
// //         ]._id;
// //       navigate(
// //         `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
// //       );
// //     }
// //   }

// //   // or meri video complete hui hai kii nhi uske leaye bhi ek function kee need hogi thatswhy we made this
// //   async function markCompletedVideo() {
// //     setLoading(true);
// //     const res = await markLectureAsComplete(
// //       { courseId: courseId, subsectionId: subSectionId },
// //       token
// //     );
// //     if (res) {
// //       dispatch(updateCompletedLectures(subSectionId));
// //     }
// //     setLoading(false);
// //   }

// //   /*
// //    mene ek video component render karaya apne UI par or mene kha
// //    ues rewatch karne par us video ko zero se start karo
// //    so basically me DOM ke andar kisi element ko modify kar rha hu
// //    uske leaye  ham useRef() hook use karnege.
// //    */

// //   return (
// //     <div className="flex flex-col gap-5 text-white">
// //       {!videoData ? (
// //         <img
// //           src={previewSource}
// //           alt="Preview"
// //           className="h-full w-full rounded-md object-cover"
// //         />
// //       ) : (
// //         <Player
// //           ref={playerRef}
// //           aspectRatio="16:9"
// //           playsInline
// //           onEnded={() => setVideoEnded(true)}
// //           src={videoData?.videoUrl}
// //         >
// //           <BigPlayButton position="center" />
// //           play
// //           {isVideoEnded && (
// //             <div
// //               style={{
// //                 backgroundImage:
// //                   "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
// //               }}
// //               className="full absolute inset-0 z-[100] grid h-full place-content-center font-inter"
// //             >
// //               {!completedLectures.includes(subSectionId) && (
// //                 <IconBtnC
// //                   disabled={loading}
// //                   onclick={() => markCompletedVideo()}
// //                   text={!loading ? "Mark As Completed" : "Loading..."}
// //                   customClasses="text-xl max-w-max px-4 mx-auto"
// //                 />
// //               )}

// //               <IconBtnC
// //                 disabled={loading}
// //                 onclick={() => {
// //                   if (playerRef?.current) {
// //                     // set the current time of the video to 0
// //                     playerRef?.current?.seek(0);
// //                     setVideoEnded(false);
// //                   }
// //                 }}
// //                 text="Rewatch "
// //                 customClasses="text-xl max-w-max px-4 mx-auto mt-2"
// //               />

// //               <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
// //                 {/* yha dekhna hai */}

// //                 {!isFirstVideo() && (
// //                   <button
// //                     disabled={loading}
// //                     onClick={gotoPrevVideo}
// //                     className="blackButton"
// //                   >
// //                     Prev
// //                   </button>
// //                 )}

// //                 {!isLasttVideo() && (
// //                   <button
// //                     disabled={loading}
// //                     onClick={gotoNextVideo}
// //                     className="blackButton"
// //                   >
// //                     Next
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </Player>
// //       )}

// //       {/* video ka title and video discription */}
// //       <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
// //       <p className="pt-2 pb-6">{videoData?.discrption}</p>
// //     </div>
// //   );
// // }

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "video-react/dist/video-react.css";
import { useLocation } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";

import IconBtnC from "../../commonCodeandPage/IconBtnC";
import { markLectureAsComplete } from "../../../services/operations/coursesApis";
import { updateCompletedLectures } from "../../../slice/viewCourseSlice";

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse);

  const [videoData, setVideoData] = useState([]);
  const [previewSource, setPreviewSource] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ;(async () => {
      if (!courseSectionData.length) return;
      if (!courseId && !sectionId && !subSectionId) {
        navigate(`/dashboard/enrolled-courses`);
      } else {
        // console.log("courseSectionData", courseSectionData)
        const filteredData = courseSectionData.filter(
          (course) => course._id === sectionId
        );
        // console.log("filteredData", filteredData)
        const filteredVideoData = filteredData?.[0]?.subSection.filter(
          (data) => data._id === subSectionId
        );
        console.log("filteredVideoData", filteredVideoData);
        setVideoData(filteredVideoData[0]);
        setPreviewSource(courseEntireData?.thumbnail);
        setVideoEnded(false);
      }
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);

  // check if the lecture is the first video of the course
  const isFirstVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    if (currentSectionIndx === 0 && currentSubSectionIndx === 0) {
      return true;
    } else {
      return false;
    }
  };

  // go to the next video
  const goToNextVideo = () => {
    // console.log(courseSectionData)

    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length;

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    // console.log("no of subsections", noOfSubsections)

    if (currentSubSectionIndx !== noOfSubsections - 1) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx + 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      );
    } else {
      const nextSectionId = courseSectionData[currentSectionIndx + 1]._id;
      const nextSubSectionId =
        courseSectionData[currentSectionIndx + 1].subSection[0]._id;
      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      );
    }
  };

  // check if the lecture is the last video of the course
  const isLastVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length;

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    if (
      currentSectionIndx === courseSectionData.length - 1 &&
      currentSubSectionIndx === noOfSubsections - 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  // go to the previous video
  const goToPrevVideo = () => {
    // console.log(courseSectionData)

    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId);

    if (currentSubSectionIndx !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx - 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      );
    } else {
      const prevSectionId = courseSectionData[currentSectionIndx - 1]._id;
      const prevSubSectionLength =
        courseSectionData[currentSectionIndx - 1].subSection.length;
      const prevSubSectionId =
        courseSectionData[currentSectionIndx - 1].subSection[
          prevSubSectionLength - 1
        ]._id;
      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      );
    }
  };

  const handleLectureCompletion = async () => {
    setLoading(true);
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    );
    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-5 text-white">
      {!videoData ? (
        <img
          src={previewSource}
          alt="Preview"
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <Player
          ref={playerRef}
          aspectRatio="16:9"
          playsInline
          onEnded={() => setVideoEnded(true)}
          src={videoData?.videoUrl}
        >
          <BigPlayButton position="center" />
          {/* Render When Video Ends */}
          {videoEnded && (
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
              }}
              className="full absolute inset-0 z-[100] grid h-full place-content-center font-inter"
            >
              {!completedLectures.includes(subSectionId) && (
                <IconBtnC
                  disabled={loading}
                  onclick={() => handleLectureCompletion()}
                  text={!loading ? "Mark As Completed" : "Loading..."}
                  customClasses="text-xl max-w-max px-4 mx-auto"
                />
              )}

              <IconBtnC
                disabled={loading}
                onclick={() => {
                  if (playerRef?.current) {
                    // set the current time of the video to 0
                    playerRef?.current?.seek(0);
                    setVideoEnded(false);
                  }
                }}
                text="Rewatch"
                customClasses="text-xl max-w-max px-4 mx-auto mt-2"
              />
              <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
                {!isFirstVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="blackButton"
                  >
                    Prev
                  </button>
                )}
                {!isLastVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="blackButton"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </Player>
      )}

      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
  );
};

export default VideoDetails;
