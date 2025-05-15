"use client";
import React, { useEffect, useRef } from "react";
const ComingSoon = () => {
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
        offset = -750;
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
    <section className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6 relative overflow-hidden z-[1]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute h-full w-full left-0 z-[10] object-cover"
        style={{ top: "-320px" }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="z-[30]">
        <h1 className="text-4xl font-bold">Coming Soon!</h1>
        <p className="text-xl mt-4">This section is under development.</p>
      </div>
    </section>
  );
};
export default ComingSoon;
