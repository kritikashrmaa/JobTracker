import customFetch, { checkForUnauthResp } from '../../utils/axios';
import { logoutUser } from './userSlice';
import { clearAllJobsState } from '../allJobsSlice/allJobsSlice';
import { clearValues } from '../job/jobSlice';
import { toast } from 'react-toastify';

export const registerUserThunk=async(url,user,thunkAPI)=>{
    try{
        const resp=await customFetch.post(url,user)
        return resp.data;

    } catch(err){
        
       return checkForUnauthResp(err,thunkAPI);
        
    }
};

export const clearStoreThunk=async(message,thunkAPI)=>{
    try{

        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllJobsState());
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();

    } catch(err){

        return Promise.reject();

    }
}

export const loginUserThunk=async(url,user,thunkAPI)=>{
    try{
        const res=await customFetch.post('/auth/login',user);
        return res.data;

    }catch(err){
        return toast.error('here')
        return checkForUnauthResp(err,thunkAPI);
    }
}

export const updateUserThunk=async(url,user,thunkAPI)=>{
    try{
        const res=await customFetch.patch('/auth/updateUser',user,{
            headers:{
               authorization:`Bearer ${thunkAPI.getState().user.user.token}`
              
            }
        });
        return res.data;

    }catch(err){
        return checkForUnauthResp(err,thunkAPI);
    }
}