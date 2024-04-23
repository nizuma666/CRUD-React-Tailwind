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
import api from "../../../config/api/index.js";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/loading/index.jsx";
import { useDispatch } from "react-redux";
import { register } from "../../../config/reducer/authSlice.js";
import { getWorkers } from "../../../config/reducer/workersSlice.js";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [workers, setWorkers] = useState([]);
  const [params, setParams] = useState({
    limit: 5,
    search: "",
    page: 1,
    sort: "",
  });
  const handlePrev = () => {
    setParams({
      ...params,
      page: params.page - 1,
    });
  };
  const handleNext = () => {
    setParams({
      ...params,
      page: params.page + 1,
    });
  };
  const handleSearch = (e) => {
    setParams({
      ...params,
      search: e.target.value,
    });
  };
  useEffect(() => {
    setLoading(true);
    dispatch(getWorkers(params))
    .unwrap()
    .then((res)=>{
      setLoading(false)
      setWorkers(res)
    })
  }, [params]);
  const handleSort = () => {
    setParams({
      ...params,
      sort: "name",
    });
  };
  const handleNavigate = (id) => {
    navigate(`/main/profile/${id}`);
  };
  return (
    <div className="w-full bg-abu-abu pb-10">
      <div className="h-24 bg-ungu-muda text-white text-2xl font-bold pt-7 px-7 box-border">
        Top Job
      </div>
      <section>
        <div className="flex justify-around items-center p-3 w-4/5 h-16 rounded mx-auto my-5 bg-white">
          <input
            onChange={handleSearch}
            name="search"
            className=" w-3/4 h-8 outline-none border-none text-abu-gelap text-xs rounded p-2"
            type="text"
            placeholder="Cari nama peworld"
          />
          <img className="w-7 h-7 ml-2" src={search} />
          <Button className="bg-white text-ungu-muda" onClick={handleSort}>
            Urutkan nama
          </Button>
        </div>
        <div className="flex justify-center">{loading && <Loading />}</div>
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
                    className="text-xs bg-orange-gelap text-white p-2 rounded-md"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>
            <Button
              className="ml-auto bg-ungu-muda text-white h-14 p-2 rounded-md"
              onClick={() => handleNavigate(item.id)}
            >
              Lihat Profil
            </Button>
            {/* <button
              type="button"
              className="h-14 bg-ungu-muda hover:bg-violet-800 hover:text-white text-white py-2 px-4 border-transparent rounded ml-auto"
            >
              Lihat Profile
            </button> */}
          </div>
        ))}
        <div className="flex justify-center gap-4 rounded mt-10">
          <button
            onClick={handlePrev}
            className="w-20 h-12 bg-white text-center p-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded"
          >
            Previous
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded">
            {params.page}
          </button>
          <button
            onClick={handleNext}
            className="w-20 h-12 bg-white text-center p-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
