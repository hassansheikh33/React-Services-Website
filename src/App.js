import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { lazy } from "react";
import Home from "./pages/HomePage";

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
        children: [
          {
            index: true,
            Component: lazy(() => import("./pages/TeamPage")),
          },
          {
            path: "/team/CEO",
            Component: lazy(() => import("./pages/CEO")),
          },
          {
            path: "/team/CoFounder",
            Component: lazy(() => import("./pages/CoFounder")),
          },
          {
            path: "/team/Manager",
            Component: lazy(() => import("./pages/Manager")),
          },
        ],
      },
      {
        path: "/blogs",
        Component: lazy(() => import("./pages/BlogsPage")),
      },
      {
        path: "/aboutUs",
        Component: lazy(() => import("./pages/AboutUsPage")),
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
