import axios from "axios";
const KEY = "AIzaSyDnloe4CvbGnrJqJVlBCnKtDELpyuJ25UU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
