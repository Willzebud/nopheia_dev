"use client";

import Image from "next/image";
import { Section } from "./Section";

export const QuiJeSuis = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[600px] flex flex-col lg:flex-row items-center justify-between">
        {/* Colonne texte */}
        <div className="z-10 w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
            Nopheïa
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 gap-4 w-full max-w-6xl mx-auto">
            <div className="flex-shrink-0 md:mb-0 mx-auto md:mx-0">
              <div
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg"
                style={{
                  borderRadius: "31% 69% 57% 43% / 73% 30% 70% 27% ",
                }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="Photo de profil d'Ophélie l'Ostéopathe"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
              Nopheïa est une marque fondée par Ophélie, ostéopathe diplômée
              d&rsquo;État et ambassadrice de la méthode GAD® depuis 3 ans.{" "}
              <br />
              <br />
              Elle s&rsquo;adresse à toutes les femmes qui souhaitent estomper
              leur cellulite, redessiner leur silhouette et retrouver une peau
              plus lisse et tonique. <br />
              <br />
              Notre expertise est de révéler le potentiel du corps féminin avec
              à une méthode 100% naturelle et bienveillante.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
