import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import SocialLinks from "~/components/Social";
import { HeroDescription } from "~/components/HeroDescription";
import Carousel from "~/components/Carousel";
import { Footer } from "~/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "John Kornegay - Web Developer Portfolio" },
    { name: "description", content: "Explore John Kornegay's portfolio showcasing web development projects, skills, and experience in React and TailwindCSS." },
    { name: "keywords", content: "John Kornegay, Portfolio, Web Developer, React, TailwindCSS, Projects" },
  ];
}

export default function Home() {
  return (
    <main className="flex bg-custom-gradient overflow-x-hidden bg-cover bg-fixed relative flex-col align-middle justify-around items-center min-h-screen w-full">
      <Hero />
      <HeroDescription />
      <Carousel />
      <SocialLinks />
      <Footer />
    </main>)
}
