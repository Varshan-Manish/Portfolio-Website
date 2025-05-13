import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/components/main/Projects"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/main/Hero"), {
  ssr: false,
});
const Encryption = dynamic(() => import("@/components/main/Encryption"), {
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
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
