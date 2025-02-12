import axios from 'axios'
import { API_CONFIG } from '../Constants/apis';
const axiosInstance=axios.create(
    {
        baseUrl: API_CONFIG.BASE_URL,
        timeout:API_CONFIG.TIME_OUT //Specify In Millesconds
    }
)

axiosInstance.interceptors.request.use((req)=>{
    const token=localStorage.getItem(API_CONFIG.TOKEN);
    if(token){
        req.headers[API_CONFIG.AUTHORIZATION]=`${API_CONFIG.BEARER} ${token}`;
    }
    return  req;
})

axiosInstance.interceptors.response.use((res)=>
    {
    return res;
    },
    error=>{
        return Promise.reject(error);
    }

)

export default axiosInstance;