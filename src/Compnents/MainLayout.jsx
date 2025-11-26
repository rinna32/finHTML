
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


export default function MainLayout() {
    return (
        <div className="min-h-screen">
            <header>
                <Header/> 
            </header>
            <main className="flex-1 pt-16">
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}