# Portifolio · Leonardo Pacheco Vitorino

Portfólio online de desenvolvedor front-end, feito com **Next.js (App Router)**, **TypeScript** e **CSS Modules**. Apresenta quem sou, os projetos que desenvolvi durante o curso, minhas habilidades e um formulário de contato.

**Deploy:** 
Acesse aqui:
```bash
https://portifolio-one-beta-83.vercel.app/
```
## Seções

- **Sobre Mim:** apresentação, foto e informações de contato.
- **Projetos:** cards com imagem, descrição, tecnologias e link para o repositório.
- **Habilidades:** tecnologias e conceitos agrupados por categoria.
- **Contato:** formulário com validação simples e links para GitHub, LinkedIn e e-mail.

## Projetos

Os quatro projetos em destaque no portfólio, todos desenvolvidos durante o curso:

- **Micro Frontends com Module Federation:** sistema de pedidos dividido em três aplicações independentes (Container, Micro Cardápio e Micro Pedido), integradas com Webpack Module Federation e Next.js. A comunicação entre os micros é feita por eventos globais do navegador. [Repositório](https://github.com/leonardogondor-debug/microFront)
- **Lista de Tarefas com CI/CD:** lista de tarefas feita com Next.js, React e Tailwind, com testes em Jest e Testing Library. Um pipeline no GitHub Actions valida o código e publica automaticamente na Vercel. [Repositório](https://github.com/leonardogondor-debug/projeto-lista-tarefa) · [Deploy](https://projeto-lista-tarefa.vercel.app/)
- **Diário de Bordo (PWA):** aplicativo web progressivo para registrar entradas de diário. Funciona offline com Service Worker, é instalável e salva os dados no navegador com `localStorage`. [Repositório](https://github.com/leonardogondor-debug/Diario-de-Bordo) · [Deploy](https://diario-de-bordo-pi-seven.vercel.app/)
- **Meu Blog:** blog em Next.js (App Router) com artigos em JSON local, páginas estáticas em `/artigos/[slug]` (SSG) e metadados de SEO dinâmicos com `generateMetadata`. [Repositório](https://github.com/leonardogondor-debug/meu-blog) · [Deploy](https://meu-blog-leo-vit.vercel.app/)

## Tecnologias

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- ESLint

## Decisões do projeto

- **HTML semântico** (`header`, `nav`, `section`, `article`) e atributos de acessibilidade (`aria-label`, `aria-expanded`, `role="alert"`).
- **Layout responsivo**, com menu hambúrguer no mobile.
- **Dados separados dos componentes:** projetos e habilidades ficam em `data/`, então adicionar um item não exige mexer na interface.
- **Imagens otimizadas** com `next/image`: `priority` na foto de perfil (acima da dobra) e lazy loading padrão nos cards de projetos.
- **Estilos modulares:** cada componente tem o seu próprio arquivo `.module.css`, evitando conflito de classes.

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

## clonar o repositório
```bash
git clone https://github.com/leonardogondor-debug/portifolio
```
```bash
cd portifolio
```

## instalar as dependências
```bash
npm install
```

## rodar em desenvolvimento
```bash
npm run dev
```

## abrir no navegador
```bash
http://localhost:3000
```

## Contato

- GitHub: [leonardogondor-debug](https://github.com/leonardogondor-debug)
- LinkedIn: [Leonardo Pacheco Vitorino](https://www.linkedin.com/in/leonardo-pacheco-vitorino-01b0052a2/)
- E-mail: leonardogondor@gmail.com
- Torres, RS · Brasil