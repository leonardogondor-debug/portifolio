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
    imagem: "/cardapio.webp",
    repositorio: "https://github.com/leonardogondor-debug/microFront",
  },
  {
    id: 2,
    titulo: "Lista de Tarefas com CI/CD",
    descricao:
      "Lista de tarefas feita com Next.js, React e Tailwind, com testes em Jest e Testing Library. Pipeline de CI/CD no GitHub Actions valida o código e publica automaticamente na Vercel.",
    tecnologias: ["Next.js", "React", "Tailwind CSS", "Jest", "GitHub Actions"],
    imagem: "/lista-de-tarefas.webp",
    repositorio: "https://github.com/leonardogondor-debug/projeto-lista-tarefa",
  },
  {
    id: 3,
    titulo: "Diário de Bordo (PWA)",
    descricao:
      "Aplicativo web progressivo para registrar entradas de diário com título, conteúdo e data. Funciona offline, é instalável e salva os dados no navegador com localStorage.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Service Worker", "PWA"],
    imagem: "/diario-de-bordo.webp",
    repositorio: "https://github.com/leonardogondor-debug/Diario-de-Bordo",
  },
  {
    id: 4,
    titulo: "Meu Blog",
    descricao:
      "Blog com artigos vindos de um JSON local, páginas dinâmicas em /artigos/[slug] geradas estaticamente (SSG) e metadados de SEO dinâmicos com generateMetadata.",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imagem: "/meu-blog.webp",
    repositorio: "https://github.com/leonardogondor-debug/meu-blog",
  },
];