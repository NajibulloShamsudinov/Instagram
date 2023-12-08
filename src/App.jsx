import React from "react"; 
import Login from "./pages/Login/Login"; 
import Home from "./pages/Home/Home"; 
import Explore from "./pages/Explore/Explore"; 
import Reels from "./pages/Reels/Reels"; 
import Message from "./pages/Message/Message"; 
// import Natification from "./pages/natification/Natification";
import Profile from "./pages/Profile/Profile"; 
import Settings from "./pages/Settings/Settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Layout } from "./Layout/Layout"; 
import Registration from "./pages/Registration/Registration"; 
import UserProfile from "./pages/User/userProfile";
 
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
        // { 
        //   path: "notifications", 
        //   element: <Notifications />, 
        // }, 
        { 
          path: "profile", 
          element: <Profile />, 
        }, 

        {
          path:"user/:id",
          element:<UserProfile/>
        },

        { 
          path: "profile/account/settings",  
          element: <Settings />, 
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
