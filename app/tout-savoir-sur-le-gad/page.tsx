import { AvisPatients } from "../_components/AvisPatients";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { CelluliteSection } from "./CelluliteSection";
import { EffetsPositifs } from "./EffetsPositifs";
import { EnConclusion } from "./EnConclusion";
import { EtudeClinique } from "./EtudeClinique";
import { HeroGad } from "./HeroGad";

export default function GADPage() {
  return (
    <main>
      <Header />
      <HeroGad />
      <CelluliteSection />
      <Spacing />
      <EtudeClinique />
      <Spacing />
      <EffetsPositifs />
      <EnConclusion />
      <AvisPatients />
      <Footer />
    </main>
  );
}
