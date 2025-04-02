import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import SocialLinks from "~/components/Social";
import { HeroDescription } from "~/components/HeroDescription";
import Carousel from "~/components/Carousel";
import { Footer } from "~/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "John's Resume" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return (
    <main className="flex bg-custom-gradient relative flex-col align-middle justify-center items-center h-dvh w-full sm:overflow-x-scroll ">
      <Hero />
      <HeroDescription />
      <Carousel />
      <SocialLinks />
      <Footer />
    </main>)
}
