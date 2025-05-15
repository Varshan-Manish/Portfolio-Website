"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoOffset = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      let offset;

      if (width >= 768 && width <= 1100) {
        offset = -750; // Mobile desktop mode
      } else if (width < 768) {
        offset = -260; // Real mobile
      } else {
        offset = -250; // Desktop/laptop
      }

      alert(`Width: ${width}, Height: ${height}, Offset: ${offset}`);

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
        style={{ top: "-320px" }} // fallback for SSR
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
