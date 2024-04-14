import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSkillModal from "./AddModalSkills";
import { Link, useNavigate } from "react-router-dom";

const SkillsList = () => {
  const [skills, setSkills] = useState([]);
  const token = localStorage.getItem("token");
  var config = {
    headers: {
      Authorization: `Bearer ${token}`, // Menyertakan token dalam header
    },
  };

  useEffect(() => {
    // Lakukan permintaan ke endpoint untuk mendapatkan data skill dengan header yang dikonfigurasi
    axios
      .get("https://fwm17-be-peword.vercel.app/v1/skills", config)
      .then((response) => {
        setSkills(response.data.data);
      })
      .catch((error) => {
        console.error("Ada kesalahan saat mengambil data skill:", error);
      });
  }, []);
  // Menjalankan efek hanya sekali saat komponen dipasang

  const handleDelete = (id) => {
    // Lakukan permintaan ke endpoint untuk menghapus data skill
    axios
      .delete(`https://fwm17-be-peword.vercel.app/v1/skills/${id}`, config)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Ada kesalahan saat menghapus data skill:", error);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // Redirect pengguna ke halaman login atau halaman lain yang sesuai
    navigate("/login");
  };
  //   const handleAddSkill = (newSkill) => {
  //     axios
  //       .post("https://fwm17-be-peword.vercel.app/v1/skills", config)
  //       .then((response) => {
  //         setSkills(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.error("Ada kesalahan saat mengambil data skill:", error);
  //       });
  //     // Logic untuk menambahkan data skill ke state atau mengirimkan permintaan ke server
  //     // Disesuaikan dengan kebutuhan aplikasi kamu
  //     console.log("Skill baru:", newSkill);
  //   };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Daftar Skill</h2>

      <button onClick={handleLogout}>Logout</button>
      <Link to="/home"><button>Home</button></Link>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">ID</th>
            <th className="border border-gray-200 px-4 py-2">Nama Skill</th>
            <th className="border border-gray-200 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 text-center">
                {skill.id}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                {skill.skill_name}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <button
                  className=" bg-green-600 hover:bg-green-700 hover:text-white text-white py-2 px-4 border-transparent rounded mb-4"
                  onClick={handleOpenModal}
                >
                  + Tambah Skill
                </button>
                <AddSkillModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  // onAdd={handleAddSkill}
                />
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(skill.id)}
                >
                  Delete Skill
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsList;
