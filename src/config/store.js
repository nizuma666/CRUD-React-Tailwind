import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/authSlice";
import workersSlice from "./reducer/workersSlice";
import recruiterSlice from "./reducer/recruiterSlice";
import skillsSlice from "./reducer/skillsSlice";
import portoSlice from "./reducer/portoSlice";
import experienceSlice, { postExp } from "./reducer/experienceSlice";

const store = configureStore({
  reducer: {
    authSlice,
    workersSlice,
    skillsSlice,
    portoSlice,
    experienceSlice,
    recruiterSlice,
  },
});
export default store;
