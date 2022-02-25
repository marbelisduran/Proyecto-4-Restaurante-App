import { Store } from "react-notifications-component";

export const addNotification = (title, message, type = "success") => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__bounceIn"],
    animationOut: ["animate__animated", "animate__bounceOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
