"use client";
import { useState } from "react";
import styles from "./contato.module.css";

const Email = "leonardo@gmail.com";

export default function Contato() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [erro, setErro] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((atual) => ({ ...atual, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
            setErro("Preencha todos os campos.");
            return;
        }

        setErro("");
        const assunto = encodeURIComponent(`Contato pelo portfólio - ${form.nome}`);
        const corpo = encodeURIComponent(`${form.mensagem}\n\nDe: ${form.nome} (${form.email})`);
        window.location.href = `mailto:${Email}?subject=${assunto}&body=${corpo}`;
    };

    return (
        <section id="contato">
            <div className={styles.contato}>
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <label>
                        Nome
                        <input className={styles.input} name="nome" value={form.nome} onChange={handleChange} />
                    </label>
                    <label>
                        E-mail
                        <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange} />
                    </label>

                    <label>
                        Mensagem
                        <textarea className={styles.textarea} name="mensagem" rows={5} value={form.mensagem} onChange={handleChange} />
                    </label>
                    {erro && <p role="alert">{erro}</p>}
                    <button className={styles.button} type="submit">
                        Enviar mensagem
                    </button>
                </form>

                <div className={styles.redes}>
                    <h3>Ou me encontre aqui</h3>
                    <a href="https://github.com/leonardogondor-debug?tab=repositories">GitHub</a>
                    <a href="https://www.linkedin.com/in/leonardo-pacheco-vitorino-01b0052a2/?isSelfProfile=true">LinkedIn</a>
                    <a href="mailto:leonardogondor@gmail.com">{Email}</a>
                </div>
            </div>
        </section>
    );
}