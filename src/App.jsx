import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing-page";
import Login from "./pages/login";
import Home from "./pages/main/home";
import Profile from "./pages/main/profile";
import Register from "./pages/register";
import EditProfileWorker from "./pages/main/edit-profile-worker";
import Main from "./pages/main";
import WorkerProfile from "./pages/main/profile-worker";
import RecruiterProfile from "./pages/main/profile-recruiter";
import EditProfileRecruiter from "./pages/main/edit-profile-recruiter";
import Hire from "./pages/main/hire";
import ProtectedRoute from "./config/protected-route";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={ <ProtectedRoute> <Main /> </ProtectedRoute>}>
          <Route path="home" element={<Home />} />
          <Route path="worker" element={<WorkerProfile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="recruiter" element={<RecruiterProfile />} />
          <Route path="editprofileworker" element={<EditProfileWorker />} />
          <Route path="editprofilerecruiter" element={<EditProfileRecruiter />} />
          <Route path="hire/:workerId" element={<Hire />} />
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
