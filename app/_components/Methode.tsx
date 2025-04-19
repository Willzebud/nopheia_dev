"use client";

import { Section } from "./Section";

export const Methode = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[600px] flex flex-col lg:flex-row items-center justify-between">
        {/* Colonne texte */}
        <div className="z-10 w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
            Pourquoi cette Méthode ?
          </h2>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Notre méthode minceur utilise un geste exclusif le GAD®, qui
            s’effectue avec la paume de la main. Les résultats obtenus sont ceux
            d’un drainage lymphatique profond combiné à un palper rouler
            profond. Ce massage a une triple action sur la circulation sanguine
            et lymphatique, sur les tissus graisseux et sur la fermeté de la
            peau. Le GAD® c’est à la fois une forte action minceur (-0,5 cm par
            séance) et une action anti-cellulite sur l’aspect peau d’orange.
          </p>
          <div className="w-full flex justify-center mt-5">
            <p className="text-lg md:text-2xl lg:text-xl text-brand-primary hover:text-brand-dark transition cursor-pointer underline">
              Voir l&rsquo;étude Clinique
            </p>
          </div>
        </div>

        {/* Colonne bulles */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 mt-10 md:mt-10 mb-10 lg:mb-0">
          {[
            "Une méthode validée par une étude scientifique.",
            "En 14 séances, c'est en moyenne -8cm Taille | -4cm cuisses | -33% graisse corporelle",
            "Des résultats visibles dès la 1ère séance : perte moyenne de 0,5cm par séance",
            "Des bilans et des prises de mesures toutes les 5 séances",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-brand-cream border border-2 border-brand-dark w-[300px] md:w-[400px] lg:w-[520px] h-auto py-4 px-6 flex items-center justify-center text-center"
              style={{
                borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
              }}
            >
              <p className="text-base sm:text-xl text-brand-primary">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
