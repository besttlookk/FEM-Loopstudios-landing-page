import type { NextPage } from "next";
import Head from "next/head";
import { HeroSection, SectionOne, SectionTwo } from "../layouts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Loopstudios</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
