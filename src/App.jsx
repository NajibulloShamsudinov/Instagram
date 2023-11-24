import React from "react"; 
import Login from "./pages/Login/Login"; 
import Home from "./pages/Home/Home"; 
import Explore from "./pages/Explore/Explore"; 
import Reels from "./pages/Reels/Reels"; 
import Message from "./pages/Message/Message"; 
import Notifications from "./pages/Notifications/Notifications"; 
import Profile from "./pages/Profile/Profile"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Layout } from "./Layout/Layout"; 
import Registration from "./pages/Registration/Registration"; 
 
export const App = () => { 
  const router = createBrowserRouter([ 
    { 
      path: "/", 
      element: <Login />, 
    }, 
    { 
      path: "/basic", 
      element: <Layout />, 
      children: [ 
        { 
          index: true, 
          element: <Home />, 
        }, 
        { 
          path: "explore", 
          element: <Explore />, 
        }, 
        { 
          path: "reels", 
          element: <Reels />, 
        }, 
        { 
          path: "message/*", 
          element: <Message />, 
        }, 
        { 
          path: "notifications", 
          element: <Notifications />, 
        }, 
        { 
          path: "profile", 
          element: <Profile />, 
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
