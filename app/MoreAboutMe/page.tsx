"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const MoreAboutMeContent = dynamic(
  () => import("../../components/sub/MoreAboutMeContent"),
  { ssr: false }
);
const MoreAboutMe = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const updateVideoOffset = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      let offset;
      if (width >= 768 && width <= 1100) {
        offset = -750;
      } else if (width < 768) {
        offset = -260;
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
      <MoreAboutMeContent />
    </div>
  );
};
export default MoreAboutMe;
