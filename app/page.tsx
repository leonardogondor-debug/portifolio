import Header from "./components/header/Header";
import Sobre from "./components/sobre/Sobre";
import Projetos from "./components/projetos/Projetos";
import Habilidades from "./components/habilidades/Habilidades";
import Contato from "./components/contato/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
    </>
  );
}