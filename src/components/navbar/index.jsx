import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  bell,
  LogoPng,
  email,
  search,
  line,
  PinMap,
  LogoSvg,
  logout,
  iconprofile,
} from "../../assets/icons";
import { profile1, profile2 } from "../../assets/image";
import handleLogout from "../../config/logout/index.js";
import api from "../../config/api/index.js";

function Navbar() {
  const navigate = useNavigate();
  const logoutClick = () => {
    handleLogout();
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const CloseDropDown = () => {
    setIsOpen(false);
  };
  const [openProfile, setOpenProfile] = useState(false);
  useEffect(()=>{
    api.get('/auth/check-role')
    .then((res)=>{
      if(res.data.data.data.role === 'recruiter'){
        setOpenProfile(!openProfile)
      }
    })
    .catch((err)=>{
      console.log(err.response);
    })
  },[])
  return (
    <div>
      <nav className="h-24 flex justify-between bg-white items-center py-0 px-5 box-border mx-auto">
        <img src={LogoPng} alt="logo" />
        <div className="flex justify-between">
          <a href="#">
            <img className="ml-5 w-9 h-9" src={bell} alt="bell" />
          </a>
          <NavLink to="/main/chat">
            <img className="ml-5 w-9 h-9" src={email} alt="nav-item-message" />
            </NavLink>
          <div className="relative">
            <img
              onClick={toggleDropDown}
              className="w-9 h-9 rounded-full ml-5"
              src={profile1}
            />
            {isOpen && (
              <div
                className="absolute z-10 top-10 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-40"
                onBlur={CloseDropDown}
              >
                <ul className="py-1">
                  <li onClick={CloseDropDown}>
                    <button
                      className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                      onClick={logoutClick}
                    >
                    <img src={logout} />
                      Logout
                    </button>
                  </li>
                  {openProfile && (
                  <li onClick={CloseDropDown}>
                    <NavLink
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                      to="/main/recruiter"
                    >
                    <img src={iconprofile} />
                      Profil
                    </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
