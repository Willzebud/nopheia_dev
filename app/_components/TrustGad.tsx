"use client";

import Image from "next/image";

export const TrustGad = () => {
  return (
    <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] h-[320px] md:h-[500px] lg:h-[500px]">
      {/* Image de fond responsive */}
      <div className="absolute z-0 top-0 left-1/2 -translate-x-1/2 w-[200vw] sm:w-full h-full">
        <Image
          src="/images/FondCartes/Fond2.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h2 className="font-bold text-2xl sm:text-3xl text-brand-cream leading-tight mb-4">
          Plus de 4 000 patients ont fait confiance au GAD®
        </h2>
        <p className="text-base sm:text-xl text-brand-cream max-w-[90%] sm:max-w-3xl">
          Le GAD® est une méthode drainante et anti-cellulite révolutionnaire.
          Un geste très profond qui combine les effets d’un palper rouler et
          d’un drainage profond. 3 fois plus profond et efficace qu’un massage
          classique.
        </p>
      </div>
    </div>
  );
};
