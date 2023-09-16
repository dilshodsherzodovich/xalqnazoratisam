import axios from "axios";
import { toast } from "react-toastify";
export const handleHttpError = (error) => {
  console.log(error);
  let errMeg;
  if (axios.isCancel(error)) {
    errMeg = `Request canceled: ${error.message}`;
  } else if (error.response) {
    const { status } = error.response;
    if (status >= 500) {
      errMeg = "Server error";
    } else if (error.response.data.detail) {
      errMeg = error.response.data.detail;
    } else if (status === 403) {
      errMeg = "Taqiqlangan";
    } else {
      errMeg = `Xatoli yuz berdi: ${error.status}`;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errMeg =
        "Internetga ulanmagansiz, iltimos internetga ulanib qaytib harakat qilib ko'ring";
    } else {
      errMeg = `No response received. Status code: ${error.request.status}`;
    }
  } else {
    errMeg = `Error: ${error.message}`;
  }
  toast.error(errMeg, { position: "top-center", theme: "colored" });
};
