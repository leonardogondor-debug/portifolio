export type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  repositorio: string;
  demo?: string;
};

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Micro Frontends com Module Federation",
    descricao:
      "Aplicação dividida em Container, Micro Cardápio e Micro Pedido, integrados com Webpack Module Federation.",
    tecnologias: ["Next.js", "Module Federation"],
    imagem: "/fotoProjeto.webp",
    repositorio: "https://github.com/leonardogondor-debug/microFront",
  },
   {
    id: 2,
    titulo: "Micro Frontends com Module Federation",
    descricao:
      "Aplicação dividida em Container, Micro Cardápio e Micro Pedido, integrados com Webpack Module Federation.",
    tecnologias: ["Next.js", "Module Federation"],
    imagem: "/fotoProjeto.webp",
    repositorio: "https://github.com/leonardogondor-debug/microFront",
  },
];