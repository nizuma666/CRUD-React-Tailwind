import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { PinMap, silang } from "../../../assets/icons/index.js";
import { profile_porto } from "../../../assets/image/index.js";
import Button from "../../../components/button/index.jsx";
import api from "../../../config/api/index.js";
import Input from "../../../components/input/index.jsx";
import { Loading } from "../../../components/loading/index.jsx";
import SuccessModal from "../../../components/modal/success-modal/index.jsx";
import DeleteModal from "../../../components/modal/delete-modal/index.jsx";
import { useDispatch } from "react-redux";
import {
  deleteSkills,
  getSkills,
  postSkills,
} from "../../../config/reducer/skillsSlice.js";
import { postExp } from "../../../config/reducer/experienceSlice.js";
import {
  getWorkerProfile,
  putWorkerProfile,
} from "../../../config/reducer/workersSlice.js";
import { postPortofolio } from "../../../config/reducer/portoSlice.js";
import ConfirmModal from "../../../components/modal/confirm-modal/index.jsx";

const EditProfileWorker = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setSuccessShowModal] = useState(false);
  const [showDeleteModal, setDeleteShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [skillDeleteId, setSkillDeleteId] = useState(null);
  const [messageModal, setModalMessage] = useState("");
  const [showUploadIcon, setShowUploadIcon] = useState(true);
  const [option, setOption] = useState("");
  const [getSkill, setGetSkill] = useState([]);
  const [myprofile, setMyProfile] = useState("");
  const [skillName, setSkillName] = useState("");
  const [editProfile, setEditProfile] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });
  const [editPorto, setEditPorto] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: "",
  });
  const [editExperience, setEditExperience] = useState({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });
  useEffect(() => {
    //Get Profile dan Skill
    setLoading(true);
    dispatch(getWorkerProfile())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setMyProfile(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getSkills())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setGetSkill(res);
      })
      .catch((errors) => {
        console.log("Ada kesalahan saat mengambil data", errors);
      });
  }, []);
  const handleAddSkill = (e) => {
    // Menambah Skill
    e.preventDefault();
    dispatch(postSkills({ skill_name: skillName }))
      .unwrap()
      .then((res) => {
        setSuccessShowModal(true);
        setModalMessage("Berhasil menambah skill");
        setSkillName("");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleAddExperience = (e) => {
    // Menambah Pengalaman
    e.preventDefault();
    dispatch(postExp(editExperience))
      .unwrap()
      .then((res) => {
        setSuccessShowModal(true);
        setModalMessage("Berhasil menambah pengalaman");
        setEditExperience([])
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleChangeExperience = (e) => {
    setEditExperience({
      ...editExperience,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeProfile = (e) => {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSkill = (e) => {
    setSkillName(e.target.value);
  };
  const handleSubmit = (e) => {
    // Edit Profile
    e.preventDefault();
    dispatch(putWorkerProfile(editProfile))
      .unwrap()
      .then((res) => {
        setSuccessShowModal(true);
        setModalMessage("Berhasil perbarui profil");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal update profile");
      });
  };
  const handleConfirmDeleteSkill = (skillId) => {
    setSkillDeleteId(skillId);
    setModalMessage("Apakah kamu yakin ingin menghapus skill ini?");
    setShowConfirmModal(true)
  };
  const handleDelete = () => {
    dispatch(deleteSkills(skillDeleteId))
      .unwrap()
      .then((res) => {
        setDeleteShowModal(true);
        setModalMessage("Berhasil menghapus skill");
        setGetSkill(getSkill.filter((skill) => skill.id !== skillDeleteId));
      })
      .catch((err) => {
        console.error("Error deleting skill:", err);
      });
  };
  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setEditPorto({
      ...editPorto,
      application: e.target.value,
    });
  };
  const handleChangePorto = (e) => {
    setEditPorto({
      ...editPorto,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddPorto = (e) => {
    e.preventDefault();
    dispatch(postPortofolio(editPorto))
      .unwrap()
      .then((res) => {
        setSuccessShowModal(true);
        setModalMessage("Berhasil menambah portofolio");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    api.post("/upload", formData).then((res) => {
      const { file_url } = res.data.data;
      setEditPorto({ ...editPorto, image: file_url });
      setShowUploadIcon(false);
    });
  };
  const closeModal = () => {
    setSuccessShowModal(false);
    setDeleteShowModal(false);
    setShowConfirmModal(false);
  };
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex justify-center gap-8 relative bottom-80 max-[768px]:flex-col max-[768px]:items-center">
          <div className="w-1/5 h-1/2 max-[768px]:w-4/5">
            <div className="bg-white rounded-md p-6 w-full box-border flex flex-col gap-y-3 mb-5">
              <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
              {loading && <Loading />}
              <p className="text-xl font-semibold uppercase">
                {myprofile.name}
              </p>
              <p className="text-xs">{myprofile.job_desk}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{myprofile.domicile}</p>
              </div>
              <p className="text-abu-gelap text-xs">{myprofile.workplace}</p>
              <div className="flex flex-col justify-between gap-y-3">
                <p className="text-center font-semibold">Skill</p>
                {loading && <Loading />}
                <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
                  {getSkill.map((skill) => (
                    <Button
                      key={skill.id}
                      className="p-2 text-xs bg-orange-gelap text-white rounded-md"
                    >
                      {skill.skill_name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/main/worker">
              <Button className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4">
                Kembali
              </Button>
            </Link>
          </div>
          <div className="w-3/5 h-1/2 max-[768px]:w-4/5">
            <div className="bg-white h-full w-full rounded-md py-5 box-border">
              <div className="flex flex-row gap-5 h-10 mb-4 border-b-2 mx-0 px-4">
                <p className="font-semibold">Data Diri</p>
              </div>
              <div className="px-7 py-2 box-border">
                <form>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Nama Lengkap</label>
                    <Input
                      name="name"
                      value={editProfile.name}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Job Desk</label>
                    <Input
                      name="job_desk"
                      value={editProfile.job_desk}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan jobdesk"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Domisili</label>
                    <Input
                      name="domicile"
                      value={editProfile.domicile}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan domisili"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Tempat Kerja</label>
                    <Input
                      name="workplace"
                      value={editProfile.workplace}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan tempat kerja"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-8">
                    <label className="text-xs">Deskripsi Singkat</label>
                    <textarea
                      name="description"
                      value={editProfile.description}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-24 indent-4 text-sm pt-2 resize-none"
                      placeholder="Tuliskan deskripsi singkat"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4"
                    >
                      Simpan
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white h-1/2 w-full rounded-md py-5 box-border mt-10">
              <div className="h-10 mb-4 border-b-2 mx-0 px-4">
                <p className="font-semibold">Skill</p>
              </div>
              <div className="px-7 py-2 box-border">
                <div className="flex text-abu-gelap gap-4 mb-5">
                  <Input
                    name="skill_name"
                    value={skillName}
                    onChange={handleChangeSkill}
                    type="text"
                  />
                  <Button
                    onClick={handleAddSkill}
                    className="w-16 text-xs bg-orange-gelap text-white rounded-md"
                  >
                    Simpan
                  </Button>
                </div>
                <div className="flex gap-x-4">
                  {loading && <Loading />}
                  {getSkill.map((skill) => (
                    <Button
                      key={skill.id}
                      onClick={() => handleConfirmDeleteSkill(skill.id)}
                      className="p-2 text-xs bg-orange-gelap text-white rounded-md flex"
                    >
                      {skill.skill_name}
                      <img className="w-4 h-4" src={silang} />
                    </Button>
                  ))}
                    <ConfirmModal isOpen={showConfirmModal} onClose={closeModal} isConfirm={handleDelete}>
                      {messageModal}
                    </ConfirmModal>
                  <DeleteModal isOpen={showDeleteModal} onClose={closeModal} />
                </div>
              </div>
            </div>
            <div className="bg-white h-full w-full rounded-md py-5 box-border mt-10">
              <div className="flex flex-row gap-5 h-10 mb-4 border-b-2 mx-0 px-4">
                <p className="font-semibold">Pengalaman Kerja</p>
              </div>
              <div className="px-7 py-2 box-border">
                <form>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Posisi</label>
                    <Input
                      name="position"
                      value={editExperience.position}
                      onChange={handleChangeExperience}
                      type="text"
                      placeholder="Masukkan posisi anda"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Nama Perusahaan</label>
                    <Input
                      name="company"
                      value={editExperience.company}
                      onChange={handleChangeExperience}
                      type="text"
                      placeholder="Masukkan nama perusahaan anda"
                    />
                  </div>
                  <div className="flex justify-center gap-x-4">
                    <div className="flex flex-col text-abu-gelap gap-1 mb-5 w-1/2">
                      <label className="text-xs">Bulan</label>
                      <Input
                        name="work_month"
                        value={editExperience.work_month}
                        onChange={handleChangeExperience}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col text-abu-gelap gap-1 mb-5 w-1/2">
                      <label className="text-xs">Tahun</label>
                      <Input
                        name="work_year"
                        value={editExperience.work_year}
                        onChange={handleChangeExperience}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-8">
                    <label className="text-xs">Deskripsi Singkat</label>
                    <textarea
                      name="description"
                      value={editExperience.description}
                      onChange={handleChangeExperience}
                      className="rounded outline-none border-solid border-2 w-full h-24 indent-4 text-sm pt-2 resize-none"
                      placeholder="Deskripsikan pekerjaan anda"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleAddExperience}
                      className="w-full bg-white hover:bg-orange-gelap text-orange-gelap hover:text-white border border-orange-gelap hover:border-transparent rounded py-2 px-4"
                    >
                      Simpan
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white h-full w-full rounded-md py-5 box-border mt-10">
              <div className="flex flex-row gap-5 h-10 mb-4 border-b-2 mx-0 px-4">
                <p className="font-semibold">Portofolio</p>
              </div>
              <div className="px-7 py-2 box-border">
                <form>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Nama Aplikasi</label>
                    <Input
                      name="application_name"
                      value={editPorto.application_name}
                      onChange={handleChangePorto}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                      type="text"
                      placeholder="Masukkan posisi anda"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Link Repository</label>
                    <Input
                      name="link_repository"
                      value={editPorto.link_repository}
                      onChange={handleChangePorto}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                      type="text"
                      placeholder="Masukkan posisi anda"
                    />
                  </div>
                  <div className="flex gap-x-4 mb-5">
                    <div
                      className={`flex p-3 text-abu-gelap ${
                        option === "Aplikasi Mobile"
                          ? "border border-gray-300 rounded-md font-bold text-gray-400"
                          : ""
                      } `}
                    >
                      <input
                        value="Aplikasi Mobile"
                        name="application"
                        className="w-4 h-4 bg-white border border-gray-300 appearance-none rounded-full checked:ring-2 checked:ring-ungu-muda checked:bg-ungu-muda checked:ring-offset-2 checked:border-none"
                        type="radio"
                        checked={option === "Aplikasi Mobile"}
                        onChange={handleOptionChange}
                      />
                      <label className="text-xs ml-2">Aplikasi Mobile</label>
                    </div>
                    <div
                      className={`flex p-3 text-abu-gelap ${
                        option === "Aplikasi Web"
                          ? "border border-gray-300 rounded-md font-bold text-gray-400"
                          : ""
                      } `}
                    >
                      <input
                        value="Aplikasi Web"
                        name="application"
                        className="w-4 h-4 bg-white border border-gray-300 appearance-none rounded-full checked:ring-2 checked:ring-ungu-muda checked:bg-ungu-muda checked:ring-offset-2 checked:border-none"
                        type="radio"
                        checked={option === "Aplikasi Web"}
                        onChange={handleOptionChange}
                      />
                      <label className="text-xs ml-2">Aplikasi Web</label>
                    </div>
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-8">
                    <label className="text-xs">Upload Gambar</label>

                    <div className="flex items-center justify-center w-full">
                      {editPorto.image && <img src={editPorto.image} />}
                      {showUploadIcon && (
                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            onChange={handleUploadImage}
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={handleAddPorto}
                      className="w-full bg-white hover:bg-orange-gelap text-orange-gelap hover:text-white border border-orange-gelap hover:border-transparent rounded py-2 px-4"
                    >
                      Tambah Portofolio
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <SuccessModal isOpen={showSuccessModal} onClose={closeModal}>
            {messageModal}
          </SuccessModal>
        </div>
      </section>
    </div>
  );
};
export default EditProfileWorker;
