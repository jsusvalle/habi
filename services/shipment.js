import { axiosInstance } from "./config";

export const createAShipment = (data) => {
  return axiosInstance.post("shipments", data);
};
