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
    <main className="flex bg-custom-gradient bg-cover bg-fixed relative flex-col align-middle justify-around items-center min-h-screen w-full">
      <Hero />
      <HeroDescription />
      <Carousel />
      <SocialLinks />
      <Footer />
    </main>)
}
