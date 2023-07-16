import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export const getServerSideProps = async (context) => {
  const queryTerm = context.query.movieId;
  const apiKey = process.env.MY_API_KEY;

  const response = await fetch(
    `http://www.omdbapi.com/?i=${queryTerm}&apikey=${apiKey}`
  );

  const data = await response.json();

  return { props: { movie: data } };
};

export default function MoviePage({ movie }) {
  console.log(movie)
  return (
    <div className="flex w-7/12 justify-center align-start mx-auto my-10 space-x-6 border-2 p-8  shadow-md">
      <Image
        src={`${movie.Poster!=='N/A' ? movie.Poster : ""}`}
        alt="movie poster"
        width={400}
        height={500}
      ></Image>
      <section>
        <h3 className={inter.className + ' my-2'}>Title: {movie.Title}</h3>
        <p className={inter.className + ' my-2'}>Year: {movie.Year}</p>
        <p className={inter.className + ' my-2'}>Genre: {movie.Genre}</p>
        <p className={inter.className + ' my-2'}>Director: {movie.Director}</p>
        <p className={inter.className + ' my-2'}>Release Date: {movie.Released}</p>
        <p className={inter.className + ' my-2'}>Cast: {movie.Actors}</p>
        <p className={inter.className + ' my-2'}>Rating: {movie.imdbRating}</p>
        <p className={inter.className + ' my-2'}>Plot: {movie.Plot}</p>
      </section>
    </div>
  );
}
