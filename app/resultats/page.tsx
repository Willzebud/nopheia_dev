import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Details } from "./Details";
import { Drainage } from "./Drainage";
import { Introduction } from "./Introduction";

export default function ResultatsPage() {
  return (
    <main>
      <Header />
      <Introduction />
      <Details />
      <Drainage />
      <Footer />
    </main>
  );
}
