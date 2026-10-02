import Image from "next/image";
import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className={styles.container}>
                <Image
                    src="/fotoPerfil.webp"
                    alt="Foto de perfil"
                    width={170}
                    height={220}
                    className={styles.foto}
                    priority
                />
                <div className={styles.texto}>
                    <p>
                        Sou desenvolvedor front-end em formação, apaixonado por transformar
                        ideias em interfaces. Durante o curso trabalhei com JavaScript,
                        React, Next.js, TypeScript, testes e micro frontends.
                    </p>
                    <p>
                        Busco minha primeira oportunidade na área para crescer e contribuir
                        com times de produto.
                    </p>
                    <ul className={styles.texto}>
                        <li>Email: leonardogondor@gmail.com</li>
                        <li>WhatsApp: (51) 98970-3729</li>
                        <li>
                            <a className={styles.texto__ul} href="https://github.com/leonardogondor-debug?tab=repositories">
                                github.com/leonardogondor-debug</a>
                        </li>
                        <li>Torres-RS, Brasil</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}