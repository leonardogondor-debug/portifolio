export type GrupoHabilidades = {
  categoria: string;
  itens: string[];
};

export const habilidades: GrupoHabilidades[] = [
  { categoria: "Linguagens", itens: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { categoria: "Frameworks e bibliotecas", itens: ["React", "Next.js", "Recoil", "Bootstrap", "Tailwind CSS", "Sass"] },
  { categoria: "Qualidade e ferramentas", itens: ["Git e GitHub", "ESLint", "Testes automatizados", "CI/CD", "npm"] },
  { categoria: "Conceitos", itens: ["Design responsivo", "Micro frontends", "Programação assíncrona", "Consumo de APIs", "Performance web", "Metodologias Ágeis"] },
];