import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Profile } from "./Components/Profile";
import { Home } from "./Components/Home";

const AppLayout = () => {
  return (
    <>
     <Outlet/>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Register/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "/Home",
        element: <Home/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);