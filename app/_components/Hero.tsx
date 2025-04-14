"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className="relative z-0 w-full h-auto mx-auto overflow-hidden bg-brand-primary" // Ajustement des largeurs
    >
      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-auto lg:h-full space-y-6">
        {/* Logo et Carte d'information */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-32 mb-10 lg:mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 mt-5 md:mb-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/Logo.png"
                alt="Photo de profil d'Ophélie l'Ostéopathe"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Carte d'information */}
          <div className="bg-white p-4 mx-2 mt-5 rounded-lg shadow-lg w-auto  lg:max-w-xl">
            <h2 className="text-lg md:text-xl font-bold text-center md:text-left">
              Ophélie Roche. Ostéopathe
            </h2>
            <p className="text-gray-500 mb-2 text-center md:text-left">
              Santé/beauté
            </p>
            <ul className="text-sm md:text-base text-center md:text-left">
              <li>🎓 Ostéopathe D.O</li>
              <li>🌿 Soin drainant & anti-cellulite</li>
              <li>🌿 Posturologie</li>
              <li>🏋️‍♀️ Préparatrice physique</li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-4 text-center md:text-left">
              Résidence la Malounière, bât G, avenue de Verdun, Aubagne 13400
            </p>
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere"
              className="text-blue-600 underline mt-2 block text-center md:text-left"
            >
              www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere
            </a>
          </div>
        </div>

        {/* Icônes sociales */}
      </div>
    </div>
  );
};
