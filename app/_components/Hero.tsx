"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto overflow-hidden bg-brand-cream mt-10">
      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-auto lg:h-full space-y-4 mx-10">
        {/* Logo + carte */}
        <div className="flex flex-col items-center lg:mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 mt-5 md:mb-0">
            <div
              className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg"
              style={{
                borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
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

          {/* Carte info */}
          <div
            className="bg-brand-primary w-[300px] lg:w-[400px] h-[200px] mx-2 mt-5 flex items-center justify-center px-6"
            style={{
              borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
            }}
          >
            <h2 className="text-brand-cream text-lg md:text-xl font-bold text-center">
              Découvrez le massage révolutionnaire, drainant et anticellulite :
              Le GAD
            </h2>
          </div>
        </div>
        {/* Vidéo massage */}
        <div
          className="lg:w-[70%] lg:max-w-2xl mx-4 mt-8 overflow-hidden shadow-lg bg-brand-dark h-[250px] md:h-[500px]"
          style={{
            borderRadius: "23% 77% 37% 63% / 40% 44% 56% 60%",
          }}
        >
          <video
            src="/video/massage.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
