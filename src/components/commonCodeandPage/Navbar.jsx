import React, { useEffect } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
// import Logo from "../../assets/Logo/StudyAddaLogoLarge.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { categories } from "../../services/api";
import { apiConnector } from "../../services/apiConnector";
import "./Navbar.css";
function Navbar() {
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  // To define the color of navlinks
  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  console.log("In home cart total Items in Cart", totalItems);
  async function getAllCategory() {
    try {
      setLoading(true);

      const response = await apiConnector(
        "GET",
        categories.SHOW_ALL_CATEGORIES
      );
      console.log("Our api Response for get all category ", response.data.data);
      setSubLinks(response?.data?.data);
    } catch (error) {
      console.log(
        "Found error while fetching the getAll courses Category api",
        error
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="flex  h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* logo image added */}
        <Link to="/">
          {/* <img
            src={Logo}
            width={200}
            height={100}
            loading="lazy"
            className=" rounded-full font-extrabold object-fill"
            alt="logo"
          /> */}

          <h1 id="brand">StudyAdda</h1>
        </Link>
        {/* nav links all the links  */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div
                      className={`group relative flex items-center gap-2 group cursor-pointer
                    ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    >
                      {link.title}
                      <IoIosArrowDropdown />
                      <div
                        className=" invisible absolute left[50%] top-[50%] z-[100] flex w-[220px] translate-x-[-50%]  translate-y-[2.9em] 
                      flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 
                      opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[250px]"
                      >
                        <div
                          className="absolute left-[50%] top-0 
                        -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] 
                        rotate-45 select-none rounded bg-richblack-5"
                        ></div>

                        {loading ? (
                          <p className=" text-center">loading ...</p>
                        ) : (
                          subLinks
                            ?.filter((subLink) => subLink?.courses?.length >= 0)
                            .map((subLink, index) => (
                              <Link
                                to={`catalog/${subLink.name
                                  .split(" ")
                                  .join("")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={index}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login signup and dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to="dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-white text-2xl" />
              {totalItems > 0 && (
                <span className="absolute bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* if token is empty so redirect to login and signup */}

          {token === null && (
            <Link to="/login">
              <button
                className=" border-none lg:border-richblack-700
                 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 rounded-full"
              >
                Login
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/signup">
              <button className="border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 rounded-full">
                SignUp
              </button>
            </Link>
          )}

          {/* if token exsist so user is Login so user ko profile section me le jao */}
          {token !== null && <ProfileDropDown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
