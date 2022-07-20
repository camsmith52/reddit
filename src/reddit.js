import axios from "axios"

export default axios.create({
  baseURL: "https://www.reddit.com/r/",
  params: {
    listing:{},
    limit: 5,
    show: "all",
    format: "json",
  },
});