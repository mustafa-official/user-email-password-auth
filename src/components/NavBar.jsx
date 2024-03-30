import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-red-600" : "")}
      >
        <h2>Log in</h2>
      </NavLink>
      <NavLink to="/register" className={({ isActive }) => (isActive ? "text-red-600" : "")}>
        <h2>Register</h2>
      </NavLink>
      <NavLink to="/hero-register" className={({ isActive }) => (isActive ? "text-red-600" : "")}>
        <h2>Hero Register</h2>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </div>
        </div>
        <Link>
          <h2 className="text-2xl font-bold">Hello Firebase</h2>
        </Link>
      </div>
      <div className="navbar-end font-bold flex items-center gap-5">
        {navLinks}
      </div>
    </div>
  );
};

export default NavBar;
