import axios from "axios";
import { API_URL } from "../config/config";
import { handleHttpError } from "@utils/handleHttpError";

export const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
  });

  const request = async ({ method = "GET", url, data, headers }) => {
    try {
      return await axiosInstance({
        method,
        url,
        data,
        headers,
      })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          handleHttpError(error);
          return error?.response?.data?.detail
            ? { error: error.response.data }
            : {};
        });
    } catch (error) {
      console.log(error);
    }
  };
  return { request };
};
