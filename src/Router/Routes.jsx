import { createBrowserRouter } from "react-router";
import MainLayOut from '../Layout/MainLayout'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>
    }
    
])