import Head from "next/head";
import { Sen, Lilita_One } from "next/font/google";
import Hero from "@/components/Hero";
import WestieMarquee from "@/components/WestieMarquee";
import Why from "@/components/Why";
import Token from "@/components/Token";
import Buy from "@/components/Buy";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>$WESTIE - Every Bull Run Has a Dog</title>
      </Head>
      <main className={`${sen.variable} ${lilita.variable} font-sen overflow-hidden`}>
        <Hero />
        <WestieMarquee />
        <Why />
        <WestieMarquee />
        <Token />
        <WestieMarquee />
        <Buy />
      </main>
    </>
  );
}
