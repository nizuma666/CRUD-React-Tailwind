import React, { useEffect, useState } from "react";
import {
  bell,
  LogoPng,
  email,
  search,
  line,
  PinMap,
  LogoSvg,
  instagram,
  github,
  gitlab,
  linkedin,
} from "../../../assets/icons";
import {
  porto1,
  porto2,
  porto3,
  porto4,
  porto5,
  porto6,
  profile1,
  profile2,
  profile_porto,
} from "../../../assets/image";
import Button from "../../../components/button";
import api from "../../../config/api/index.js";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../../components/loading/index.jsx";
import { useDispatch } from "react-redux";
import { getProfileRecruiter } from "../../../config/reducer/recruiterSlice.js";

const RecruiterProfile = () => {
  const [loading, setLoading] = useState(false);
  const [getProfile, setGetProfile] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getProfileRecruiter())
    .unwrap()
    .then((res)=>{
      setLoading(false)
      setGetProfile(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);
  const handleNavigate = () => {
    navigate("/main/editprofilerecruiter")
  }
  return (
    <div>
      <section className="bg-abu-abu py-10">
        <div className="flex justify-center max-[768px]:flex-col max-[768px]:items-center">
          <div className="bg-white w-4/5 h-auto rounded-b-lg max-[768px]:w-4/5">
            <div className="bg-ungu-muda h-44 rounded-t-lg"></div>
            <div className="relative bottom-20">
              <div className="items-center flex flex-col gap-y-3 mb-6 p-4">
                <img className="w-36 h-36 mb-5 border-4 rounded-full" src={getProfile.photo} />
                {loading && <Loading />}
                <p className="text-xl font-bold uppercase text-center">
                  {getProfile.company}
                </p>
                <p className="text-xs">{getProfile.position}</p>
                <div className="flex flex-row gap-y-1 items-center">
                  <img className="w-4 h-4" src={PinMap} />
                  <p className="text-abu-gelap text-xs">{getProfile.city}</p>
                </div>
                <p className="text-abu-gelap text-xs my-1 leading-5 text-center">
                  {getProfile.description}
                </p>
                <Button onClick={handleNavigate} className="w-60 bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4">
                  Edit Profile
                </Button>
                <Link to="/">
              <Button className="w-60 bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4">
                Kembali
              </Button>
            </Link>
              </div>
              <div className="flex justify-center gap-x-3 mb-4">
                <div className="flex flex-col gap-y-3">
                  <img className="w-4 h-4" src={email} />
                  <img className="w-4 h-4" src={instagram} />
                  <img className="w-4 h-4" src={linkedin} />
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-xs m-0 text-abu-gelap">
                    {getProfile.email}
                  </p>
                  <p className="text-xs m-0 text-abu-gelap">{getProfile.instagram}</p>
                  <p className="text-xs m-0 text-abu-gelap">{getProfile.linkedin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RecruiterProfile;
