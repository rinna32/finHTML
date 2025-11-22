import { createBrowserRouter } from "react-router";
import MainLayout from "./Compnents/MainLayout";
import HomePage from "./Compnents/HomePage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            
        ]
    }
])