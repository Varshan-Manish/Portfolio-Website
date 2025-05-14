"use client";

import dynamic from "next/dynamic";
const ProjectsContent = dynamic(
  () => import("../../components/sub/Covid19ManagerProjectContent"),
  { ssr: false }
);

const ProjectsPage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6 relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-250px] md:top-[-250px] h-[80vh] w-full left-0 object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
          <ProjectsContent />
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
