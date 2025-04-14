"use client";

import { Section } from "./Section";
import { X } from "lucide-react";
import { InstaIcon } from "./icons/Insta";
import { useState } from "react";
//import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 bg-brand-cream">
      <Section className="flex items-center justify-between">
        {/* Cercle à gauche */}
        <div className=" relative flex items-center space-x-2">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-brand-primary bg-transparent cursor-pointer transition hover:border-brand-dark hover:bg-brand-dark" />
          <div className="h-auto w-auto">
            <p className="text-brand-primary">NOPHEÏA</p>
          </div>
        </div>
        {/* Boutons Tarifs et Rendez-vous */}
        <div className=" relative flex items-center space-x-2">
          <div className="group w-16 h-16 md:w-16 md:h-4 lg:w-12 lg:h-12 rounded-full bg-transparent flex items-center justify-center cursor-pointer transition">
            <InstaIcon
              size={30}
              className="text-brand-primary transition group-hover:text-brand-dark"
            />
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
            <p className="text-brand-primary group-hover:text-brand-dark">
              Nos méthodes
            </p>
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
            <p className="text-brand-primary group-hover:text-brand-dark">
              Mes soins
            </p>
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
            <p className="text-brand-primary group-hover:text-brand-dark">
              Tarifs
            </p>
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
            <p className="text-brand-primary group-hover:text-brand-dark">
              Blog
            </p>
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
            <p className="text-brand-primary group-hover:text-brand-dark">
              Rendez-vous
            </p>
          </div>
          {/* Cercle avec trois points */}
          <div className="relative flex items-center ipadPro:hidden">
            <div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-brand-primary bg-brand-cream cursor-pointer transition hover:border-brand-dark hover:bg-brand-dark flex items-center justify-center group"
              onClick={toggleMenu}
            >
              <div className="space-y-[2px] flex flex-col items-center group-hover:bg-brand-dark">
                <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:bg-brand-cream"></span>
                <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:bg-brand-cream"></span>
                <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:bg-brand-cream"></span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Barre horizontale animée (Mobile) */}
      <motion.div
        initial={{ top: "4rem", opacity: 0 }}
        animate={{
          top: isMenuOpen ? "30rem" : "4rem",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="block h-[1px] bg-transparent z-50 mx-auto"
        style={{
          maxWidth: "95%", // Assure que la barre a la même largeur que le Hero
          left: 0, // Centrage horizontal
          right: 0, // Centrage horizontal
          position: "absolute", // Permet le déplacement vertical (top)
        }}
      />

      {/* Menu latéral avec animation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 w-full h-[32rem] bg-brand-cream shadow-lg z-40 ipadPro:hidden`}
      >
        {/* Bouton pour fermer */}
        <div className="flex justify-end p-4">
          <button
            className="text-brand-primary text-2xl cursor-pointer transition hover:text-brand-dark"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>

        {/* Contenu du menu */}
        <div className="p-4 space-y-6 ml-4">
          <div>
            <h2 className="text-lg font-bold text-brand-primary cursor-pointer transition hover:text-brand-dark">
              Nos méthodes
            </h2>
            <ul className="space-y-2">
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Qu&apos;est ce que le GAD® ?
              </li>
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Qui je suis
              </li>
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Les résultats
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-primary cursor-pointer transition hover:text-brand-dark">
              Mes soins
            </h2>
            <ul className="space-y-2">
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Soin Signature GAD®
              </li>
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Le GAD® Detox +
              </li>
              <li className="cursor-pointer text-brand-primary transition hover:text-brand-dark">
                Le Belly GAD®
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-primary cursor-pointer transition hover:text-brand-dark">
              Tarifs
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-primary cursor-pointer transition hover:text-brand-dark">
              Blog
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-primary cursor-pointer transition hover:text-brand-dark">
              Rendez-vous
            </h2>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
