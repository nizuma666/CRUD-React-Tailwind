import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getWorkers = createAsyncThunk(
  "workers/getWorkers",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get("/workers", {
        params: {
          limit: params.limit,
          page: params.page,
          ...(params.sortBy ? { sortBy: params.sortBy } : {}),
          ...(params.search ? { search: params.search } : {}),
        },
      });
      return response.data.data;
    } catch (err) {
      console.log(
        "Ada error saat mengambil data worker dan skill",
        rejectWithValue(err.response.message)
      );
    }
  }
);
export const getWorkerProfilebyId = createAsyncThunk(
  "workers/getWorkerProfilebyId",
  async (profilId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/workers/${profilId}`);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        rejectWithValue(errors.response)
      );
    }
  }
);

export const getWorkerProfile = createAsyncThunk(
  "workers/getWorkerProfile",
  async (thunkAPI) => {
    try {
      const response = await api.get(`/workers/profile`);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengambil data",
        thunkAPI.rejectWithValue(errors.response)
      );
    }
  }
);

export const putWorkerProfile = createAsyncThunk(
  "workers/putWorkerProfile",
  async (data, thunkAPI) => {
    try {
      const response = await api.put("/workers/profile", {
        name: data.name,
        job_desk: data.job_desk,
        domicile: data.domicile,
        workplace: data.workplace,
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

export const postHire = createAsyncThunk(
  "workers/postHire",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/hire/", data);
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat mengirim data",
        rejectWithValue(errors.response)
      );
    }
  }
);
export const getHireWorker = createAsyncThunk(
  "workers/getHireWorker",
  async (thunkAPI) => {
    try {
      const response = await api.get("/hire/workers");
      return response.data.data;
    } catch (errors) {
      console.error(
        "Ada kesalahan saat menerima data",
        thunkAPI.rejectWithValue(errors.response)
      );
    }
  }
);

const workersSlice = createSlice({
  name: "workers",
  initialState: {
    user: null,
    loading: null,
    error: null,
    profile: null,
    profileId: null,
    putProfile: null,
    hire: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWorkers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getWorkers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getWorkerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWorkerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getWorkerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getWorkerProfilebyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWorkerProfilebyId.fulfilled, (state, action) => {
        state.loading = false;
        state.profileId = action.payload;
      })
      .addCase(getWorkerProfilebyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(putWorkerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putWorkerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.putProfile = action.payload;
      })
      .addCase(putWorkerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postHire.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postHire.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action.payload;
      })
      .addCase(postHire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getHireWorker.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHireWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.hire = action.payload;
      })
      .addCase(getHireWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default workersSlice.reducer;
