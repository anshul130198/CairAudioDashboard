import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall";
import { API_METHODS, API_ROUTES } from "../Constants/constants";

const initialState = {
  organizations: [],
  setting: [],
  loading: false,
  error: null
};

export const getAllData = createAsyncThunk("", async () => {
  try {
    const [response1, response2] = await Promise.all([
      apiCall({
        endpoint: API_ROUTES.GET_ORGANIZATIONS_SETTINGS_LIST,
        method: API_METHODS.GET
      }),
      apiCall({
        endpoint: API_ROUTES.GET_ORGANIZATIONS_LIST,
        method: API_METHODS.GET,
      })
      // axios.get('/api/endpoint1'),
      // axios.get('/api/endpoint2'),
      // axios.get('/api/endpoint3')
    ]);

    return {
      data1: response1,
      data2: response2,
      // data3: response3.data
    };
  } catch (error) {
    console.log(error)
    throw error;
  }
})

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.setting = action.payload.data1;
        state.organizations = action.payload.data2;
        // state.data3 = action.payload.data3;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { } = organizationSlice.actions;

export default organizationSlice.reducer