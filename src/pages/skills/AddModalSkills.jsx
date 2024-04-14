import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set root element untuk modal

const AddSkillModal = ({ isOpen, onClose, onAdd }) => {
  const [skillName, setSkillName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Menghentikan perilaku default dari event onSubmit

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "https://fwm17-be-peword.vercel.app/v1/skills",
        { skill_name: skillName },
        config
      );
      setSkillName(""); // Mengosongkan nilai input setelah berhasil menambahkan skill baru
      window.location.reload();
      //   onAdd(response.data.data); // Memanggil fungsi onAdd untuk memperbarui data setelah berhasil menambahkan skill baru
    } catch (error) {
      console.error("Ada kesalahan saat menambahkan skill:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="bg-white p-8 rounded shadow w-96 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Tambah Skill Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="skillName"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Skill:
            </label>
            <input
              type="text"
              id="skillName"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              placeholder="masukkan skill baru anda"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Tambah Skill
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:text-gray-500 focus:outline-none focus:border-indigo-500"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSkillModal;
