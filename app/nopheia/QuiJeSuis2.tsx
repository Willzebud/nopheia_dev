"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const QuiJeSuis2 = () => {
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Qui je suis
          </h2>

          {/* Image pour mobile */}
          <div className="lg:hidden w-full flex justify-center mb-6">
            <div
              className="relative bg-brand-dark overflow-hidden shadow-lg w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
              style={{
                borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
              }}
            >
              <Image
                src="/images/Sis.webp"
                alt="Photo d'Ophélie Montalto"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Bonjour,&nbsp;je suis Ophélie Montalto...
          </p>
        </div>

        {/* Image pour desktop */}
        <div
          className="hidden lg:flex justify-center bg-brand-dark relative shadow-lg w-[400px] h-[400px] overflow-hidden"
          style={{
            borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
          }}
        >
          <Image
            src="/images/Sis.webp"
            alt="Photo d'Ophélie Montalto"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};
