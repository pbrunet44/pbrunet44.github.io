import { NavLink, Outlet, useLocation } from "react-router";

export default function NavBar() {
    const location = useLocation();
    return (
        <>
                <nav className="flex gap-5 justify-center p-4 text-white bg-gray-900/90 text-white">
                    <NavLink to={"/"} className={`hover:underline ${location.pathname === "/" && "font-bold"}`}>
                        Home
                    </NavLink>
                    <NavLink to={"/projects"} className={`hover:underline ${location.pathname === "/projects" && "font-bold"}`}>
                        Projects
                    </NavLink>
                </nav>   
            <Outlet />
        </>
    );
};