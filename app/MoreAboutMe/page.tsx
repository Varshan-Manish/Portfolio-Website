"use client";

import dynamic from "next/dynamic";
const MoreAboutMeContent = dynamic(
  () => import("../../components/sub/MoreAboutMeContent"),
  { ssr: false }
);

const MoreAboutMe = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6 relative overflow-hidden">
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
          <MoreAboutMeContent />
        </section>
      </div>
    </div>
  );
};

export default MoreAboutMe;
