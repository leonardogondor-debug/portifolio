import ProjetoCard from "./ProjetoCard";
import { projetos } from "../../data/projetos";
import styles from "./projetos.module.css";

export default function Projetos() {
  return (
    <section id="projetos">
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}