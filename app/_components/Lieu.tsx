"use client";

import { Section } from "./Section";

export const Lieu = () => {
  return (
    <Section>
      <div className="">
        <h2 className="text-2xl md:text-3xl py-4 lg:text-4xl text-center text-brand-primary mb-4 lg:mb-12">
          Où nous trouver
        </h2>
        {/* Colonne texte */}

        <div className="flex lg:flex-row items-center justify-center justify-between px-8">
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Cabinet Carnoux
            <br />
            158 Avenue du Mail
            <br />
            13470 Carnoux-en-Provence
          </p>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Cabinet Aubagne
            <br />
            Résidence la Malounière
            <br />
            13400 Aubagne
          </p>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Cabinet Mimet
            <br />
            877 Route de Puits Gérard
            <br />
            13105 Mimet
          </p>
        </div>
      </div>
    </Section>
  );
};
