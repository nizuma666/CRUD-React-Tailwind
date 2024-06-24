import React, { useEffect, useState } from "react";
import {
  ellipse1,
  ellipse2,
  ellipse3,
  pic1,
  pic2,
  pic3,
  tokopedia,
} from "../../assets/image";
import {
  checklistPurple,
  checklistYellow,
  iconprofile,
  LogoPng,
  LogoSvg,
  logout,
} from "../../assets/icons";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Footer from "../../components/footer";
import api from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { getProfileRecruiter } from "../../config/reducer/recruiterSlice";
import handleLogout from "../../config/logout";
import { Loading } from "../../components/loading";
import { getWorkerProfile } from "../../config/reducer/workersSlice";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const { user: userRecruiter, loading: loadingRecruiter } = useSelector(
    (state) => state.recruiterSlice
  );
  const { profile, loading: loadingWorker } = useSelector(
    (state) => state.workersSlice
  );
  const [Open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      api
        .get("/auth/check-role")
        .then((res) => {
          if (res.data.data.data.role === "recruiter") {
            dispatch(getProfileRecruiter());
            setRole("recruiter");
            setOpenProfile(!openProfile);
          } else {
            dispatch(getWorkerProfile());
            setRole("worker");
            setOpenProfile(!openProfile);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [dispatch]);
  console.log(profile);
  const CloseDropDown = () => {
    setOpen(false);
  };
  const toggleDropDown = () => {
    setOpen(!Open);
  };
  const logoutClick = () => {
    handleLogout();
    setIsLogin(false);
  };
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropDownSideBar = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropDown = () => {
    setOpenDropdown(false);
  };
  return (
    <div>
      <nav className="py-4 px-4 lg:px-10 flex justify-between items-center bg-white border-b border-gray-200">
        <div className="flex items-center">
          <img className="h-9" src={LogoPng} alt="logo" />
          <Link to="/main/caripekerja" className="hidden lg:block ml-6">
            <div className="bg-transparent hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded py-2 px-4">
              Cari Pekerja
            </div>
          </Link>
        </div>

        <button
          className="lg:hidden text-gray-600 hover:text-gray-800"
          onClick={toggleDropDownSideBar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-4">
          {isLogin && role === "recruiter" && (
            <div className="flex gap-4 items-center">
              {loadingRecruiter ? (
                <Loading />
              ) : (
                <img
                  className="w-11 h-11 border p-1 rounded-full"
                  src={userRecruiter.photo ? userRecruiter.photo : iconprofile}
                  alt="Recruiter Profile"
                  onClick={toggleDropDown}
                />
              )}
              {Open && (
                <div
                  className="absolute z-10 top-16 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-40"
                  onBlur={CloseDropDown}
                >
                  <ul className="py-1">
                    <li onClick={CloseDropDown}>
                      <button
                        className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                        onClick={logoutClick}
                      >
                        <img src={logout} alt="Logout" className="mr-2" />
                        Logout
                      </button>
                    </li>
                    {openProfile && (
                      <li onClick={CloseDropDown}>
                        <Link
                          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                          to="/main/recruiter"
                        >
                          <img
                            src={iconprofile}
                            alt="Profile"
                            className="mr-2"
                          />
                          Profil
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
          {isLogin && role === "worker" && (
            <div className="flex gap-4 items-center">
              {loadingWorker ? (
                <Loading />
              ) : (
                <img
                  className="w-11 h-11 border p-1 rounded-full"
                  src={profile.photo ? profile.photo : iconprofile}
                  alt="Worker Profile"
                  onClick={toggleDropDown}
                />
              )}
              {Open && (
                <div
                  className="absolute z-10 top-16 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-40"
                  onBlur={CloseDropDown}
                >
                  <ul className="py-1">
                    <li onClick={closeDropDown}>
                      <button
                        className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                        onClick={logoutClick}
                      >
                        <img src={logout} alt="Logout" className="mr-2" />
                        Logout
                      </button>
                    </li>
                    {openProfile && (
                      <li onClick={closeDropDown}>
                        <Link
                          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                          to="/main/worker"
                        >
                          <img
                            src={iconprofile}
                            alt="Profile"
                            className="mr-2"
                          />
                          Profil
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
          {!isLogin && (
            <div className="flex gap-4">
              <Link to="/login">
                <button
                  type="button"
                  className="bg-transparent hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded py-2 px-4"
                >
                  Masuk
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="bg-ungu-muda hover:bg-white hover:text-ungu-muda hover:border hover:border-ungu-muda border text-white py-2 px-4 border-transparent rounded"
                >
                  Daftar
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {openDropdown && (
        <div className="lg:hidden">
          <nav className="fixed inset-y-0 left-0 bg-white border-r border-gray-200 w-64 p-4 z-40">
            <div className="flex flex-col gap-4">
              {isLogin && role === "recruiter" && (
                <div className="flex flex-col gap-4 items-start">
                  {loadingRecruiter ? (
                    <Loading />
                  ) : (
                    <img
                      className="w-11 h-11 border p-1 rounded-full"
                      src={
                        userRecruiter.photo ? userRecruiter.photo : iconprofile
                      }
                      alt="Recruiter Profile"
                    />
                  )}
                  {openDropdown && (
                    <ul className="py-1">
                      <li>
                        <button
                          className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                          onClick={logoutClick}
                        >
                          <img src={logout} alt="Logout" className="mr-2" />
                          Logout
                        </button>
                      </li>
                      {openProfile && (
                        <li>
                          <NavLink
                            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                            to="/main/recruiter"
                          >
                            <img
                              src={iconprofile}
                              alt="Profile"
                              className="mr-2"
                            />
                            Profil
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              )}
              {isLogin && role === "worker" && (
                <div className="flex flex-col gap-4 items-start">
                  {loadingWorker ? (
                    <Loading />
                  ) : (
                    <img
                      className="w-11 h-11 border p-1 rounded-full"
                      src={profile.photo ? profile.photo : iconprofile}
                      alt="Worker Profile"
                    />
                  )}
                  {openDropdown && (
                    <ul className="py-1">
                      <li>
                        <button
                          className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                          onClick={logoutClick}
                        >
                          <img src={logout} alt="Logout" className="mr-2" />
                          Logout
                        </button>
                      </li>
                      {openProfile && (
                        <li>
                          <NavLink
                            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                            to="/main/worker"
                          >
                            <img
                              src={iconprofile}
                              alt="Profile"
                              className="mr-2"
                            />
                            Profil
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              )}
              {!isLogin && (
                <div className="flex flex-col gap-4">
                  <Link to="/login">
                    <button
                      type="button"
                      className="w-1/2 bg-transparent hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded py-2 px-4 text-sm"
                    >
                      Masuk
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      type="button"
                      className="w-1/2 hover:bg-ungu-muda bg-white text-ungu-muda border border-ungu-muda hover:text-white py-2 px-4 hover:border-transparent rounded text-sm"
                    >
                      Daftar
                    </button>
                  </Link>
                  <Link to="/main/caripekerja" className="lg:block lg:ml-6">
                    <button className="w-1/2 bg-transparent hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded p-2 text-sm">
                      Cari Pekerja
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-25 z-30"
            onClick={closeDropDown}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-9 px-4 lg:pl-0 lg:pr-10 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-10 gap-8">
          <p className="text-5xl font-semibold leading-snug w-full md:w-3/4 max-lg:text-3xl">
            Talenta terbaik negri untuk perubahan revolusi 4.0
          </p>
          <p className="text-lg w-full md:w-3/4">
            Cari talenta terbaik dan unggulkan persainganmu bersama peworld
          </p>
          {isLogin ? (
            <Link to="/main/caripekerja">
              <button
                type="button"
                className="bg-ungu-muda hover:bg-white hover:text-ungu-muda  hover:border hover:border-ungu-muda text-white py-4 px-4 rounded max-lg:text-sm"
              >
                Mulai Dari Sekarang
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="bg-ungu-muda hover:bg-white hover:text-ungu-muda  hover:border hover:border-ungu-muda text-white py-4 px-4 rounded max-lg:text-sm"
              >
                Mulai Dari Sekarang
              </button>
            </Link>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <img src={pic1} alt="" className="w-full" />
        </div>
      </section>

      <section className="py-9 px-4 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full  px-4 lg:px-10 max-lg:hidden">
          <img src={pic2} alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col justify-start px-4 lg:px-10 py-10 gap-8">
          <p className="text-4xl font-semibold leading-snug w-full md:w-3/4 max-lg:text-3xl">
            Kenapa harus mencari talenta di peworld
          </p>
          <div className="flex flex-col lg:flex-row gap-8 justify-start">
            <div className="flex gap-8 justify-start">
              <div className="flex flex-col gap-8">
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p>Kualitas Skill terjamin</p>
                </div>
                <div>
                  <p>Siap bekerja kapanpun</p>
                </div>
                <div>
                  <p>WFH dan WFO selalu siap</p>
                </div>
                <div>
                  <p>Softskill yang menunjang kinerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-9 px-4 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 px-4 lg:px-10">
          <img src={pic3} alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start px-4 lg:px-10 py-10 gap-8">
          <p className="text-4xl font-semibold leading-snug max-lg:text-3xl">
            Skill Talent
          </p>
          <p className="w-full lg:w-3/5">
            Peworld memiliki banyak sekali talenta dengan berbagai skill
            programming yang dikuasai
          </p>
          <div className="flex lg:flex-row gap-8">
            <div className="flex flex-col gap-8">
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p>Java</p>
              </div>
              <div>
                <p>Kotlin</p>
              </div>
              <div>
                <p>PHP</p>
              </div>
              <div>
                <p>Javascript</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
              <div>
                <img src={checklistYellow} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p>Golang</p>
              </div>
              <div>
                <p>C++</p>
              </div>
              <div>
                <p>Ruby</p>
              </div>
              <div>
                <p>10+ Bahasa lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
