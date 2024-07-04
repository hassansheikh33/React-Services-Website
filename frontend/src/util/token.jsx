import { redirect, Outlet } from "react-router-dom";

export default function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const duration = getDuration();
  if (duration < 0) {
    return "token expired";
  }
  return token;
}

export const getDuration = () => {
  const expiration = new Date(localStorage.getItem("expiration"));
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
};

export const tokenLoader = async () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenProtectLoader = () => {
  const token = getToken();

  if (token) {
    console.log(window.location.pathname);
    if (window.location.pathname.includes("/logout")) {
      return redirect("/");
    }

    return <Outlet />;
  }

  return redirect("/auth");
};

export const onlyUnAuth = () => {
  const token = getToken();

  if (token) {
    return redirect(window.history.back(-1));
  }
  return <Outlet />;
};
