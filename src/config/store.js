import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/authSlice";
import workersSlice, { putWorkerProfile } from "./reducer/workersSlice";
import recruiterSlice, { editRecruiter } from "./reducer/recruiterSlice";
import skillsSlice, { deleteSkills, postSkills } from "./reducer/skillsSlice";
import portoSlice, { delPortofolio, postPortofolio } from "./reducer/portoSlice";
import experienceSlice, { postExp } from "./reducer/experienceSlice";

const store = configureStore({
  reducer: {
    login: authSlice,
    register: authSlice,
    getWorkers: workersSlice,
    getWorkerProfile: workersSlice,
    getWorkerProfilebyId: workersSlice,
    putWorkerProfile: workersSlice,
    getSkills: skillsSlice,
    getSkillsbyId: skillsSlice,
    postSkills: skillsSlice,
    deleteSkills: skillsSlice,
    getPortofolio: portoSlice,
    getPortofoliobyId: portoSlice,
    postPortofolio: portoSlice,
    delPortofolio: portoSlice,
    getExp: experienceSlice,
    getExpbyId: experienceSlice,
    postExp: experienceSlice,
    postHire: workersSlice,
    getProfileRecruiter: recruiterSlice,
    editRecruiter: recruiterSlice
  },
});
export default store;
