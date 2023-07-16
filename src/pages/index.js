import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OMDB Browser</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center align-center text-center relative">
        <h1 className="text-5xl">
          Welcome to OMDB Browser
          <span className="block my-2 text-green-900">
            Search your favourite movies
          </span>
        </h1>
      </main>
    </>
  );
}
