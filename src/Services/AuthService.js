import axiosInstance from "../Apis/AxiosInstance"
import { API_END_POINTS } from '../Constants/endPoints';

export const SingupApi=async (data)=>{

    return await axiosInstance.post(API_END_POINTS.SINGUP,data);
}

export const SinginAPi=async (data)=>{

    return await axiosInstance.post(API_END_POINTS.SINGIN,data);
}