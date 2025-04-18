"use client";

import Image from "next/image";
import { Section } from "./Section";

export const QuiJeSuis = () => {
  return (
    <Section>
      {/* Contenu */}
      <div className="relative z-10 pb-20 flex flex-col h-full">
        {/* Titre "Qui je suis" */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
          Nopheïa
        </h2>

        {/* Section avec l'image et la description */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 lg:px-12 ">
          {/* Photo de la cliente */}
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

          {/* Bloc de texte */}
          <div
            className="p-6 max-w-2xl border border-2 border-brand-dark w-[370px] md:w-[400px] lg:w-[600px] h-[400px] md:h-[450px] lg:h-[300px] py-4 px-6 flex items-center justify-center text-center"
            style={{
              borderRadius: "31% 69% 57% 43% / 73% 30% 70% 27% ",
            }}
          >
            <p className="text-lg text-brand-dark text-justify leading-relaxed text-wrap break-words px-8">
              Nopheïa a été fondé par Ophélie, ostéopathe diplômée d&rsquo;état
              et ambassadrice du GAD® depuis 3 ans. <br />
              <br /> Nopheïa a pour unique objectif d&rsquo;aider toutes les
              femmes a perdre leur cellulite et à redessiner et retonifier leur
              silhouette.{" "}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
