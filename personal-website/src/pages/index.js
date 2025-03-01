import Head from "next/head";
import { useState } from "react";
import NavBar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aditya Ravi</title>
      </Head>
      <main className="min-h-screen bg-black text-white">
        <NavBar />
        <About />
      </main>
    </div>
  );
}
