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
import Chat from "./pages/main/chat";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />}>
          <Route path="caripekerja" element={<Home />} />
          <Route path="worker" element={<ProtectedRoute><WorkerProfile /></ProtectedRoute>} />
          <Route path="profile/:profileId" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="recruiter" element={<ProtectedRoute><RecruiterProfile /></ProtectedRoute>} />
          <Route path="editprofileworker" element={<ProtectedRoute><EditProfileWorker /></ProtectedRoute>} />
          <Route path="editprofilerecruiter" element={<ProtectedRoute><EditProfileRecruiter /></ProtectedRoute>} />
          <Route path="hire/:workerId" element={<ProtectedRoute><Hire /></ProtectedRoute>} />
          <Route path="chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
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
