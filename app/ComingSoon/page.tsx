"use client";
import React from "react";

const ComingSoon = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-260px] md:top-[-250px] h-[80vh] w-full left-0 object-cover"
      >
        <source src="/blackhole.mp4" type="video/mp4" />
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
