import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Compnents/MainLayout";
import HomePage from "./Compnents/HomePage";
import HistoryPage from "./Compnents/HistoryPage";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'history',
                Component: HistoryPage
            },


        ]

    },
    {
        Component: AuthLayout,
        children: [

            {
                path: "/login",
                Component: Login

            },
            {
                path:"/register",
                Component: Register
            }
        ]

    }


])