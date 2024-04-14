import React, { useEffect, useState } from "react";
import {
  bell,
  LogoPng,
  email,
  search,
  line,
  PinMap,
  LogoSvg,
} from "../../../assets/icons";
import { profile1, profile2 } from "../../../assets/image";
import Button from "../../../components/button";
import api from '../../../config/api/index.js'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
      api.get("/workers/?limit=3")
      .then((response) => {
        setWorkers(response.data.data);
      })
      .catch((err) => {
        console.log(
          "Ada error saat mengambil data worker dan skill",
          err.response
        );
      });
  },[]);
  const handleNavigate = (id) =>{
    navigate(`/main/profile/${id}`)

  }
  return (
    <div className="w-full bg-abu-abu">
      <div className="h-24 bg-ungu-muda text-white text-2xl font-bold pt-7 px-7 box-border max-[768px]:hidden">
        Top Job
      </div>
      <section>
        <div className="flex justify-between items-center p-3 w-4/5 h-16 rounded mx-auto my-5 bg-white">
          <input
            className=" w-3/4 h-8 outline-none border-none text-abu-gelap text-xs rounded p-2"
            type="text"
            placeholder="Mau cari skill apa?"
          />
          <img className="w-7 h-7 ml-2" src={search} />
          <img className="w-7 h-7" src={line} />
          <input
            className="h-8 w-1/5 outline-none border-none text-abu-gelap text-xs rounded p-2"
            type="text"
            placeholder="Category"
          />
          <button className=" w-24 h-10 border-none rounded bg-ungu-muda text-white">
            Search
          </button>
        </div>
        {workers.map((item) => (
          <div
          key={item.id}
            className="w-4/5 mx-auto flex justify-start bg-white border-solid border-b-2 border-abu-muda p-5 box-border items-center rounded"
          >
            <img className="w-24 h-24" src={profile2} />
            <div key={item.id} className="flex flex-col ml-5 gap-3">
              <p className="font-semibold text-2xl">{item.name}</p>
              <p className=" text-abu-gelap">{item.job_desk}</p>
              <p className=" text-abu-gelap">
                <img className="w-4 h-4" src={PinMap} alt="map-pin" />
                {item.workplace}
              </p>
              
                <div className="flex gap-3">
                {item.skills.map((skill, index) => (
                  <Button
                    key={index}
                    className="w-16 text-xs bg-orange-gelap text-white"
                  >
                    {skill}
                  </Button>
                ))}
                </div>
              
            </div>
            <Button onClick={()=>handleNavigate(item.id)}>Lihat Profil</Button>
            {/* <button
              type="button"
              className="h-14 bg-ungu-muda hover:bg-violet-800 hover:text-white text-white py-2 px-4 border-transparent rounded ml-auto"
            >
              Lihat Profile
            </button> */}
          </div>
        ))}
        <div className="flex justify-center gap-4 my-4 rounded">
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            1
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            2
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            3
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            4
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            5
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            6
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
