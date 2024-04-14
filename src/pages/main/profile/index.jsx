import React, { useEffect, useState } from "react";
import {
  bell,
  LogoPng,
  email,
  search,
  line,
  PinMap,
  LogoSvg,
  instagram,
  github,
  gitlab,
} from "../../../assets/icons";
import {
  porto1,
  porto2,
  porto3,
  porto4,
  porto5,
  porto6,
  profile1,
  profile2,
  profile_porto,
} from "../../../assets/image";
import Button from "../../../components/button";
import api from "../../../config/api/index.js";
import { useParams } from "react-router-dom";

const Profile = () => {
  const {profileId} = useParams();
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get(`https://fwm17-be-peword.vercel.app/v1/workers/${profileId}`),
      api.get(`https://fwm17-be-peword.vercel.app/v1/skills/${profileId}`),
    ])
      .then((responses) => {
        const nameResponse = responses[0];
        const skillResponse = responses[1];
        setName(nameResponse.data.data);
        setSkills(skillResponse.data.data);
      })
      .catch((errors) => {
        console.error("Ada kesalahan saat mengambil data", errors);
      });
  }, []);
  return (
    <div>
      <section className="bg-abu-abu">
        <div className="bg-ungu-muda h-96 w-full"></div>
        <div className="flex flex-row justify-center gap-8 relative bottom-80 max-[768px]:flex-col max-[768px]:items-center">
          <div className="bg-white w-1/4 h-auto rounded-md max-[768px]:w-4/5">
            <div className="p-6 box-border flex flex-col gap-y-3">
              <img className="w-36 h-36 self-center mb-5" src={profile_porto} />
              <p className="text-xl font-bold uppercase">{name.name}</p>
              <p className="text-xs">{name.job_desk}</p>
              <div className="flex flex-row gap-y-1 items-center">
                <img className="w-4 h-4" src={PinMap} />
                <p className="text-abu-gelap text-xs">{name.domicile}</p>
              </div>
              <p className="text-abu-gelap text-xs">{name.workplace}</p>
              <p className="text-abu-gelap text-xs my-1 leading-5">
                {name.description}
              </p>
              <Button className="w-full bg-ungu-muda hover:bg-violet-800 text-white">
                Hire
              </Button>
            </div>
            <div className="flex flex-col p-6 justify-between gap-y-3">
              <p>Skill</p>
              <div className="flex flex-wrap gap-y-3 gap-x-2 pl-0 px-8">
                {skills.map((skill) => (
                  <Button
                    key={skill.id}
                    className="w-20 text-xs bg-orange-gelap text-white"
                  >
                    {skill.skill_name}
                  </Button>
                ))}

                {/* <Button className="w-24 text-xs bg-orange-gelap">
                  Laravel
                </Button>
                <Button className="w-16 text-xs bg-orange-gelap">Golang</Button>
                <Button className="w-24 text-xs bg-orange-gelap">
                  Javascript
                </Button>
                <Button className="w-16 text-xs bg-orange-gelap">HTML</Button>
                <Button className="w-12 text-xs bg-orange-gelap">C++</Button>
                <Button className="w-16 text-xs bg-orange-gelap">Swift</Button> */}
              </div>
            </div>
            <div className="flex gap-x-3 p-6">
              <div className="flex flex-col gap-y-3">
                <img className="w-4 h-4" src={email} />
                <img className="w-4 h-4" src={instagram} />
                <img className="w-4 h-4" src={github} />
                <img className="w-4 h-4" src={gitlab} />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-xs m-0 text-abu-gelap">
                  Louistommo@gmail.com
                </p>
                <p className="text-xs m-0 text-abu-gelap">@Louist91</p>
                <p className="text-xs m-0 text-abu-gelap">@Louistommo</p>
                <p className="text-xs m-0 text-abu-gelap">@Louistommo91</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-1/2 w-1/2 rounded-md px-4 py-5 box-border max-[768px]:w-4/5">
            <div className="flex flex-row gap-5 h-10 mb-4 max-[768px]:ml-14">
              <p className="border-solid border-b-4 border-b-ungu-muda">
                Portofolio
              </p>
              <p>Pengalaman</p>
            </div>
            <div className="flex justify-between flex-wrap gap-y-4 gap-x-4 max-[768px]:justify-center max-[768px]:gap-x-9">
              <div className="text-xs text-center font-semibold">
                <img src={porto1} />
                <p>Remainder App</p>
              </div>
              <div className="text-xs text-center font-semibold">
                <img src={porto2} />
                <p>Socal Media App</p>
              </div>
              <div className="text-xs text-center font-semibold">
                <img src={porto3} />
                <p>Project Management Web</p>
              </div>
              <div className="text-xs text-center font-semibold">
                <img src={porto4} />
                <p>Remainder App</p>
              </div>
              <div className="text-xs text-center font-semibold">
                <img src={porto5} />
                <p>Social Media App</p>
              </div>
              <div className="text-xs text-center font-semibold">
                <img src={porto6} />
                <p>Project Management Web</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Profile;
