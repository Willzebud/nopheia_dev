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
            Bonjour,&nbsp;je suis Ophélie ROCHE 😊 <br /> <br /> En tant
            qu&rsquo;ostéopathe, je considère le corps de mes patient(e)s dans
            son ensemble, je suis dans la recherche perpétuelle de la cause plus
            que de simplement masquer les symptômes. Chaque séance est
            personnalisée, basée sur une écoute attentive avec une approche
            basée sur la mémoire cellulaire et pas seulement sur la structure
            osseuse. Au fur et à mesure de mes prise en charge, mes patientes
            ont souhaité aller plus loin dans leur recherche du bien-être et
            m’ont demandé de les accompagner à se sentir mieux dans leur tête et
            dans le corps. Au travers de mes diplômes et spécialités, j’avais
            besoin de quelque chose dont les résultats sont prouvés… me voilà à
            pratiquer le GAD. C&rsquo;est le début d’une aventure qui commence
            où se mêle pratique manuelle et évolution physique.
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
