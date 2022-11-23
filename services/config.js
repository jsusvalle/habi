import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-demo.skydropx.com/v1/",
  headers: {
    Authorization: `Token ${process.env.TOKEN_URL_DEMO_SKYDROPX}`,
  },
});
