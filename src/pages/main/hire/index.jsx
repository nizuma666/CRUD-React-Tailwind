import React, { useEffect, useState } from "react";
import api from "../../../config/api";
import { porto1, profile1, profile_porto } from "../../../assets/image";
import { Loading } from "../../../components/loading";
import { PinMap } from "../../../assets/icons";
import Button from "../../../components/button";
import { Link, useParams } from "react-router-dom";
import Input from "../../../components/input";
import SuccessModal from "../../../components/modal/success-modal";
import { useDispatch } from "react-redux";
import { getWorkerProfilebyId, postHire } from "../../../config/reducer/workersSlice";
import { getSkillsbyId } from "../../../config/reducer/skillsSlice";

const Hire = () => {
  const [getProfile, setGetProfile] = useState("");
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { workerId } = useParams();
  const [getSkill, setGetSkill] = useState([]);
  const [addHire, setAddHire] = useState({
    message_purpose: "",
    worker_id: `${workerId}`,
    name: "",
    email: "",
    phone: "",
    desciption: "",
  });

  useEffect(() => {
    setLoading(true);
    dispatch(getWorkerProfilebyId(workerId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setGetProfile(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
    dispatch(getSkillsbyId(workerId))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setGetSkill(res);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
  }, []);
  const handleAddHire = () => {
    dispatch(postHire(addHire))
    .then((res)=>{
      setShowSuccessModal(true)
    })
    .catch((err)=>{
      console.log(err.response);
    })
  };
  const handleChangeHire = (e) => {
    setAddHire({
      ...addHire,
      [e.target.name]: e.target.value,
    });
  };
  const closeModal = () => {
    setShowSuccessModal(false);
  };
  return (
    <section className=" bg-abu-abu">
      <div className="flex justify-center gap-8 max-[768px]:flex-col max-[768px]:items-center">
        <div className="bg-white w-1/4 h-auto my-6 rounded-md max-[768px]:w-4/5">
          <div className="p-6 box-border flex flex-col gap-y-3">
            <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
            {loading && <Loading />}
            <p className="text-xl font-bold uppercase">{getProfile.name}</p>
            <p className="text-xs">{getProfile.job_desk}</p>
            <div className="flex flex-row gap-y-1 items-center">
              <img className="w-4 h-4" src={PinMap} />
              <p className="text-abu-gelap text-xs">{getProfile.domicile}</p>
            </div>
            <p className="text-abu-gelap text-xs">{getProfile.workplace}</p>
            <p className="text-abu-gelap text-xs my-1 leading-5">
              {getProfile.description}
            </p>
          </div>
          <div className="flex flex-col p-6 justify-between gap-y-3">
            <p>Skill</p>
            {loading && <Loading />}
            <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
              {getSkill.map((item) => (
                <Button
                  key={item.id}
                  className="text-xs bg-orange-gelap text-white py-2 px-3 rounded-md"
                >
                  {item.skill_name}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-3/4 mx-auto max-[768px]:mb-6">
          <Link to="/main/home">
              <Button className="w-full bg-ungu-muda hover:bg-white text-white hover:text-ungu-muda hover:border hover:border-ungu-muda hover:border-transparent rounded py-2 px-4">
                Kembali
              </Button>
            </Link>
            </div>
        </div>
        <div className="w-3/5 my-6">
          <div className="mb-10">
            <p className="text-3xl font-semibold capitalize mb-2">
              Hubungi {getProfile.name}
            </p>
            <p className=" text-gray-800 text-lg">
              Isi data dibawah ini untuk mengirim pesan kepada pekerja
            </p>
          </div>
          <form>
            <div className="flex flex-col text-abu-gelap gap-1 mb-5">
              <label className="text-xs">Tujuan Pesan Ini</label>
              <Input
                name="message_purpose"
                value={addHire.message_purpose}
                onChange={handleChangeHire}
                type="text"
                placeholder="Tuliskan tujuan hire"
              />
            </div>
            <div className="flex flex-col text-abu-gelap gap-1 mb-5">
              <label className="text-xs">Nama Lengkap</label>
              <Input
                name="name"
                value={addHire.name}
                onChange={handleChangeHire}
                type="text"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="flex flex-col text-abu-gelap gap-1 mb-5">
              <label className="text-xs">Email</label>
              <Input
                name="email"
                value={addHire.email}
                onChange={handleChangeHire}
                type="email"
                placeholder="Masukkan email"
              />
            </div>
            <div className="flex flex-col text-abu-gelap gap-1 mb-5">
              <label className="text-xs">No Handphone</label>
              <Input
                name="phone"
                value={addHire.phone}
                onChange={handleChangeHire}
                type="text"
                placeholder="Masukkan nomor telepon"
              />
            </div>
            <div className="flex flex-col text-abu-gelap gap-1 mb-8">
              <label className="text-xs">Deskripsi Singkat</label>
              <textarea
                name="desciption"
                value={addHire.desciption}
                onChange={handleChangeHire}
                className="rounded outline-none border-solid border-2 w-full h-56 text-sm p-2 resize-none"
                placeholder="Tuliskan deskripsi singkat"
              />
            </div>
            <Button
              onClick={handleAddHire}
              className="w-full bg-orange-gelap py-2 rounded-md text-white hover:bg-orange-terang"
            >
              Kirim
            </Button>
            <SuccessModal isOpen={showSuccessModal} onClose={closeModal}>Permintaan Hire Telah Terkirim</SuccessModal>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hire;
