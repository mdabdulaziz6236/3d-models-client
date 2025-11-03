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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "all-models",
        Component: AllModels,
        loader:()=> fetch('http://localhost:3000/models')
      },
      {
        path: "model-details/:id",
        Component: ModelDetails,
        loader:({params})=> fetch(`http://localhost:3000/models/${params.id}`)
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
