import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { LogoSvg, previous } from "../../assets/icons";
// import { Link } from "react-router-dom";
import api from "../../config/api/index.js";

const Login = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const handleCheckRole = (e) => {
  //   e.preventDefault();
  //   api.get("/auth/check-role")
  //   .then((res)=>{
  //     console.log(res.data.data);
  //     if(res.data.data === "recruiter"){
  //       handleLogin()
  //     }else{
  //       alert("anda bukan recruiter")
  //       navigate("/")
  //     }
  //   })
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    api
      .post("auth/login", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        const { token, refreshToken } = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("resfreshToken", refreshToken);
        if(res.data.data.role === "recruiter"){
          navigate("/main/home");
        }else{
          navigate("/main/worker")
        }
        
      })
      .catch((err) => {
        console.log(err.response);
      });
    // instance({
    //   method: "POST",
    //   url: "/auth/login",
    //   data: {
    //     email: form.email,
    //     password: form.password,
    //   },
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-abu-abu">
      <div className="w-full flex p-5 justify-around h-screen mx-auto">
      <Link to="/">
      <img className="w-8 h-8" src={previous} />
      </Link>
        <div className="w-1/2 h-full flex flex-col justify-start bg-login bg-cover p-10 box-border max-lg:hidden">
          <div className="h-1/4">
            <Link to="/">
              <img src={LogoSvg} alt="logo" />
            </Link>
          </div>
          <div className="ml-10 mr-24">
            <p className="text-white text-4xl font-bold leading-snug">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 w-1/2 h-full pl-10 max-lg:pl-0 max-lg:w-full">
          <div className="flex flex-col justify-between">
            <p className=" text-3xl font-semibold">Halo, Pewpeople</p>
            <p className=" text-lg">
              Mau ngasah skill..? Login dulu bisa kaliiii
            </p>
          </div>
          <form onSubmit={handleLogin}>
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
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  test-id="test"
                  className="bg-white p-0 w-full h-12 rounded-lg text-sm border-none outline-none indent-4"
                  placeholder="Masukkan kata sandi"
                />
              </div>
            </div>
            <button className="w-full h-12 border-none text-lg text-white bg-orange-gelap cursor-pointer rounded-lg text-center hover:bg-orange-terang">
              Masuk
            </button>
          </form>
          <div>
            <div className="mb-5 text-right text-sm">
              <a href="#">Lupa Kata Sandi?</a>
            </div>
            <div>
              <p className=" text-center text-lg">
                Anda belum punya akun?{" "}
                <Link
                  to="/register"
                  className="text-orange-gelap hover:text-orange-terang"
                  href="#"
                >
                  Daftar disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
