import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./routes/ErrorPage";
import LoginUser from "./routes/LoginUser";
import RegisterUser from "./routes/RegisterUser";
import { Home } from "./components/Home/Home";
import { FirebaseAuthProvider } from "./providers/firebase.provider";

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
            element: <Home />,
          },
          {
            path: "login",
            element: <LoginUser />,
          },
          {
            path: "register",
            element: <RegisterUser />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </React.StrictMode>
);
