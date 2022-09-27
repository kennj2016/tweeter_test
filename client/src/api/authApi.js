import axiosInstance from "./axiosInstance";

const base_path = '/auth'
const authApi = {
      login(data){
            const url = `${base_path}/login`
            return axiosInstance.post(url, data)
      }
}

export default authApi