import { toast } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
