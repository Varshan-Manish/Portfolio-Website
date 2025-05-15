"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const ProjectsContent = dynamic(
  () => import("../../components/sub/AssetTokenizerProjectContent"),
  { ssr: false }
);
const ProjectsPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const updateVideoOffset = () => {
      const width = window.innerWidth;
      let offset;
      if (width < 768) {
        offset = -260;
      } else if (width >= 768 && width <= 1024) {
        offset = -400;
      } else if (width > 1024 && width <= 1100) {
        offset = -950;
      } else {
        offset = -250;
      }
      if (videoRef.current) {
        videoRef.current.style.top = `${offset}px`;
      }
    };
    updateVideoOffset();
    window.addEventListener("resize", updateVideoOffset);
    window.addEventListener("orientationchange", updateVideoOffset);
    return () => {
      window.removeEventListener("resize", updateVideoOffset);
      window.removeEventListener("orientationchange", updateVideoOffset);
    };
  }, []);
  return (
    <div className="relative flex flex-col min-h-[600px] md:min-h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute h-[80vh] w-full left-0 object-cover"
        style={{ top: "-320px" }}
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <br></br>
      <br></br>
      <ProjectsContent />
    </div>
  );
};
export default ProjectsPage;
