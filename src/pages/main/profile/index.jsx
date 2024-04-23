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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../components/loading/index.jsx";
import { useDispatch } from "react-redux";
import { getSkillsbyId } from "../../../config/reducer/skillsSlice.js";
import { getPortofoliobyId } from "../../../config/reducer/portoSlice.js";
import { getExpbyId } from "../../../config/reducer/experienceSlice.js";
import { getWorkerProfilebyId } from "../../../config/reducer/workersSlice.js";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("portofolio");
  const { profileId } = useParams();
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [getPorto, setGetPorto] = useState([]);
  const [getExperience, setGetExperience] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getWorkerProfilebyId(profileId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setName(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getSkillsbyId(profileId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setSkills(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
      dispatch(getPortofoliobyId(profileId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setGetPorto(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
      dispatch(getExpbyId(profileId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setGetExperience(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
  }, [dispatch]);
  const toggleMenu = (menu) => {
    setMenu(menu === "menu" ? null : menu);
  };
  const handleNavigate = (id) => {
    navigate(`/main/hire/${id}`);
  };
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex flex-row justify-center gap-8 relative bottom-80 max-[768px]:flex-col max-[768px]:items-center">
          <div className="bg-white w-1/4 h-auto rounded-md max-[768px]:w-4/5">
            <div className="p-6 box-border flex flex-col gap-y-3">
              <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
              {loading && <Loading />}
              <p className="text-xl font-bold uppercase">{name.name}</p>
              <p className="text-xs">{name.job_desk}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{name.domicile}</p>
              </div>
              <p className="text-abu-gelap text-xs">{name.workplace}</p>
              <p className="text-abu-gelap text-xs my-1 leading-5">
                {name.description}
              </p>
              <Button
                onClick={() => handleNavigate(name.id)}
                className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4"
              >
                Hire
              </Button>
              <Link to="/main/home">
                <Button className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4">
                  Kembali
                </Button>
              </Link>
            </div>
            <div className="flex flex-col p-6 justify-between gap-y-3">
              <p>Skill</p>
              {loading && <Loading />}
              <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
                {skills.map((skill) => (
                  <Button
                    key={skill.id}
                    className="text-xs bg-orange-gelap text-white py-2 px-3 rounded-md"
                  >
                    {skill.skill_name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-x-3 p-6">
              <img className="w-4 h-4" src={email} />
              <p className="text-xs m-0 text-abu-gelap">{name.email}</p>
            </div>
          </div>
          <div className="bg-white h-1/2 w-1/2 rounded-md px-4 py-5 box-border max-[768px]:w-4/5">
            <div className="flex h-10 mb-8 justify-start gap-5 max-[768px]:justify-evenly">
              <Button
                className={` ${
                  menu === "portofolio"
                    ? "border-solid border-b-4 border-b-ungu-muda"
                    : ""
                }`}
                onClick={() => toggleMenu("portofolio")}
              >
                Portofolio
              </Button>
              <Button
                className={` ${
                  menu === "pengalaman"
                    ? "border-solid border-b-4 border-b-ungu-muda"
                    : ""
                }`}
                onClick={() => toggleMenu("pengalaman")}
              >
                Pengalaman
              </Button>
            </div>
            {menu === "portofolio" && (
              <div className="flex justify-around flex-wrap gap-y-4 gap-x-4 max-[768px]:justify-center max-[768px]:gap-x-9">
                {getPorto.map((item) => (
                  <div
                    key={item.id}
                    className="text-xs text-center font-semibold"
                  >
                    <img className="w-56 h-36" src={item.image} />
                    <p>{item.application_name}</p>
                  </div>
                ))}
              </div>
            )}
            {menu === "pengalaman" && (
              <div className="flex flex-col gap-y-8">
                {getExperience.map((item) => (
                  <div
                    key={item.id}
                    className=" border-b-4 border-ungu-muda pb-3"
                  >
                    <p className="font-semibold">{item.position}</p>
                    <p className="text-gray-700">{item.company}</p>
                    <p className="text-gray-500">
                      {item.work_month}
                      {item.work_year}
                    </p>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Profile;
