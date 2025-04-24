"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "../_components/Section";
import Image from "next/image";

export const Introduction = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: { perView: 1 },
  });

  const images = [
    {
      avant: "/images/ImgRe/Avant/Avant1.webp",
      apres: "/images/ImgRe/Après/Après1.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant2.webp",
      apres: "/images/ImgRe/Après/Après2.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant3.webp",
      apres: "/images/ImgRe/Après/Après3.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant4.webp",
      apres: "/images/ImgRe/Après/Après4.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant5.webp",
      apres: "/images/ImgRe/Après/Après5.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant6.webp",
      apres: "/images/ImgRe/Après/Après6.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant7.webp",
      apres: "/images/ImgRe/Après/Après7.webp",
    },
    {
      avant: "/images/ImgRe/Avant/Avant8.webp",
      apres: "/images/ImgRe/Après/Après8.webp",
    },
  ];

  const flattenedImages = images.flatMap((img) => [img.avant, img.apres]);

  return (
    <Section className="pt-[100px] md:pt-[100px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Les résultats du massage GAD
          </h1>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Accompagnés d&rsquo;une activité physique modérée ainsi qu&rsquo;une
            alimentation équilibrée (Recommandée par le Programme National
            Nutrition Santé), l&rsquo;étude Clinique démontre bien que le
            Massage GAD est efficace pour la réduction localisée des cellules
            graisseuses et les diminutions de circonférence de la taille des
            cuisses et des hanches par son action drainante.
          </p>
        </div>

        <div className="relative max-w-xl w-full px-4 mx-auto">
          {/* Flèches */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-6xl text-brand-primary px-2"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-6xl text-brand-primary px-2"
          >
            ›
          </button>

          {/* Slides */}
          <div ref={sliderRef} className="keen-slider">
            {flattenedImages.map((src, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center gap-4"
              >
                <Image
                  src={src}
                  alt={`Résultat ${index + 1}`}
                  width={800}
                  height={800}
                  className="rounded-[40px] object-contain w-[400px] h-[500px] md:w-[500px] md:h-[700px] lg:w-[600px] lg:h-[700px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
