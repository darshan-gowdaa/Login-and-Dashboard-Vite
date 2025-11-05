import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Small wrapper exposing helpers and a styled ToastContainer.
export const notify = {
  success: (msg, opts = {}) => toast.success(msg, opts),
  error: (msg, opts = {}) => toast.error(msg, opts),
  info: (msg, opts = {}) => toast.info(msg, opts),
  warn: (msg, opts = {}) => toast.warn(msg, opts),
};

export const AppToast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      draggable
      theme="light"
      toastClassName="glass-toast"
      bodyClassName="glass-body"
    />
  );
};

export default AppToast;
