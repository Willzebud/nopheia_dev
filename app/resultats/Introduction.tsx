"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const Introduction = () => {
  return (
    <Section className="pt-[100px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Les résultats du massage GAD
          </h1>

          {/* Image pour mobile */}
          <div className="lg:hidden w-full flex justify-center mb-6">
            <div
              className="bg-brand-dark relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] overflow-hidden shadow-lg"
              style={{
                borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
              }}
            >
              <Image
                src="/images/Logo.png"
                alt="Logo de la marque Nopheïa"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Accompagnés d&rsquo;une activité physique modérée ainsi qu’une
            alimentation équilibrée (Recommandée par le Programme National
            Nutrition Santé), l&rsquo;étude Clinique démontre bien que le
            Massage GAD est efficace pour la réduction localisée des cellules
            graisseuses et les diminutions de circonférence de la taille des
            cuisses et des hanches par son action drainante.
          </p>
        </div>

        {/* Image pour desktop */}
        <div
          className="hidden lg:flex justify-center bg-brand-dark relative shadow-lg max-w-[400px] w-full h-auto p-4 overflow-hidden"
          style={{
            borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
          }}
        >
          <Image
            src="/images/Logo.webp"
            alt="Logo de la marque Nopheïa"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
};
