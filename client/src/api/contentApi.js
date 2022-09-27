import axiosInstance from "./axiosInstance";

const base_path = '/content'
const contentApi = {
      listContents(){
            const url = `${base_path}/list-tweets`
            return axiosInstance.get(url)
      },
      createContent(data){
            const url = `${base_path}/create-tweet`
            return axiosInstance.post(url, data)
      },
}

export default contentApi