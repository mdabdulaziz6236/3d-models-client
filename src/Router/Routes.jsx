import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayout";
import AllModels from "../Pages/AllModels/AllModels";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "all-models",
        Component: AllModels,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "update-profile",
        Component: UpdateProfile,
      },
    ],
  },
]);
