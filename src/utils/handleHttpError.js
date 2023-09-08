import axios from "axios";
import { toast } from "react-toastify";
export const handleHttpError = (error) => {
  let errMeg;
  if (axios.isCancel(error)) {
    errMeg = `Request canceled: ${error.message}`;
  } else if (error.response) {
    const { status, data } = error.response;
    if (status >= 500) {
      errMeg = "Server error";
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errMeg = "You are offline. Please check your internet connection.";
    } else {
      errMeg = `No response received. Status code: ${error.request.status}`;
    }
  } else {
    errMeg = `Error: ${error.message}`;
  }
  toast.error(errMeg, { position: "top-center" });
};
