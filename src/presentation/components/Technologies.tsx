"use client";

import Image from "next/image";
import { Technology } from "../../domain/entities/User";
import { useRef } from "react";

interface Props {
  technologies: Technology[];
}

export function Technologies({ technologies }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-title-light mb-4 text-center">Specialization in Technologies</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="technologies-scroll flex overflow-x-auto gap-6 py-2 px-1"
          style={{scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          onWheel={e => {
            const el = scrollRef.current;
            if (!el) return;
            // Removendo preventDefault para evitar erro de passive event listener
            const canScrollLeft = el.scrollLeft > 0;
            const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth;
            if ((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
              el.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
          }}
        >
          {technologies.map((tech) => (
            <button
              key={tech.name}
              className="flex flex-col items-center justify-center min-w-[140px] max-w-[180px] bg-[#232136]/70 rounded-xl shadow-lg px-4 py-3 mx-2 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] pulse-soft"
              style={{scrollSnapAlign: 'center'}}
            >
              {tech.name === "N8N" ? (
                <img src={tech.icon} alt={tech.name} width={140} height={140} className="rounded mb-8 mt-6" />
              ) : tech.icon.startsWith('http') ? (
                <img src={tech.icon} alt={tech.name} width={48} height={48} className="rounded mb-2" />
              ) : (
                <Image src={tech.icon} alt={tech.name} width={48} height={48} className="mb-2" />
              )}
              <span className="block w-full text-base text-gray-200 font-semibold text-center whitespace-normal break-words">
                {tech.name}
              </span>
            </button>
          ))}
        </div>
        {/* Botão animado para scroll à esquerda */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#7c3aed]/70 text-white rounded-full p-2 shadow-lg hover:bg-[#5b23b6]/80 transition-colors z-10 hidden sm:block"
          onClick={() => scrollRef.current && scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })}
        >
          {'<'}
        </button>
        {/* Botão animado para scroll à direita */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#7c3aed]/70 text-white rounded-full p-2 shadow-lg hover:bg-[#5b23b6]/80 transition-colors z-10 hidden sm:block"
          onClick={() => scrollRef.current && scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })}
        >
          {'>'}
        </button>
      </div>
    </section>
  );
}
