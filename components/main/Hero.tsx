"use client";
import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-[600px] md:min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-255px] md:top-[-325px] h-full w-full left-0 z-[10] object-cover"
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
