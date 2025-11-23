import { NavLink } from "react-router";
import { FaShoppingCart,  FaBookmark } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm max-w-screen mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a>Home</a></NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a>About</a></NavLink>
                        <NavLink to="/ajka" className={({ isActive }) => isActive ? "text-indigo-700" : ""}>
                        <a><FaShoppingCart size={20}/></a></NavLink>
                        <NavLink to="/favorites" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a><FaBookmark size={18} /></a></NavLink>
                    </ul>
                </div>
                <NavLink to="/">
                    <a className="cursor-pointer text-xl font-bold">FlagShipFaceOff</a>
                </NavLink>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu gap-4 menu-horizontal px-1">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a>Home</a></NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a>About</a></NavLink>
                    <NavLink to="/ajka" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a><FaShoppingCart size={20} /></a></NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? "text-indigo-700" : ""}><a><FaBookmark size={18} /></a></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;