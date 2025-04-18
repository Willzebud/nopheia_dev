"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

const soins = [
  {
    title: "Soin Signature GAD",
    description: "Le soin pour allier l’utile à l’agréable",
    image: "/images/ImgSoins/1.webp",
    href: "#soin-signature",
  },
  {
    title: "Le GAD Detox +",
    description: "Pour des résultats encore plus immédiats",
    image: "/images/ImgSoins/2.webp",
    href: "#gad-detox",
  },
  {
    title: "Le Belly Gad",
    description:
      "Massage du ventre qui apaise l’esprit, détoxifie et draine l’abdomen",
    image: "/images/ImgSoins/3.webp",
    href: "#belly-gad",
  },
];

export const NosSoins = () => {
  return (
    <Section className="py-20 bg-brand-cream">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
        Nos Soins
      </h2>

      {/* Conteneur centré avec largeur max */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-6">
          {soins.map((soin, index) => (
            <Link
              key={index}
              href={soin.href}
              className="group block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={soin.image}
                  alt={soin.title}
                  width={500}
                  height={380}
                  className="object-cover w-full h-[260px] md:h-[300px] lg:h-[320px]"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-dark group-hover:text-brand-primary transition">
                {soin.title}
              </h3>
              <p className="mt-2 text-sm text-brand-dark">{soin.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
