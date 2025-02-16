import React, { useReducer, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/x-creativity.png";
import { navReducer, initialState } from "../reducers/navReducer";

const Navbar = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "CLOSE_MENU" });
  }, [location]);

  useEffect(() => {
    if (state.isAnimating) {
      const timer = setTimeout(() => {
        dispatch({ type: "FINISH_ANIMATION" });
      }, 300); // Match this with your transition duration

      return () => clearTimeout(timer);
    }
  }, [state.isAnimating]);

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <div className="sticky top-0 z-50 bg-purple-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4 md:py-6">
          <NavLink className="text-blue-600 font-bold text-2xl" to="/">
            <img src={logo} className="h-12 md:h-14 w-auto" alt="logo" />
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={state.isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-10 md:size-11 md:w-12 border-2 border-zinc-300 text-zinc-400 rounded-md p-2 hover:text-white hover:border-white transition-colors duration-300 ${
                  state.isOpen ? "rotate-90" : ""
                } transform transition-transform duration-300`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    state.isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex text-white space-x-3">
            {["/", "/resume", "/projects", "/contact"].map((path) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-yellow-300 font-medium"
                        : "hover:text-yellow-300"
                    }`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-purple-700 transform transition-all duration-300 ease-in-out ${
              state.isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0 pointer-events-none"
            }`}
            style={{
              visibility:
                state.isOpen || state.isAnimating ? "visible" : "hidden",
            }}
          >
            <ul className="flex flex-col space-y-3 text-white p-6 rounded-b-lg shadow-lg">
              {["/", "/resume", "/projects", "/contact"].map((path) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block transition-colors duration-300 ${
                        isActive
                          ? "text-yellow-300 font-medium"
                          : "hover:text-yellow-300"
                      }`
                    }
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
