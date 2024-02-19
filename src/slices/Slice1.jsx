import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  password: '',
  AuthorisationError: 'No Error',
  PlanetSearch: '',
  PlanetData: [],
  Loading: false,
};

const Slice1 = createSlice({
  name: 'Star_wars',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthorisationError: (state, action) => {
      state.AuthorisationError = action.payload;
    },
    setPlanetSearch: (state, action) => {
      state.PlanetSearch = action.payload;
    },
    setPlanetData: (state, action) => {
      state.PlanetData = action.payload;
    },
    setLoading: (state, action) => {
      state.Loading = action.payload;
    },
  },
});
export const {
  setUserName,
  setPassword,
  setAuthorisationError,
  setPlanetSearch,
  setPlanetData,
  setmouseOver,
  setLoading,
} = Slice1.actions;
export default Slice1.reducer;
