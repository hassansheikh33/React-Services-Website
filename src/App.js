import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Layout/Root";
import ErrorPage from "./Components/Error/ErrorPage";
import { lazy } from "react";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      },
      {
        path: "/aboutUs",
        Component: lazy(() => import("./Components/AboutUs/AboutUs")),
      },
      {
        path: "/services",
        Component: lazy(() => import("./Components/Services/Services")),
      },
      {
        path: "/contact",
        Component: lazy(() => import("./Components/ContactUs/ContactUs")),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
