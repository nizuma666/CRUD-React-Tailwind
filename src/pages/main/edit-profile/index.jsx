import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  PinMap,
} from "../../../assets/icons";
import {
  profile_porto,
} from "../../../assets/image";
import Button from "../../../components/button";
import axios from "axios";
import api from '../../../config/api/index.js';

const EditProfile = () => {
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
  useEffect(() => {
    Promise.all([
      api.get("https://fwm17-be-peword.vercel.app/v1/workers/profile"),
      api.get("https://fwm17-be-peword.vercel.app/v1/skills"),
    ])
      .then((responses) => {
        const profileRensponse = responses[0];
        const GetSkillResponse = responses[1];
        setMyProfile(profileRensponse.data.data);
        setGetSkill(GetSkillResponse.data.data);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
  }, []);
  const handleAddSkill = () => {
    api
      .post(
        "https://fwm17-be-peword.vercel.app/v1/skills",
        {
          skill_name: skillName,
        }
      )
      .then((res) => {
        alert("Berhasil Menambah Skill");
        setSkillName("");
      })
      .catch((err) => {
        console.log(err.response);
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
    e.preventDefault();
    api
      .put(
        `https://fwm17-be-peword.vercel.app/v1/workers/profile`,
        editProfile
      )
      .then((res) => {
        alert("berhasil update profile");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal update profile");
      });
  };
  const handleDelete = (skillId) => {
    const confirmDelete = window.confirm("Apakah kamu yakin ingin menghapus skill ini?");
    if (confirmDelete) {
      api.delete(`/skills/${skillId}`)
        .then((res) => {
          alert("Berhasil Menghapus Skill")
          setGetSkill(skills.filter(skill => skill.id !== skillId));
        })
        .catch((err) => {
          console.error("Error deleting skill:", err);
        });
    }
  };
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex justify-center gap-8 relative bottom-80 max-[768px]:flex-col max-[768px]:items-center">
          <div className="w-1/5 h-1/2 max-[768px]:w-4/5">
            <div className="bg-white rounded-md p-6 w-full box-border flex flex-col gap-y-3 mb-5">
              <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
              <p className="text-xl font-semibold uppercase">{myprofile.name}</p>
              <p className="text-xs">{myprofile.job_desk}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{myprofile.domicile}</p>
              </div>
              <p className="text-abu-gelap text-xs">{myprofile.workplace}</p>
              <div className="flex flex-col justify-between gap-y-3">
              <p className="text-center font-semibold">Skill</p>

              <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
                {getSkill.map((skill) => (
                  <Button
                    key={skill.id}
                    onClick={() => handleDelete(skill.id)}
                    className="w-16 text-xs bg-orange-gelap text-white"
                  >
                    {skill.skill_name}
                  </Button>
                ))}
              </div>
            </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full text-white bg-ungu-muda mb-4"
            >
              Simpan
            </Button>
            <Link to='/main/worker'>
            <Button className="w-full bg-white hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded py-2 px-4">
              Batal
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
                    <input
                      name="name"
                      value={editProfile.name}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Job Desk</label>
                    <input
                      name="job_desk"
                      value={editProfile.job_desk}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                      type="text"
                      placeholder="Masukkan jobdesk"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Domisili</label>
                    <input
                      name="domicile"
                      value={editProfile.domicile}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                      type="text"
                      placeholder="Masukkan domisili"
                    />
                  </div>
                  <div className="flex flex-col text-abu-gelap gap-1 mb-5">
                    <label className="text-xs">Tempat Kerja</label>
                    <input
                      name="workplace"
                      value={editProfile.workplace}
                      onChange={handleChangeProfile}
                      className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
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
                </form>
              </div>
            </div>
            <div className="bg-white h-1/2 w-full rounded-md py-5 box-border mt-10">
              <div className="h-10 mb-4 border-b-2 mx-0 px-4">
                <p className="font-semibold">Skill</p>
              </div>
              <div className="px-7 py-2 box-border">
                <div className="flex text-abu-gelap gap-4 mb-5">
                  <input
                    name="skill_name"
                    value={skillName}
                    onChange={handleChangeSkill}
                    className="rounded outline-none border-solid border-2 w-full h-10 indent-4 text-sm"
                    type="text"
                  />
                  <Button
                    onClick={handleAddSkill}
                    className="w-16 text-xs bg-orange-gelap text-white"
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default EditProfile;
