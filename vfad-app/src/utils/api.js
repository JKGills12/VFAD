import axios from "axios";

export default {
    authetication: function (userInfo) {
        console.log(userInfo, "inside api");
        return axios.post("/api/login", userInfo);
    },
    getUsers: () => {
        return axios.get("/users")
    },

    saveHost: (host) => {
        return axios.post('/api/host/signup', host)
    }
}