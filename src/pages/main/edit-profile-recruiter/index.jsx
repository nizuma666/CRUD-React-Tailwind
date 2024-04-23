import React, { useEffect, useState } from "react";
import { Loading } from "../../../components/loading";
import { profile_porto } from "../../../assets/image";
import { PinMap, edit } from "../../../assets/icons";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
import api from "../../../config/api";
import SuccessModal from "../../../components/modal/success-modal";
import { editRecruiter, getProfileRecruiter } from "../../../config/reducer/recruiterSlice";
import { useDispatch } from "react-redux";

const EditProfileRecruiter = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showUploadIcon, setShowUploadIcon] = useState(true);
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [editProfile, setEditProfile] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
    photo: "",
  });
  const handleChangeProfile = (e) => {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRecruiter(editProfile))
    .unwrap()
    .then((res)=>{
      setShowModal(true)
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  useEffect(() => {
    setLoading(true);
    dispatch(getProfileRecruiter())
    .unwrap()
    .then((res)=>{
      setLoading(false)
      setProfile(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    api.post("/upload", formData).then((res) => {
      const { file_url } = res.data.data;
      setEditProfile({ ...editProfile, photo: file_url });
      setShowUploadIcon(false);
    });
  };
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex justify-center gap-8 relative bottom-72 max-[768px]:flex-col max-[768px]:items-center">
          <div className="w-1/5 h-1/2 max-[768px]:w-4/5">
            <div className="bg-white rounded-md p-6 w-full box-border flex flex-col gap-y-3 mb-5 max-[768px]:items-center">
              <div className=" self-center">{loading && <Loading />}</div>

              <img
                className="w-36 h-36 self-center mb-5 border-4 rounded-full"
                src={profile.photo}
              />
              <p className="text-xl font-semibold uppercase">
                {profile.company}
              </p>
              <p className="text-xs">{profile.position}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{profile.city}</p>
              </div>
            </div>
            <Link to="/main/home">
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
                    <label className="text-xs">Nama Perusahaan</label>
                    <Input
                      name="company"
                      value={editProfile.company}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Posisi</label>
                    <Input
                      name="position"
                      value={editProfile.position}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan jobdesk"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Kota</label>
                    <Input
                      name="city"
                      value={editProfile.city}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan domisili"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Deskripsi Singkat</label>
                    <textarea
                      name="description"
                      value={editProfile.description}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-24 indent-4 text-sm pt-2 resize-none"
                      placeholder="Tuliskan deskripsi singkat"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Instagram</label>
                    <Input
                      name="instagram"
                      value={editProfile.instagram}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan nama instagram"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Nomor Telepon</label>
                    <Input
                      name="phone"
                      value={editProfile.phone}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Linkedin</label>
                    <Input
                      name="linkedin"
                      value={editProfile.linkedin}
                      onChange={handleChangeProfile}
                      type="text"
                      placeholder="Masukkan nama Linkedin"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-8">
                    <label className="text-xs">Upload Gambar</label>

                    <div className="flex items-center justify-center w-full">
                      {editProfile.photo && <img src={editProfile.photo} />}
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
                            type="file"
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4"
                  >
                    Simpan
                  </Button>
                  <SuccessModal isOpen={showModal} onClose={closeModal}>Profile berhasil diperbarui</SuccessModal>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfileRecruiter;
