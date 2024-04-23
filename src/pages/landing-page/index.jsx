import React from "react";
import {
  ellipse1,
  ellipse2,
  ellipse3,
  pic1,
  pic2,
  pic3,
  tokopedia,
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
import Footer from "../../components/footer";

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
            <Button className="bg-white hover:bg-ungu-muda text-ungu-muda font-semibold hover:text-white w-full rounded-md py-3">
              Masuk
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-white hover:bg-ungu-muda text-ungu-muda font-semibold hover:text-white w-full rounded-md py-3">
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
                className="bg-transparent hover:bg-ungu-muda text-ungu-muda hover:text-white border border-ungu-muda hover:border-transparent rounded py-2 px-4"
              >
                Masuk
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="bg-ungu-muda hover:bg-white hover:text-ungu-muda hover:border hover:border-ungu-muda text-white py-2 px-4 border-transparent rounded"
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
              Cari talenta terbaik dan unggulkan persainganmu bersama peworld
            </p>
            <Link to="/login">
            <button
              type="button"
              className="w-52 bg-ungu-muda hover:bg-white hover:text-ungu-muda  hover:border hover:border-ungu-muda text-white py-4 px-4 rounded"
            >
              Mulai Dari Sekarang
            </button>
            </Link>
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
                  <p>Kualitas SKill terjamin</p>
                </div>
                <div>
                  <p>Siap bekerja kapanpun</p>
                </div>
                <div>
                  <p>WFH dan WFO selalu siap</p>
                </div>
                <div>
                  <p>Softskill yang menunjang kinerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="container w-1/2 flex flex-col justify-start px-10 py-10 gap-8">
            <p className="text-4xl font-semibold leading-snug">Skill Talent</p>
            <p className="w-3/5">
              Peworld memiliki banyak sekali talent dengan berbagai skill
              programming yang dikuasai
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
      <Footer/>
    </>
  );
};

export default Landing;
