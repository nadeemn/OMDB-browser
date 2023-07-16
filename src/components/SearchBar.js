import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (event) => {
        if(searchInput !== "") {
            onSearch(searchInput, 1);
        }
    };

    return (
        <div className={styles.search}>
            <label htmlFor="movies" className="px-3 py-2 text-sm font-medium">
                Search Movies
            </label>
            <input
                type="text"
                name="movies"
                id="movies"
                className={styles.input}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Movie"
            />
            <button
                type="button"
                className="rounded-md bg-indigo-600 mx-4 px-3.5 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}
