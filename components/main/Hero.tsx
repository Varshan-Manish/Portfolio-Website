"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileDesktopMode, setIsMobileDesktopMode] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let offset: number;
      let mobileDesktopMode = false;

      if (isMobile && width >= 768) {
        // Mobile device but desktop-sized viewport (landscape or tablet)
        offset = -750;
        mobileDesktopMode = true;
      } else if (width < 768) {
        offset = -260;
      } else if (width >= 768 && width <= 1024) {
        offset = -400;
      } else {
        offset = -250;
      }
      alert(`Width: ${width} Offset: ${offset} Height: ${window.innerHeight}`);
      if (videoRef.current) {
        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.style.top = `${offset}px`;
          }
        });
      }

      setIsMobileDesktopMode(mobileDesktopMode);
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
          <br />
          <br />
          <br />
          <br />
        </>
      )}

      <HeroContent />
    </div>
  );
};

export default Hero;
