"use client";
import dynamic from "next/dynamic";
const ProjectsContent = dynamic(
  () => import("../../components/sub/Covid19ManagerProjectContent"),
  { ssr: false }
);
const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col min-h-[600px] md:min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-260px] md:top-[-250px] h-[80vh] w-full left-0 object-cover"
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <ProjectsContent />
    </div>
  );
};
export default ProjectsPage;
