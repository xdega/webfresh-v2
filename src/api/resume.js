import axios from "axios";

export default {
  index() {
    return axios.get("https://api.webfresh.dev/jsonapi/node/resume_section");
  },
};
