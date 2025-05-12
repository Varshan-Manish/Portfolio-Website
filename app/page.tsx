import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/main/Projects"), {
  ssr: false,
});
import Skills from "@/components/main/Skills";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
