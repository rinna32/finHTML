import { createBrowserRouter } from "react-router";
import MainLayout from "./Compnents/MainLayout";
import HomePage from "./Compnents/HomePage";
import HistoryPage from "./Compnents/HistoryPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path:'history',
                Component:HistoryPage
            }
            
        ]
    }
])