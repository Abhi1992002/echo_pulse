import { toast } from "react-hot-toast";

type toastType = {
  message: string;
  position?: "top-center" | "bottom-right";
  type?: "success" | "error";
};

type toastPromiseType = {
  promise: Promise<unknown>;
  loadingMsg: string;
  successMsg: string;
  errorMsg: string;
};

export function toaster({
  message,
  position = "top-center",
  type = "success",
}: toastType) {
  if (type === "success") {
    toast.success(message, {
      duration: 1000,
      position: position,
    });
  }
  if (type === "error") {
    toast.error(message, {
      duration: 1000,
      position: position,
    });
  }
}

export function toasterPromise({
  promise,
  loadingMsg,
  successMsg,
  errorMsg,
}: toastPromiseType) {
  toast.promise(promise, {
    loading: loadingMsg,
    success: successMsg,
    error: errorMsg,
  });
}
