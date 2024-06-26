import React, { useEffect, useState } from "react";
import { search, PinMap } from "../../../assets/icons";
import { profile2 } from "../../../assets/image";
import Button from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../../components/loading/index.jsx";
import { useDispatch } from "react-redux";
import { getWorkers } from "../../../config/reducer/workersSlice.js";
import AlertModal from "../../../components/modal/alert-modal/index.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [workers, setWorkers] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [params, setParams] = useState({
    limit: 10,
    search: "",
    page: 1,
    sortBy: "",
    sort: "",
  });
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [messageModal, setModalMessage] = useState("");
  const [headerMessageModal, setHeaderModalMessage] = useState("");
  const token = localStorage.getItem("token");
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
      .then((res) => {
        setLoading(false);
        setWorkers(res);
        // console.log(res);
      });
  }, [params]);
  const handleSortBy = (sort) => {
    setParams({
      ...params,
      sortBy: sort,
      sort: "name",
    });
  };

  const handleSortChange = (event) => {
    handleSortBy(event.target.value); // Panggil fungsi handleSort sesuai dengan urutan yang dipilih
  };
  const handleNavigate = (id) => {
    if (!token) {
      setAlertShowModal(true);
      setModalMessage("Anda belum login!");
      setHeaderModalMessage("Oops!!!");
    } else {
      navigate(`/main/profile/${id}`);
    }
  };
  const closeModal = () => {
    setAlertShowModal(false);
  };
  const isItemComplete = (item) => {
    return (
      item.name &&
      item.photo &&
      item.job_desk &&
      item.workplace &&
      item.skills && item.skills.length > 0
    );
  };
  return (
    <div className="w-full bg-abu-abu pb-10 max-lg:pt-5">
      <AlertModal
        isOpen={showAlertModal}
        onClose={closeModal}
        header={headerMessageModal}
      >
        {messageModal}
      </AlertModal>
      <div className="h-24 bg-ungu-muda text-white text-2xl font-bold pt-7 px-7 box-border max-lg:hidden">
        Top Job
      </div>
      <section>
        <div className="my-5 text-ungu-muda mx-auto w-4/5">
          <p className="font-medium">
            <Link to="/">Kembali ke Home</Link>
          </p>
        </div>
        <div className="flex justify-around items-center p-3 w-4/5 h-16 rounded mx-auto my-5 bg-white">
          <input
            onChange={handleSearch}
            name="search"
            className=" w-3/4 max-lg:w-1/2 h-8 outline-none border-none text-abu-gelap text-base max-lg:text-sm rounded p-2"
            type="text"
            placeholder="Cari nama peworld"
          />
          <img className="h-7 ml-2 max-lg:ml-0 max-lg:h-5" src={search} />
          <div className="text-ungu-muda max-lg:text-sm">
            <label>Filter: </label>
            <select onChange={handleSortChange} className="bg-white">
              <option value="ASC">A-Z</option>
              <option value="DESC">Z-A</option>
            </select>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          workers.filter(isItemComplete).map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="w-4/5 mx-auto flex justify-start bg-white border-solid border-b-2 border-abu-muda p-5 box-border items-center rounded"
            >
            <div className="w-24 h-24">
              <img
                className="max-lg:w-14 max-lg:h-14 rounded-full w-24 h-24 object-contain"
                src={item.photo ? item.photo : profile2}
              />
              </div>
              <div
                key={item.id}
                className="flex flex-col ml-5 gap-3 max-lg:gap-0"
              >
                <p className="font-semibold text-2xl max-lg:text-base">
                  {item.name}
                </p>
                <p className=" text-abu-gelap max-lg:text-xs max-lg:mb-1">
                  {item.job_desk}
                </p>
                <p className=" text-abu-gelap max-lg:text-xs max-lg:hidden">
                  <img
                    className="w-4 h-4 max-lg:w-2 max-lg:h-2"
                    src={PinMap}
                    alt="map-pin"
                  />
                  {item.workplace}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {/* Menampilkan maksimal 3 skills */}
                  {item.skills.slice(0, 3).map((skill, index) => (
                    <button
                      key={index}
                      className="text-xs bg-orange-gelap text-white p-2 max-lg:p-1 rounded-md max-lg:text-[9px]"
                    >
                      {skill}
                    </button>
                  ))}
                  {/* Jika skills lebih dari 3, tambahkan tombol untuk melihat lebih lanjut */}
                  {item.skills.length > 3 && (
                    <div className="text-sm self-center text-gray-500 max-lg:text-xs">
                      <p>{item.skills.length - 3}+</p>
                    </div>
                  )}
                </div>
              </div>
              <Button
                className="ml-auto bg-ungu-muda text-white h-14 p-2 rounded-md max-lg:hidden"
                onClick={() => handleNavigate(item.id)}
              >
                Lihat Profil
              </Button>
            </div>
          ))
        )}
        <div className="flex justify-center gap-4 rounded mt-10">
          <button
            onClick={handlePrev}
            className="w-20 h-12 bg-white text-center p-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded max-lg:text-sm"
          >
            Previous
          </button>
          <button className="w-12 h-12 bg-white text-center pt-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded max-lg:text-sm">
            {params.page}
          </button>
          <button
            onClick={handleNext}
            className="w-20 h-12 bg-white text-center p-1 bg-transparent hover:bg-ungu-muda hover:text-white rounded max-lg:text-sm"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
