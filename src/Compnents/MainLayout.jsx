
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Header from "./Header";

export default function MainLayout() {
  

    return (
        <div className="min-h-screen">
            <header>
                <Header/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}