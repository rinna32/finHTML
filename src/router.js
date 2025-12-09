import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Compnents/MainLayout";
import HomePage from "./Compnents/HomePage";
import HistoryPage from "./Compnents/HistoryPage";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ProductList from "./Compnents/ProductList";
import Error from "./Compnents/Error";
import UserProfile from "./Compnents/UserProfile";
import ProductItem from "./Compnents/ProductItem";
import OutfitsPage from "./Outfits/Outfits";


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
            {
                path: 'catalog',
                Component: ProductList
            },
            {
                path: '/profile',
                Component: UserProfile
            },
            {
                path:'product/:id',
                Component: ProductItem
            },
            {
                path:'outfits',
                Component:OutfitsPage

            },
            {
                path: '*',
                Component: Error
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
                path: "/register",
                Component: Register
            },

        ]

    }


])