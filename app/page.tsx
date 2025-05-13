import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/components/main/Projects"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/main/Hero"), {
  ssr: false,
});
const AboutMe = dynamic(() => import("@/components/main/AboutMe"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/main/Skills"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}
