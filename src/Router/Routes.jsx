import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayout";
import AllModels from "../Pages/AllModels/AllModels";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import ResetPassword from "../Pages/Auth/ResetPassword";
import AddModel from "../Pages/AddModel/AddModel";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import Home from "../Pages/Home/Home";
import PrivetRoutes from "./PrivetRoutes";
import MyModels from "../Pages/MyModels/MyModels";
import MyDownloads from "../Pages/MyDownloads/MyDownloads";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-models"),
      },
      {
        path: "all-models",
        Component: AllModels,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "model-details/:id",
        element: (
          <PrivetRoutes>
            <ModelDetails></ModelDetails>
          </PrivetRoutes>
        ),
      },
      {
        path: "my-models",
        element: (
          <PrivetRoutes>
            <MyModels></MyModels>
          </PrivetRoutes>
        ),
      },
      {
        path: "my-downloads",
        element: (
          <PrivetRoutes>
            <MyDownloads></MyDownloads>
          </PrivetRoutes>
        ),
      },
      {
        path: "update-model/:id",
        element: (
          <PrivetRoutes>
            <UpdateModel></UpdateModel>
          </PrivetRoutes>
        ),
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
        element: (
          <PrivetRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivetRoutes>
        ),
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
      {
        path: "add-model",
        Component: AddModel,
      },
    ],
  },
]);
