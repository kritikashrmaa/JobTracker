import customFetch, { checkForUnauthResp } from "../../utils/axios";
import { showLoading,hideLoading,getAllJobs } from "../allJobsSlice/allJobsSlice";
import { clearValues } from "./jobSlice";



const authHeader=(thunkAPI)=>{
    return {
        headers:{
          authorization : `Bearer ${thunkAPI.getState().user.user.token}`
        }
      } 
}

export const createJobThunk=async (job,thunkAPI)=>{
    try{
     const resp=await customFetch.post('/jobs',job,authHeader(thunkAPI))
     thunkAPI.dispatch(clearValues());
     return resp.data;

    } catch(err){

          return checkForUnauthResp(err,thunkAPI);
    }
};
export const deleteJobThunk=
    async (jobId, thunkAPI) => {
      thunkAPI.dispatch(showLoading());
      try {
        const resp = await customFetch.delete(`/jobs/${jobId}`, {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        });
        thunkAPI.dispatch(getAllJobs());
        return resp.data.msg;
      } catch (error) {
        thunkAPI.dispatch(hideLoading());
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
    }
  
export const editJobThunk=async({jobId,job},thunkAPI)=>{
    try{
      const resp=await customFetch.patch(`/jobs/${jobId}`,job,{
           headers: {
              authorization : `Bearer ${thunkAPI.getState().user.user.token}`,
           },
      });

      thunkAPI.dispatch(clearValues());
      return resp.data

    }catch(err){
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
};

