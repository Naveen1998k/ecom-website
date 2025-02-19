import axiosInstance from "../Apis/AxiosInstance"
import { API_END_POINTS } from "../Constants/endPoints"

export const AdressViewAPI=async(data)=>{
        return await axiosInstance.post(API_END_POINTS.ADDRESS_VIEW,data)

}
export const AdressAddAPI=async(data)=>{
    return await axiosInstance.post(API_END_POINTS.ADDRESS_ADD,data)

}

export const AdressEditAPI=async(data)=>{
    return await axiosInstance.post(API_END_POINTS.ADDRESS_EDIT,data)

}
export const AdressDeleteAPI=async(data)=>{
    return await axiosInstance.post(API_END_POINTS.ADDRESS_DELETE,data)

}