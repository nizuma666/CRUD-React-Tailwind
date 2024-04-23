import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getExpbyId = createAsyncThunk(
  "experience/getExpbyId",
  async (profilId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/experience/${profilId}`);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        rejectWithValue(errors.response)
      );
    }
  }
);

export const getExp = createAsyncThunk(
  "experience/getExp",
  async (thunkAPI) => {
    try {
      const response = await api.get("/experience");
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        thunkAPI.rejectWithValue(errors.response)
      );
    }
  }
);

export const postExp = createAsyncThunk(
  "experience/postExp",
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/experience", {
        position: data.position,
        company: data.company,
        work_month: data.work_month,
        work_year: data.work_year,
        description: data.description,
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

export const delExp = createAsyncThunk(
    "porto/delExp",
    async (expId, thunkAPI) => {
      try {
        const response = await api.delete(`/experience/${expId}`);
        return response.data.data;
      } catch (errors) {
        console.error(
          "Ada kesalahan saat mengambil data",
          thunkAPI.rejectWithValue(errors.response)
        );
      }
    }
  );

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    loading: null,
    error: null,
    exp: null,
    expId: null,
    postExp: null,
    deleteExp: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExp.fulfilled, (state, action) => {
        state.loading = false;
        state.exp = action.payload;
      })
      .addCase(getExp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getExpbyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpbyId.fulfilled, (state, action) => {
        state.loading = false;
        state.expId = action.payload;
      })
      .addCase(getExpbyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postExp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postExp.fulfilled, (state, action) => {
        state.loading = false;
        state.postExp = action.payload;
      })
      .addCase(postExp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(delExp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delExp.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteExp = action.payload;
      })
      .addCase(delExp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default experienceSlice.reducer;
