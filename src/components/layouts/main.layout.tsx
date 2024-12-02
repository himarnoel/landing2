import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    return <>
        <Header />

        <main className='w-full flex grow flex-col items-center justify-start min-h-screen'>
            <Outlet />
        </main>

        <Footer />
    </>;
}
