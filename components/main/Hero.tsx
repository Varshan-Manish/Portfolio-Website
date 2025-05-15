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

      if (width >= 768 && height < 700) {
        // 🧠 Mobile in desktop mode
        offset = -320;
      } else if (width < 768) {
        // 📱 Real mobile
        offset = -260;
      } else {
        // 🖥️ Desktop/Laptop
        offset = -250;
      }

      if (videoRef.current) {
        videoRef.current.style.top = `${offset}px`;
      }
    };

    updateVideoOffset();
    window.addEventListener("resize", updateVideoOffset);
    return () => window.removeEventListener("resize", updateVideoOffset);
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
        style={{ top: "-320px" }} // 👈 fallback for SSR (mobile desktop default)
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
