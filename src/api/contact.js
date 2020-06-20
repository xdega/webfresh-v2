import axios from "axios";

export default {
  send(params) {
    return axios.post("https://liamapi.herokuapp.com/api/email", params);
  },
};
