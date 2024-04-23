import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getSkillsbyId = createAsyncThunk(
    "skills/getSkillsbyId",
    async (profilId, { rejectWithValue }) => {
      try {
        const response = await api.get(`/skills/${profilId}`);
        return response.data.data;
      } catch (errors) {
        console.log(
          "Ada kesalahan saat mengambil data",
          rejectWithValue(errors.response)
        );
      }
    }
  );

  export const getSkills = createAsyncThunk(
    "skills/getSkills",
    async (thunkAPI) => {
      try {
        const response = await api.get(`/skills`);
        return response.data.data;
      } catch (errors) {
        console.log(errors.response);
        thunkAPI.rejectWithValue(errors.response)
      }
    }
  );

  export const postSkills = createAsyncThunk(
    "skills/postSkills",
    async (data, thunkAPI) => {
      try {
        const response = await api.post('/skills',{
            skill_name: data.skill_name,
        });
        return response.data.data;
      } catch (errors) {
        console.log(errors.response);
        thunkAPI.rejectWithValue(errors.response)
      }
    }
  );

  export const deleteSkills = createAsyncThunk(
    "skills/deleteSkills",
    async (SkillId, thunkAPI) => {
      try {
        const response = await api.delete(`/skills/${SkillId}`);
        return response.data.data;
      } catch (errors) {
        console.log(errors.response);
        thunkAPI.rejectWithValue(errors.response)
      }
    }
  );

  const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        loading: null,
        error: null,
        skill: null,
        skillId: null,
        postSkill: null,
        delSkill: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(getSkillsbyId.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getSkillsbyId.fulfilled, (state, action) => {
            state.loading = false;
            state.skillId = action.payload;
          })
          .addCase(getSkillsbyId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getSkills.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getSkills.fulfilled, (state, action) => {
            state.loading = false;
            state.skill = action.payload;
          })
          .addCase(getSkills.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(postSkills.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(postSkills.fulfilled, (state, action) => {
            state.loading = false;
            state.postSkill = action.payload;
          })
          .addCase(postSkills.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
  })
  export default skillsSlice.reducer