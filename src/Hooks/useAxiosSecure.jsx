import axios from "axios";

const axiossecure= axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})
const useAxiosSecure = () => {
    return axiossecure;
   
};

export default useAxiosSecure;