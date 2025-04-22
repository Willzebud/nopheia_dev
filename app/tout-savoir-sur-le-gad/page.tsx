import { Header } from "../_components/Header";
import { CelluliteSection } from "./CelluliteSection";
import { EtudeClinique } from "./EtudeClinique";
import { HeroGad } from "./HeroGad";

export default function GADPage() {
  return (
    <main>
      <Header />
      <HeroGad />
      <CelluliteSection />
      <EtudeClinique />
    </main>
  );
}
