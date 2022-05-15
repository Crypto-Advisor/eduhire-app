import { configureStore } from '@reduxjs/toolkit';
import jobListReducer from '../components/job-list/JobListSlice'
import jobApplicationReducer from '../components/job-application/JobApplicationSlice';
import applicationListReducer from '../components/application-list/ApplicationListReducer';
import applicationCreatorSlice from '../components/application-creator/ApplicationCreatorSlice';
import loginSlice from '../components/login/LoginSlice';
import navbarSlice from '../components/navbar/NavbarSlice';

export const store = configureStore({
    reducer: {
      joblist: jobListReducer,
      jobapplication: jobApplicationReducer,
      applicationlist: applicationListReducer,
      applicationcreator: applicationCreatorSlice,
      login: loginSlice,
      navbar: navbarSlice
    },
  });