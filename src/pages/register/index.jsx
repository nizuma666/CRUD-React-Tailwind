import React, { useState } from "react";
import { LogoSvg, previous } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import api from '../../config/api/index.js'
import { useDispatch } from "react-redux";
import { register } from "../../config/reducer/authSlice.js";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    position: "",
    phone: ""
  });
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(form))
    .unwrap()
    .then((res)=>{
    navigate("/login");
    })
    .catch((err)=>{
      console.log(err.response);
    })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="bg-abu-abu">
      <div className="w-full flex p-5 justify-around h-screen mx-auto max-[768px]:flex-col max-[768px]:gap-y-4">
        <div className="w-1/2 h-auto flex flex-col justify-start bg-login bg-cover p-10 box-border max-lg:hidden">
          <div className="h-1/4">
            <Link to="/" className="font-semibold flex items-center gap-x-3 bg-white bg-opacity-25 w-32 p-2 rounded-md">
              <img className="w-8 h-8" src={previous} />
              <p>Kembali</p>
          </Link>
          </div>
          <div className="ml-10 mr-24">
            <p className="text-white text-5xl font-bold leading-snug">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full pl-10 max-lg:pl-0 max-lg:w-full">
        
          <div className="flex flex-col justify-between mb-1">
            <p className=" text-xl font-semibold">Halo, Pewpeople</p>
            <p className=" text-lg">
              Lohe lohe gak punya akun? gas daftar lahh
            </p>
          </div>
            <div className="mb-5">
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Email</label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  type="email"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Kata Sandi</label>
                <input
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan kata sandi"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Nama</label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan nama"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Perusahaan</label>
                <input
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  name="company"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan nama perusahaan"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Jabatan</label>
                <input
                  value={form.position}
                  onChange={handleChange}
                  type="text"
                  name="position"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan jabatan"
                  autoComplete="off"
                />
              </div>
              <div className="mb-5">
                <label className="text-sm text-abu-gelap">Nomor Telepon</label>
                <input
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan nomor perusahaan"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              onClick={handleRegister}
              className="w-full h-12 border-none text-lg text-white bg-orange-gelap cursor-pointer rounded-lg text-center hover:bg-orange-terang"
            >
              Daftar
            </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
