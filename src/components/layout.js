import { Inter } from "next/font/google";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={inter.className + " h-full"}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
