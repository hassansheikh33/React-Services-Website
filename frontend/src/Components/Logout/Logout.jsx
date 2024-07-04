import { redirect } from "react-router-dom";
import getToken from "../../util/token";

export const logoutAction = () => {
  const token = getToken();
  if (token) {
    localStorage.removeItem("expiration");
    localStorage.removeItem("token");
    return redirect("/");
  }
  return redirect("/");
};
