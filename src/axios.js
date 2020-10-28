// axios
import axios from "axios";

const domain = "http://apikompag.maxproitsolution.com/";

export default axios.create({
  baseURL: domain,
  // You can add your headers here
  headers: {
    Accept: "Application/json"
  }
});

