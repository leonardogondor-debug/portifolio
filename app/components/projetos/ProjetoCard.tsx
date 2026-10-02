import Image from "next/image";
import type { Projeto } from "../../data/projetos";
import styles from "./projetos.module.css";

export default function ProjetoCard({ projeto }: { projeto: Projeto }) {
    const { titulo, descricao, tecnologias, imagem, repositorio, demo } = projeto;

    return (
        <article className={styles.card}>
            <Image
                className={styles.foto}
                src={imagem}
                alt={`Captura de tela do projeto ${titulo}`}
                width={600}
                height={340}
            />
            <div className={styles.conteudo}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <ul className={styles.tags}>
                    {tecnologias.map((tec) => (
                        <li key={tec}>{tec}</li>
                    ))}
                </ul>
                <a className={styles.tag__link} href={repositorio} target="_blank" rel="noopener noreferrer">
                    Repositório
                </a>
            </div>

        </article>
    );
}