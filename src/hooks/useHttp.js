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
          console.log(res);
          if (res.statusText !== "OK") {
            return {
              error:
                "Ma'lumotlarni olib kelishda xatolik yuz berdi, iltimos sahifani yangilang",
            };
          }
          return res.data;
        })
        .catch((error) => {
          handleHttpError(error);
          return;
        });
    } catch (error) {
      console.log(error);
    }
  };
  return { request };
};
