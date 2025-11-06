import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Small wrapper exposing helpers and a styled ToastContainer.
const defaultConfig = {
  autoClose: 3000,
  hideProgressBar: true,
  closeButton: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  position: "top-center",
};

export const notify = {
  success: (msg, opts = {}) =>
    toast.success(msg, { ...defaultConfig, ...opts }),
  error: (msg, opts = {}) =>
    toast.error(msg, {
      ...defaultConfig,
      ...opts,
      className: "glass-toast glass-toast-error",
      bodyClassName: "glass-body",
    }),
  info: (msg, opts = {}) => toast.info(msg, { ...defaultConfig, ...opts }),
  warn: (msg, opts = {}) => toast.warn(msg, { ...defaultConfig, ...opts }),
};

export const AppToast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      closeButton={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      draggable={true}
      theme="dark"
      limit={1}
      toastClassName="glass-toast"
      bodyClassName="glass-body"
    />
  );
};

export default AppToast;
