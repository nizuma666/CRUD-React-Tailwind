import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing-page";
import Login from "./pages/login";
import Home from "./pages/main/home";
import Profile from "./pages/main/profile";
import Register from "./pages/register";
import EditProfile from "./pages/main/edit-profile";
import Main from "./pages/main";
import WorkerProfile from "./pages/main/profile-worker";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="worker" element={<WorkerProfile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
        {/* <Route path="/home" Component={Home} />
        <Route path="/home/profile" Component={profile} />
        <Route path="/home/skills" Component={SkillsList} />
        <Route path="/home/editprofile" Component={editPorfile} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
