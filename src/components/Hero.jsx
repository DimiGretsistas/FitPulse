import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>Welcome to</p>
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FitPulse
        </h1>
      </div>

      <p className="text-sm md:text-base font-light break-words">
        Motivated to exercise but unsure where to start? In just three clicks,
        generate a free, personalized workout plan for your day—quick, easy, and
        hassle-free!
      </p>
      <button className="px-8 py-4 border rounded-md ">
        <p>Generate Plan now!</p>
      </button>
    </div>
  );
}
