import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("auth/login", {
        email: data.email,
        password: data.password
      });
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const registerRecruiter = createAsyncThunk(
    "auth/registerRecruiter",
    async(data, {rejectWithValue}) => {
        try{
          const response = await api.post('/recruiters/register',{
                email: data.email,
                password: data.password,
                name: data.name,
                company: data.company,
                position: data.position,
                phone: data.phone
              })
              return response.data
        }catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
)
export const registerWorker = createAsyncThunk(
  "auth/registerWorker",
  async(data, {rejectWithValue}) => {
      try{
        const response = await api.post('/workers/register',{
              email: data.email,
              password: data.password,
              name: data.name,
              phone: data.phone
            })
            return response.data
      }catch (error) {
          return rejectWithValue(error.response.message)
      }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const {data} = action.payload
        localStorage.setItem('token', data.token)
        localStorage.setItem('refreshToken', data.refreshToken)
        state.loading = false;
        state.user = data
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerRecruiter.pending, (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(registerRecruiter.fulfilled, (state, action) => {
        console.log(action);
        const {data} = action.payload
        state.loading = false;
        state.user = data
      })
      .addCase(registerRecruiter.rejected, (state, action)=>{
        state.loading= false
        state.error = action.payload
      })
      .addCase(registerWorker.pending, (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(registerWorker.fulfilled, (state, action) => {
        console.log(action);
        const {data} = action.payload
        state.loading = false;
        state.user = data
      })
      .addCase(registerWorker.rejected, (state, action)=>{
        state.loading= false
        state.error = action.payload
      })
  },
});
export default authSlice.reducer;
