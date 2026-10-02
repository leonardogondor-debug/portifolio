import { habilidades } from "../../data/habilidades";
import styles from "./habilidades.module.css";

export default function Habilidades() {
    return (
        <section id="habilidades">
            <div className={styles.grid}>
                {habilidades.map(({ categoria, itens }) => (
                    <div className={styles.habilidades} key={categoria}>
                        <h3 className={styles.titulo}>{categoria}</h3>
                        <ul className={styles.conteudo}>
                            {itens.map((item) => (
                                <li  key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}