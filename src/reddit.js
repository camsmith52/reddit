import axios from "axios"

export default axios.create({
  baseURL: "https://www.reddit.com/r/",
  params: {
    listing:{},
    limit: 25,
    show: "all",
    format: "json",
  },
});