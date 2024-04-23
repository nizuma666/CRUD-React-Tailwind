import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getPortofoliobyId = createAsyncThunk(
  "porto/getPortofoliobyId",
  async (profilId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/portfolio/${profilId}`);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        rejectWithValue(errors.response)
      );
    }
  }
);

export const getPortofolio = createAsyncThunk(
  "porto/getPortofolio",
  async (thunkAPI) => {
    try {
      const response = await api.get(`/portfolio`);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        thunkAPI.rejectWithValue(errors.response)
      );
    }
  }
);

export const postPortofolio = createAsyncThunk(
  "porto/postPortofolio",
  async (data, thunkAPI) => {
    try {
      const response = await api.post(`/portfolio`, {
        application_name: data.application_name,
        link_repository: data.link_repository,
        application: data.application,
        image: data.image,
      });
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        thunkAPI.rejectWithValue(errors.response)
      );
    }
  }
);

export const delPortofolio = createAsyncThunk(
    "porto/delPortofolio",
    async (portoId, thunkAPI) => {
      try {
        const response = await api.delete(`/portfolio/${portoId}`);
        return response.data.data;
      } catch (errors) {
        console.error(
          "Ada kesalahan saat mengambil data",
          thunkAPI.rejectWithValue(errors.response)
        );
      }
    }
  );

const portoSlice = createSlice({
  name: "porto",
  initialState: {
    loading: null,
    error: null,
    porto: null,
    portoId: null,
    postPorto: null,
    delPorto: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPortofoliobyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPortofoliobyId.fulfilled, (state, action) => {
        state.loading = false;
        state.portoId = action.payload;
      })
      .addCase(getPortofoliobyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPortofolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.porto = action.payload;
      })
      .addCase(getPortofolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postPortofolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postPortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.postPorto = action.payload;
      })
      .addCase(postPortofolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(delPortofolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delPortofolio.fulfilled, (state, action) => {
        state.loading = false;
        state.delPorto = action.payload;
      })
      .addCase(delPortofolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});
export default portoSlice.reducer;
