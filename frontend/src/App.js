import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Layout/Root";
import ErrorPage from "./Components/Error/ErrorPage";
import { lazy } from "react";
import Home from "./Components/Home/Home";
import { onlyUnAuth, tokenLoader, tokenProtectLoader } from "./util/token";
import { logoutAction } from "./Components/Logout/Logout";
import { authAction } from "./Components/Authentication/Auth";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      loader: tokenLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/team",
          Component: lazy(() => import("./Components/Team/Team")),
        },
        {
          path: "/blogs",
          Component: lazy(() => import("./Components/Blogs/Blogs")),
          loader: tokenProtectLoader,
        },
        {
          path: "/aboutUs",
          Component: lazy(() => import("./Components/AboutUs/AboutUs")),
        },
        {
          path: "/services",
          Component: lazy(() => import("./Components/Services/Services")),
          loader: tokenProtectLoader,
        },
        {
          path: "/contact",
          Component: lazy(() => import("./Components/ContactUs/ContactUs")),
        },
        {
          path: "/auth",
          Component: lazy(() => import("./Components/Authentication/Auth")),
          action: authAction,
          loader: onlyUnAuth,
        },
        {
          path: "/logout",
          action: logoutAction,
          loader: tokenProtectLoader,
        },
      ],
    },
  ],
  {
    basename: "/React-Services-Website",
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
