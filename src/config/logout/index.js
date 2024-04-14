import React from 'react'

 const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // Redirect pengguna ke halaman login atau halaman lain yang sesuai
  };
  export default handleLogout