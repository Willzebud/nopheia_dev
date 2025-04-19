"use client";

import { Section } from "./Section";

export const Lieu = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[200px]">
        <h2 className="text-2xl md:text-3xl py-4 lg:text-4xl text-center text-brand-primary mb-4 lg:mb-12">
          Où nous trouver
        </h2>
        {/* Colonne texte */}

        <div className="flex flex-col lg:flex-row items-center justify-center justify-between px-8">
          <div
            className="bg-brand-cream border border-2 border-brand-primary w-[300px] md:w-[400px] lg:w-[350px] h-auto py-4 px-6 flex items-center justify-center text-center mb-6"
            style={{
              borderRadius: "17% 83% 9% 91% / 91% 12% 88% 9%",
            }}
          >
            <p className="text-base text-justify sm:text-xl text-brand-dark mb-4 text-center w-[90%]">
              Cabinet Carnoux
              <br />
              158 Avenue du Mail
              <br />
              13470 Carnoux-en-Provence
            </p>
          </div>

          <div
            className="bg-brand-cream border border-2 border-brand-primary w-[300px] md:w-[400px] lg:w-[350px] h-auto py-4 px-6 flex items-center justify-center text-center mb-6"
            style={{
              borderRadius: "6% 94% 6% 94% / 86% 12% 88% 14% ",
            }}
          >
            <p className="text-base text-justify sm:text-xl text-brand-dark mb-4 text-center w-[90%]">
              Cabinet Aubagne
              <br />
              Résidence la Malounière
              <br />
              13400 Aubagne
            </p>
          </div>

          <div
            className="bg-brand-cream border border-2 border-brand-primary w-[300px] md:w-[400px] lg:w-[350px] h-auto py-4 px-6 flex items-center justify-center text-center"
            style={{
              borderRadius: "94% 6% 94% 6% / 5% 92% 8% 95% ",
            }}
          >
            <p className="text-base text-justify sm:text-xl text-brand-dark mb-4 text-center w-[90%]">
              Cabinet Mimet
              <br />
              877 Route de Puits Gérard
              <br />
              13105 Mimet
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
