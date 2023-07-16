import { Pagination } from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Search() {
    const [searchData, setSearchData] = useState([]);
    const apikey = process.env.MY_API_KEY;

    const [searchTerm, setSearchTerm] = useState();
    const [totalPage, setTotalPage] = useState();

    const handleSearch = async (searchKey, currentPage) => {
        setSearchTerm(searchKey);
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=${apikey}&s=${searchKey}&page=${currentPage}`
        );
        const data = await response.json();

        if (data.Search) {
            setTotalPage(Math.ceil(data.totalResults / 10));
            setSearchData(data.Search);
        }
    };

    if (searchData.length > 0) {
        var movieResult = searchData.map((movie) => (
            <Link
                href={`/search/${movie.imdbID}`}
                key={movie.imdbID}
                style={{ width: "15%" }}
                className="mx-8 my-8 shadow-md border text-center "
            >
                <Image
                    src={`${movie.Poster !== "N/A" ? movie.Poster : ""}`}
                    alt="movie poster"
                    width={300}
                    height={300}
                ></Image>
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
            </Link>
        ));
    }

    return (
        <>
            <Head>
                <title>Search Movies</title>
            </Head>
            <div style={{ margin: "50px auto" }} className="relative min-h-screen">
                <SearchBar onSearch={handleSearch} />
                <div className="flex flex-wrap justify-centercontent-evenly px-8 py-8">
                    {searchData.length > 0 ? movieResult : "No Result"}
                </div>
                {searchData.length > 0 ? (
                    <Pagination
                        totalPage={totalPage}
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
