import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Header />
        <main className="page-area">
            <Outlet />
        </main>
        </>
    )
}

export default Layout 