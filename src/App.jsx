import React from "react";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Registration from "./pages/Registration/Registration";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/basic",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <story />,
        },
      ],
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  ]);

  return <RouterProvider router={router} />;
};
