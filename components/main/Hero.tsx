"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileDesktopMode, setIsMobileDesktopMode] = useState(false);

  // Detect if user agent is Android or iOS mobile device
  const isMobileOS = () => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || navigator.vendor || "";
    return /android/i.test(ua) || /iphone|ipad|ipod/i.test(ua);
  };

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let offset = -250; // default offset
      let mobileDesktopMode = false;

      if (isMobileOS() && width >= 768) {
        // Mobile device in desktop/tablet width mode
        offset = -750;
        mobileDesktopMode = true;
      } else if (isMobileOS() && width < 768) {
        offset = -260;
      } else if (!isMobileOS() && width >= 768 && width <= 1024) {
        offset = -400;
      } else {
        offset = -250;
      }

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
