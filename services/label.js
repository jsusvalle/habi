import { axiosInstance } from "./config";

export const listLabels = (page = 1, per_page = 20) => {
  return axiosInstance.get(`labels?page=${page}&per_page=${per_page}`);
};

export const createLabel = (rate_id, label_format = "pdf") => {
  return axiosInstance.post("labels", { rate_id, label_format });
};
