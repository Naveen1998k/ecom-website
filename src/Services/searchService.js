import axiosInstance from "../Apis/AxiosInstance"
import { API_END_POINTS } from "../Constants/endPoints"

export const searchAPI=async(data)=>{

   return await axiosInstance.post(API_END_POINTS.SEARCH_API,data);

}