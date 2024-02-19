import { configureStore } from '@reduxjs/toolkit';
import Slice1 from './slices/Slice1';

const store = configureStore({
  // Create the reducer and add it here
  reducer: {
    data: Slice1,
  },
});
export default store;
