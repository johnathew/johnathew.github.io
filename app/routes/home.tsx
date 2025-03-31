import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import SocialLinks from "~/components/Social";
import { HeroDescription } from "~/components/HeroDescription";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "John's Resume" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col align-middle justify-around overflow-scroll h-dvh w-full">
      <Hero />
      <HeroDescription />
      <SocialLinks />
    </main>)
}
