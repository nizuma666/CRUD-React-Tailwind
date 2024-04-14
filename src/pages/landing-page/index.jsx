import React from "react";
import {
  ellipse1,
  ellipse2,
  ellipse3,
  pic1,
  pic2,
  pic3,
} from "../../assets/image";
import {
  checklistPurple,
  checklistYellow,
  LogoPng,
  LogoSvg,
  next,
  previous,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-around bg-login bg-cover p-10 box-border lg:hidden">
        <Link to="/">
          <img src={LogoSvg} alt="logo" />
        </Link>
        <p className="text-white font-semibold text-4xl">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </p>
        <div className="flex flex-col gap-5">
          <Link to="/login">
            <Button className="bg-white hover:bg-ungu-muda text-ungu-muda font-semibold hover:text-white w-full">
              Masuk
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-white hover:bg-ungu-muda text-ungu-muda font-semibold hover:text-white w-full">
              Daftar
            </Button>
          </Link>
        </div>
      </div>

      <nav className="py-9 px-4 max-[768px]:hidden">
        <div className="container mx-auto flex justify-between px-10">
          <img src={LogoPng} alt="logo" />
          <div className="flex gap-4">
            <Link to="/login">
              <button
                type="button"
                className="bg-transparent hover:bg-violet-700 text-violet-700 hover:text-white border border-violet-700 hover:border-transparent rounded py-2 px-4"
              >
                Masuk
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="bg-violet-700 hover:bg-violet-800 hover:text-white text-white py-2 px-4 border-transparent rounded"
              >
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <section className="py-9 px-4 flex flex-col gap-14 max-[768px]:hidden">
        <div className="flex justify-content">
          <div className="container w-1/2 flex flex-col justify-center px-10 gap-8">
            <p className="text-5xl font-semibold leading-snug w-3/4">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </p>
            <p className="text-lg w-3/4">
              Tingkatkan skill dan unggulkan persainganmu bersama peworld
            </p>
            <button
              type="button"
              className="w-52 bg-violet-800 hover:bg-violet-950 text-white py-4 px-4 rounded"
            >
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="container w-1/2">
            <img src={pic1} alt="" />
          </div>
        </div>
        <div className="flex justify-content">
          <div className="container w-2/5 px-10">
            <img src={pic2} alt="" />
          </div>
          <div className="container w-3/5 flex flex-col justify-start px-10 py-10 gap-8">
            <p className="text-4xl font-semibold leading-snug w-3/4">
              Kenapa harus mencari tallent di peworld
            </p>
            <div className="flex gap-8 justify-start">
              <div className="flex flex-col gap-8">
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
                <div>
                  <img src={checklistPurple} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="container w-1/2 flex flex-col justify-start px-10 py-10 gap-8">
            <p className="text-4xl font-semibold leading-snug">Skill Talent</p>
            <p className="w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-8">
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p>Java</p>
                </div>
                <div>
                  <p>Kotlin</p>
                </div>
                <div>
                  <p>PHP</p>
                </div>
                <div>
                  <p>Javascript</p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
                <div>
                  <img src={checklistYellow} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p>Golang</p>
                </div>
                <div>
                  <p>C++</p>
                </div>
                <div>
                  <p>Ruby</p>
                </div>
                <div>
                  <p>10+ Bahasa lainnya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-1/2">
            <img src={pic3} alt="" />
          </div>
        </div>
      </section>
      <article className="bg-gray-100 max-[768px]:hidden">
        <div className="container mx-auto px-10 py-20 relative">
          <div className="pb-10">
            <p className="font-bold text-4xl text-center">
              Their opinion about peworld
            </p>
          </div>
          <div className="absolute right-60 top-96">
            <img className="w-14 h-14" src={next} alt="" />
          </div>
          <div className="absolute left-60 top-96">
            <img className="w-14 h-14" src={previous} alt="" />
          </div>
          <div className="flex justify-center gap-5">
            <div className="w-80 h-auto bg-white p-10">
              <div className="flex flex-col gap-2 items-center">
                <img
                  className="border-8 border-kuning-muda rounded-full"
                  src={ellipse1}
                  alt=""
                />
                <p className="text-3xl font-semibold">Harry Styles</p>
                <p className="text-abu-abu">Web Developer</p>
                <div className="p-4">
                  <p className="text-dongker-muda text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 h-auto bg-white p-10">
              <div className="flex flex-col gap-2 items-center">
                <img
                  className="border-8 border-kuning-muda rounded-full"
                  src={ellipse2}
                  alt=""
                />
                <p className="text-3xl font-semibold">Niall Horan</p>
                <p className="text-abu-abu">Web Developer</p>
                <div className="p-4">
                  <p className="text-dongker-muda text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 h-auto bg-white p-10">
              <div className="flex flex-col gap-2 items-center">
                <img
                  className="border-8 border-kuning-muda rounded-full"
                  src={ellipse3}
                  alt=""
                />
                <p className="text-3xl font-semibold">Louis Tomlinson</p>
                <p className="text-abu-abu">Web Developer</p>
                <div className="p-4">
                  <p className="text-dongker-muda text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mx-auto w-full p-44">
          <div className="bg-ungu-muda mx-auto w-4/5 h-56 rounded-tl-3xl rounded-br-3xl box-border p-20">
            <div className="flex justify-between items-center">
              <p className="text-white text-4xl">Lorem ipsum dolor sit amet</p>
              <Link to="/login">
                <button
                  type="button"
                  className="w-52 bg-white text-ungu-muda py-4 px-4 rounded"
                >
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <footer className="bg-ungu-muda max-[768px]:hidden">
        <div className="container p-16 flex flex-col mx-auto gap-7">
          <div>
            <img className="w-44 h-14" src={LogoSvg} alt="footer-item-logo" />
          </div>
          <div>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>

          <div className="mt-12 border-t-2 border-white pt-5 flex justify-between">
            <p className="text-white text-lg">
              2020 Pewworld. All right reserved
            </p>
            <div className="flex gap-5">
              <p className="text-white text-lg">Telepon</p>
              <p className="text-white text-lg">Email</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
