import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="flex space-x-4 p-8 border-2 shadow-lg">
      <Link
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        href="/"
      >
        OMDB
      </Link>
      <Link
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        href="/search"
      >
        Search
      </Link>
      <Link
        className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        href="/recommendation"
      >
        Recommendation
      </Link>
    </nav>
  );
};
