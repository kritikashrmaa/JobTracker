import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobsSlice/allJobsSlice";


export const store=configureStore({
     reducer: {
        user: userSlice,
        job: jobSlice,
        allJobs:allJobsSlice,
     },
});