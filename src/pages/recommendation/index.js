import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function RecommendationPage() {
    const [recommendMovie, setRecommendMovie] = useState([]);

    const getRecommendation = async () => {
        fetch("/api/recommendation")
            .then((resp) => resp.json())
            .then((data) => {
                setRecommendMovie(data.Search);
            });
    };

    useEffect(() => {
        getRecommendation();

        const interval = setInterval(() => {
            getRecommendation();
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>Daily Recommendation</title>
            </Head>
            <div className="text-center my-12">
                <h1 className="text-4xl">Daily Recommendations</h1>
                <section className="flex flex-wrap justify-centercontent-evenly px-8 py-8">
                    {recommendMovie.map((movie) => (
                        <Link
                            href={`/search/${movie.imdbID}`}
                            key={movie.imdbID}
                            style={{ width: "15%" }}
                            className="mx-8 my-8 shadow-md border text-center"
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
                    ))}
                </section>
            </div>
        </>
    );
}
