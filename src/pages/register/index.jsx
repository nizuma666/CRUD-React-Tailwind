import React, { useState } from "react";
import { LogoSvg, previous } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/api/index.js";
import { useDispatch } from "react-redux";
import {
  registerRecruiter,
  registerWorker,
} from "../../config/reducer/authSlice.js";

function Register() {
  const [isActiveForm, setIsActiveForm] = useState("recruiter");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formRecruiter, setFormRecruiter] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    position: "",
    phone: "",
  });
  const [formWorker, setFormWorker] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();
    if (isActiveForm === "recruiter") {
      dispatch(registerRecruiter(formRecruiter))
        .unwrap()
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      dispatch(registerWorker(formWorker))
        .unwrap()
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };
  const handleChangeRecruiter = (e) => {
    setFormRecruiter({
      ...formRecruiter,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeWorker = (e) => {
    setFormWorker({
      ...formWorker,
      [e.target.name]: e.target.value,
    });
  };
  const handleActiveForm = (value) => {
    setIsActiveForm(value === "menu" ? null : value);
  };
  // const handleActiveFormWorker = () =>{
  //   setIsActiveFormRecruiter(false)
  //   setIsActiveFormWorker(true)
  // }
  return (
    <section className="bg-abu-abu">
      <div className="w-full flex p-5 justify-around h-screen mx-auto max-[768px]:flex-col max-[768px]:gap-y-4">
        <div className="w-1/2 h-auto flex flex-col justify-start bg-login bg-cover p-10 box-border max-lg:hidden">
          <div className="mx-auto my-auto">
            <p className="text-white text-5xl font-bold leading-snug">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full pl-10 max-lg:pl-0 max-lg:w-full">
          <div className="flex justify-start mb-1">
            <div>
              <Link
                to="/"
                className="font-semibold flex items-center bg-white bg-opacity-25 py-2 pr-2 rounded-md mr-2"
              >
                <img className="w-8 h-8" src={previous} />
              </Link>
            </div>
            <div>
              <p className=" text-xl font-semibold max-lg:text-sm">
                Halo, Pewpeople
              </p>
              <p className=" text-lg max-lg:text-sm">
                Segera daftar dan temukan talent terbaik untukmu
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-x-2">
            <button
              onClick={() => handleActiveForm("recruiter")}
              className={`w-1/4 h-10 border-none text-lg text-white  cursor-pointer rounded-lg text-center max-lg:text-sm ${
                isActiveForm === "recruiter" ? "bg-orange-300" : "bg-orange-gelap"
              }`}
            >
              Rekruter
            </button>
            <button
              onClick={() => handleActiveForm("worker")}
              className={`w-1/4 h-10 border-none text-lg text-white  cursor-pointer rounded-lg text-center max-lg:text-sm ${
                isActiveForm === "worker" ? "bg-orange-300" : "bg-orange-gelap"
              }`}
            >
              Pekerja
            </button>
          </div>
          {isActiveForm === "recruiter" && (
            <div className="mb-5">
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Email
                </label>
                <input
                  value={formRecruiter.email}
                  onChange={handleChangeRecruiter}
                  name="email"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  type="email"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Kata Sandi
                </label>
                <input
                  value={formRecruiter.password}
                  onChange={handleChangeRecruiter}
                  type="password"
                  name="password"
                  test-id="test"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  placeholder="Masukkan kata sandi"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Nama
                </label>
                <input
                  value={formRecruiter.name}
                  onChange={handleChangeRecruiter}
                  type="text"
                  name="name"
                  test-id="test"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  placeholder="Masukkan nama"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Perusahaan
                </label>
                <input
                  value={formRecruiter.company}
                  onChange={handleChangeRecruiter}
                  type="text"
                  name="company"
                  test-id="test"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  placeholder="Masukkan nama perusahaan"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Jabatan
                </label>
                <input
                  value={formRecruiter.position}
                  onChange={handleChangeRecruiter}
                  type="text"
                  name="position"
                  test-id="test"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  placeholder="Masukkan jabatan"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5 max-lg:mb-1">
                <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                  Nomor Telepon
                </label>
                <input
                  value={formRecruiter.phone}
                  onChange={handleChangeRecruiter}
                  type="text"
                  name="phone"
                  test-id="test"
                  className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                  placeholder="Masukkan nomor telepon"
                  autoComplete="off"
                />
              </div>
            </div>
          )}
          {isActiveForm === "worker" && (
            <div className="my-12">
              <div className="mb-5">
                <div className="mb-5">
                  <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                    Email
                  </label>
                  <input
                    value={formWorker.email}
                    onChange={handleChangeWorker}
                    name="email"
                    className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                    type="email"
                    placeholder="Masukkan alamat email"
                  />
                </div>
                <div className="mb-5">
                  <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                    Kata Sandi
                  </label>
                  <input
                    value={formWorker.password}
                    onChange={handleChangeWorker}
                    type="password"
                    name="password"
                    test-id="test"
                    className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                    placeholder="Masukkan kata sandi"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                    Nama
                  </label>
                  <input
                    value={formWorker.name}
                    onChange={handleChangeWorker}
                    type="text"
                    name="name"
                    test-id="test"
                    className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                    placeholder="Masukkan nama"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label className="text-sm text-abu-gelap max-lg:text-xs max-lg:font-semibold">
                    Nomor Telepon
                  </label>
                  <input
                    value={formWorker.phone}
                    onChange={handleChangeWorker}
                    type="text"
                    name="phone"
                    test-id="test"
                    className="bg-white p-0 w-full h-10 rounded-lg text-sm border-none outline-none indent-4 max-lg:text-xs"
                    placeholder="Masukkan nomor telepon"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleRegister}
            className="w-full h-10 border-none text-lg text-white bg-orange-gelap cursor-pointer rounded-lg text-center hover:bg-orange-terang"
          >
            Daftar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
