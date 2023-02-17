import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./routes/ErrorPage";
import Login from "./routes/Login";
import RegisterUser, { action as registerAction } from "./routes/RegisterUser";
import { LandingPage } from "./components/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <RegisterUser />,
            action: registerAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
