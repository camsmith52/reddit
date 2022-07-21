import axios from "axios"

export default axios.create({
  baseURL: "https://www.reddit.com",
  params: {
    listing:{},
    limit: 25,
    show: "all",
    format: "json",
  },
});