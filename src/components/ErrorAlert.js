import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorAlert = ({ errorMsg }) => {
  useEffect(() => {
    toast.error(errorMsg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, [errorMsg]);

  return <ToastContainer />;
};

export default ErrorAlert;
