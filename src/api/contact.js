import axios from "axios";

export default {
  send(params) {
    return axios.get("https://liamapi.herokuapp.com/api/email", { params });
  },
};
