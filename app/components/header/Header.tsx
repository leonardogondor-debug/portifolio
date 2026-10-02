"use client";

import { useState } from "react";
import styles from "./header.module.css";

const links = [
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contato", label: "Contato" }
];

export default function Header() {
    const [aberto, setAberto] = useState(false);
    const fecharMenu = () => setAberto(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a className={styles.nome} href="#inicio" onClick={fecharMenu}>
                    Leonardo Pacheco Vitorino</a>

                <h1 className={styles.subtitulo}>Programador Frontend</h1>

                <button onClick={() => setAberto((v) => !v)}
                    className={styles.toggle}
                    aria-label="Abrir ou fechar menu"
                    aria-expanded={aberto}
                    aria-controls="menu-principal">
                    <span className={styles.linha} />
                    <span className={styles.linha} />
                    <span className={styles.linha} />
                </button>

                <nav
                    className={`${styles.nav} ${aberto ? styles.navAberto : ""}`}
                    id="menu-principal"
                    aria-label="Navegação principal">
                    <ul className={styles.lista}>
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className={styles.link} onClick={fecharMenu}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}