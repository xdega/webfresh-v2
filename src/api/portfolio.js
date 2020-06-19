import axios from "axios";

export default {
  index() {
    return axios.get(
      "https://api.webfresh.dev/jsonapi/node/portfolio_item?include=field_large_screenshot"
    );
  },
};
