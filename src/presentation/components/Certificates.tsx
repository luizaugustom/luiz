import React from "react";

export function Certificates() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in mt-8">
      <h2 className="text-2xl font-bold text-title-light mb-4 text-center">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-[320px] h-[220px] bg-gradient-to-br from-[#bda4e6]/40 to-[#232136]/80 rounded-2xl flex items-center justify-center animate-pulse shadow-lg border-2 border-[#bda4e6]/30"
          >
            <span className="text-xl text-title-light font-bold animate-pulse">Loading...</span>
          </div>
        ))}
      </div>
    </section>
  );
}
