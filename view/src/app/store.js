import { configureStore } from '@reduxjs/toolkit';
import jobListReducer from '../components/job-list/JobListSlice'

export const store = configureStore({
    reducer: {
      joblist: jobListReducer
    },
  });