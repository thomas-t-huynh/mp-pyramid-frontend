import axios from "axios";

const token = localStorage.getItem("pyramid-token");

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;