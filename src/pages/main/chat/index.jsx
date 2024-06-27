import React, { useEffect, useState } from "react";
import { empty_chat, logo_company, profile1, profile_porto } from "../../../assets/image";
import { PinMap, previous } from "../../../assets/icons";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { getHireWorker } from "../../../config/reducer/workersSlice";
import { Loading } from "../../../components/loading";
import { getHireRecruiter } from "../../../config/reducer/recruiterSlice";
import api from "../../../config/api";

const Chat = () => {
  const dispatch = useDispatch();
  const [chatUser, setChatUser] = useState(null);
  const [role, setRole] = useState("")
  const { hire, loading } = useSelector((state) => state.workersSlice);
  const { hire: hireRecruiter, loading: loadingHireRecruiter } = useSelector((state) => state.recruiterSlice);
  useEffect(() => {
    api.get('/auth/check-role')
    .then((res)=>{
      if(res.data.data.data.role === 'recruiter'){
        dispatch(getHireRecruiter());
        setRole(res.data.data.data.role)
      }else{
        dispatch(getHireWorker());
        setRole(res.data.data.data.role)
      }
    })
    .catch((err)=>{
      console.log(err.response);
    })  
  }, [dispatch]);
  const handleClickChat = (id) => {
    const dataChat = hire?.find((item) => item.id === id);
    console.log("datachat", dataChat);
    setChatUser(dataChat);
  };
  console.log(chatUser);
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="flex justify-center gap-8 max-lg:gap-0 max-[768px]:flex-col max-[768px]:items-center py-7">
          <div className="w-1/5 h-1/2 max-[768px]:w-4/5">
          {role === "worker" ? (<Link
              to="/main/worker"
              className="font-semibold flex items-center gap-x-3 mb-4"
            >
              <img className="w-8 h-8" src={previous} />
              <p>Kembali</p>
            </Link>) : <Link
              to="/main/caripekerja"
              className="font-semibold flex items-center gap-x-3 mb-4 border border-transparent w-1/2 p-2 hover:border-ungu-muda rounded-lg hover:bg-white"
            >
              <img className="w-8 h-8" src={previous} />
              <p>Kembali</p>
            </Link>}
            
            <div className="bg-white rounded-md p-6 w-full h-[542px] box-border max-[768px]:items-center">
              <div className="border-b-2 p-2">
                <p className="font-semibold">Pesan</p>
              </div>
              {loading ? (
                <div className="mt-6">
                  <Loading />
                </div>
              ) : hire?.length < 1 ? (
                <>
                  <div className="mt-32">
                    <img className="mx-auto" src={empty_chat} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Belum ada pesan</p>
                  </div>
                </>
              ) : (
                hire?.map((item) => (
                  <div
                    onClick={() => handleClickChat(item.id)}
                    key={item.id}
                    className="mt-6"
                  >
                    <div className="flex gap-x-3 items-center">
                      <div>
                        <img
                          className="rounded-full w-8 h-8 border-2 border-solid"
                          src={item.recruiter_photo}
                        />
                      </div>
                      <div>
                        <p className="capitalize">{role === "worker" ? item.recruiter_name : item.worker_name }</p>
                        <p className="capitalize text-gray-500">
                          {item.desciption_request_hire.slice(0, 15)}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="w-3/5 h-1/2 max-[768px]:w-4/5 mt-16">
            <div className="bg-white rounded-md p-6 w-full h-[542px] box-border max-[768px]:items-center">
              {chatUser ? (
                <>
                  <div className="border-b-2 p-2 flex gap-x-3">
                  <img className="rounded-full w-8 h-8 border-2 border-solid" src={role === "worker" ? chatUser.worker_photo ? chatUser.worker.photo : profile1 : chatUser.recruiter_photo ? chatUser.recruiter_photo : logo_company} />
                    <p className="font-semibold capitalize"> {role === "worker" ? item.recruiter_name : item.worker_name } </p>
                  </div>
                  <div className="p-2 w-fit mt-6 flex gap-x-3 items-center border border-solid rounded-lg">
                  {/* <img className="rounded-full w-8 h-8 border-2 border-solid" src={chatUser.recruiter_photo} /> */}
                  <p className="text-sm"> {chatUser.desciption_request_hire} </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-b-2 p-2">
                    <p></p>
                  </div>
                  <div className="mt-32">
                    <img className="mx-auto" src={empty_chat} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Belum ada pesan</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
