import React from "react";
import { Link } from "react-router-dom";

import Search  from "./Search";

const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="flex flex-wrap items-center justify-center p-5 pb-0 border-b border-gray-200 sm:justify-between dark:border-gray-700 ">
    <div className="flex items-center justify-between w-screen py-2 space-x-5 select-none">
      <Link to="/">
        <p className="px-2 py-1 text-2xl font-bold text-white bg-blue-500 rounded dark:bg-gray-50 dark:text-gray-900">
          Brnyr 🔎
        </p>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="px-2 py-1 text-xl bg-white border rounded-full dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg"
      >
        {darkTheme ? "💡 Light" : "🌙 Dark"}
      </button>
    </div>
    <Search />
  </div>
);

export default Navbar;