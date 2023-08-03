import { toast } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 500, // Set the duration to 500 milliseconds
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 500, // Set the duration to 500 milliseconds
  });
};
