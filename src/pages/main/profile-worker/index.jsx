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
  trash,
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
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/loading/index.jsx";
import { useDispatch } from "react-redux";
import { getWorkerProfile } from "../../../config/reducer/workersSlice.js";
import { getSkills } from "../../../config/reducer/skillsSlice.js";
import {
  delPortofolio,
  getPortofolio,
} from "../../../config/reducer/portoSlice.js";
import { delExp, getExp } from "../../../config/reducer/experienceSlice.js";
import ConfirmModal from "../../../components/modal/confirm-modal/index.jsx";
import DeleteModal from "../../../components/modal/delete-modal/index.jsx";

const WorkerProfile = () => {
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("portofolio");
  const [profile, setProfile] = useState("");
  const [skills, setSkills] = useState([]);
  const [porto, setPorto] = useState([]);
  const [experience, setExperience] = useState([]);
  const [getId, setGetID] = useState(null);
  const [showDeleteModal, setDeleteShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getWorkerProfile())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setProfile(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getSkills())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setSkills(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getPortofolio())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setPorto(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getExp())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setExperience(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
  }, []);

  const handleConfirmDeletePorto = (portoId) => {
    setGetID(portoId);
    setModalMessage("Apakah kamu yakin ingin menghapus Portofolio ini?");
    setShowConfirmModal(true);
  };
  const handleConfirmDeleteExp = (expId) => {
    setGetID(expId);
    setModalMessage("Apakah kamu yakin ingin menghapus Pengalaman ini?");
    setShowConfirmModal(true);
  };

  const handleDeleteExp = () => {
    dispatch(delExp(getId))
      .unwrap()
      .then((res) => {
        setModalMessage("Berhasil Menghapus Pengalaman");
        setDeleteShowModal(true);
        setExperience(experience.filter((item) => item.id !== getId));
      })
      .catch((err) => {
        console.error("Error deleting Portofolio:", err);
      });
  };

  const handleDeletePorto = () => {
    dispatch(delPortofolio(getId))
      .unwrap()
      .then((res) => {
        setModalMessage("Berhasil Menghapus Portofolio");
        setDeleteShowModal(true);
        setPorto(porto.filter((item) => item.id !== getId));
      })
      .catch((err) => {
        console.error("Error deleting Portofolio:", err);
      });
  };

  const handleCloseModal = () => {
    setDeleteShowModal(false);
    setShowConfirmModal(false);
  };

  const handleNavigate = () => {
    navigate("/main/editprofileworker");
  };
  const toggleMenu = (menu) => {
    setMenu(menu === "menu" ? null : menu);
  };
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex justify-center gap-8 relative bottom-[340px] max-[768px]:flex-col max-[768px]:items-center">
          <div className="bg-white w-1/4 h-auto rounded-md max-[768px]:w-4/5">
            <div className="p-6 box-border flex flex-col gap-y-2">
              <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
              {loading && <Loading />}
              <p className="text-xl font-semibold capitalize">{profile.name}</p>
              <p className="text-xs">{profile.job_desk}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{profile.domicile}</p>
              </div>
              <p className="text-abu-gelap text-xs">{profile.workplace}</p>
              <p className="text-abu-gelap text-xs my-1 leading-5">
                {profile.description}
              </p>
              <Button
                onClick={handleNavigate}
                className="w-full rounded-md p-2 bg-ungu-muda hover:bg-white hover:text-ungu-muda hover:border hover:border-ungu-muda text-white"
              >
                Ubah Profil
              </Button>
            </div>

            <div className="flex flex-col p-6 justify-between gap-y-3">
              <p>Skill</p>
              {loading && <Loading />}
              <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
                {skills.map((skill) => (
                  <Button
                    key={skill.id}
                    className="p-2 rounded-md text-xs bg-orange-gelap text-white"
                  >
                    {skill.skill_name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-x-3 p-6">
              <div className="flex flex-col gap-y-3">
                <img className="w-4 h-4" src={email} />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xs m-0 text-abu-gelap">{profile.email}</p>
              </div>
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
                {loading ? <Loading /> : porto.length === 0 ? (
                  <div>
                    <p className="text-gray-700 font-semibold text-center">
                      Belum ada Portofolio
                    </p>
                  </div>
                ) : porto.map((item) => (
                  <div
                    key={item.id}
                    className="text-xs text-center font-semibold"
                  >
                    <img className="w-56 h-36" src={item.image} />

                    <p>{item.application_name}</p>
                    <Button
                      onClick={() => handleConfirmDeletePorto(item.id)}
                      className="bg-red-500 hover:bg-white hover:text-red-500  hover:border hover:border-red-500 text-white py-2 px-4 rounded"
                    >
                      Hapus
                    </Button>
                  </div>
                ))}
                {/* {porto.length === 0 && (
                  <div>
                    <p className="text-gray-700 font-semibold text-center">
                      Belum ada Portofolio
                    </p>
                  </div>
                )} */}

                {/* {porto.map((item) => (
                  <div
                    key={item.id}
                    className="text-xs text-center font-semibold"
                  >
                    <img className="w-56 h-36" src={item.image} />

                    <p>{item.application_name}</p>
                    <Button
                      onClick={() => handleConfirmDeletePorto(item.id)}
                      className="bg-red-500 hover:bg-white hover:text-red-500  hover:border hover:border-red-500 text-white py-2 px-4 rounded"
                    >
                      Hapus
                    </Button>
                  </div>
                ))} */}
                <ConfirmModal
                  isOpen={showConfirmModal}
                  onClose={handleCloseModal}
                  isConfirm={handleDeletePorto}
                >
                  {modalMessage}
                </ConfirmModal>
              </div>
            )}
            {menu === "pengalaman" && (
              <div className="flex flex-col gap-y-8">
                {experience.length === 0 && (
                  <p className="text-gray-700 font-semibold text-center">
                    Belum ada Pengalaman
                  </p>
                )}
                {experience.map((item) => (
                  <div
                    key={item.id}
                    className=" border-b-4 border-ungu-muda pb-3 flex justify-between"
                  >
                    <div className="w-3/4">
                      <p className="font-semibold">{item.position}</p>
                      <p className="text-gray-700">{item.company}</p>
                      <p className="text-gray-500">
                        {item.work_month} {item.work_year}
                      </p>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                    <Button
                      onClick={() => handleConfirmDeleteExp(item.id)}
                      className="bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white py-2 px-4 h-fit self-center rounded flex gap-x-2"
                    >
                      <img className=" opacity-50" src={trash} />
                      Hapus
                    </Button>
                  </div>
                ))}
                <ConfirmModal
                  isOpen={showConfirmModal}
                  onClose={handleCloseModal}
                  isConfirm={handleDeleteExp}
                >
                  {modalMessage}
                </ConfirmModal>
              </div>
            )}
            <DeleteModal isOpen={showDeleteModal} onClose={handleCloseModal}>
              {modalMessage}
            </DeleteModal>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WorkerProfile;
