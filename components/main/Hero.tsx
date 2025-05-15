"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileDesktopMode, setIsMobileDesktopMode] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      // Determine offset
      let offset;
      if (width < 768) {
        offset = -260;
      } else if (width >= 768 && width <= 1024) {
        offset = -400;
      } else if (width > 1024 && width <= 1100) {
        offset = -750;
        setIsMobileDesktopMode(true); // <-- This is your special case
      } else {
        offset = -250;
        setIsMobileDesktopMode(false);
      }

      if (videoRef.current) {
        videoRef.current.style.top = `${offset}px`;
      }

      // Fallback if screen changes from special case
      if (!(width > 1024 && width <= 1100)) {
        setIsMobileDesktopMode(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
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
      {isMobileDesktopMode && (
        <>
          <br />
          <br />
        </>
      )}
      <HeroContent />
    </div>
  );
};

export default Hero;
