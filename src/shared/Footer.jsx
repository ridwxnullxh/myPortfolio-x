import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600">Copyright &copy; Your Website 2024</p>
          <div className="space-x-4">
            <NavLink
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Privacy
            </NavLink>
            <span className="text-gray-400">&middot;</span>
            <NavLink
              to="/terms"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Terms
            </NavLink>
            <span className="text-gray-400">&middot;</span>
            <NavLink
              to="/contact"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
