import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getProfileRecruiter = createAsyncThunk(
  "recruiter/getProfileRecruiter",
  async (thunkAPI) => {
    try {
      const response = await api.get("/recruiters/profile");
      return response.data.data;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editRecruiter = createAsyncThunk(
    "recruiter/editRecruiter",
    async (data, thunkAPI) => {
      try {
        const response = await api.put("/recruiters/profile",{
            company: data.company,
            position: data.position,
            city: data.city,
            description: data.description,
            phone: data.phone,
            instagram: data.instagram,
            linkedin: data.linkedin,
            photo: data.photo, 
        });
        return response.data.data;
      } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  export const getHireRecruiter = createAsyncThunk(
    "workers/getHireWorker",
    async (thunkAPI) => {
      try {
        const response = await api.get("/hire/recruiters");
        return response.data.data;
      } catch (errors) {
        console.error(
          "Ada kesalahan saat menerima data",
          thunkAPI.rejectWithValue(errors.response)
        );
      }
    }
  );

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    loading: null,
    error: null,
    user: null,
    hire: null,
    edit: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileRecruiter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfileRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editRecruiter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.edit = action.payload;
      })
      .addCase(editRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getHireRecruiter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHireRecruiter.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action.payload;
      })
      .addCase(getHireRecruiter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});
export default recruiterSlice.reducer;
