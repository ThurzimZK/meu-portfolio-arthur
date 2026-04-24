import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Arthur Oliveira — Desenvolvedor Full Stack",
  author: "Arthur Oliveira",
  description:
    "Desenvolvedor Full Stack especializado em desenvolvimento web e mobile.",
  lang: "pt-BR",
  siteLogo: "/arthur-small.png",
  navLinks: [
    { text: "Experiência", href: "#experience" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/arthuroliveira04/" },
    { text: "Github", href: "https://github.com/ThurzimZK" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Arthur Oliveira",
    specialty: "Desenvolvedor Full Stack",
    summary:
      "Experiência profissional em desenvolvimento web, mobile, integrações de sistemas, banco de dados e automações.",
    whatsapp: "5517981021804",
  },
  experience: [
    {
      company: "Ecopower Energia Solar",
      position: "Desenvolvedor de Sistemas JR",
      startDate: "Jun 2025",
      endDate: "Atual",
      summary: [
        "Atuo no desenvolvimento e manutenção de sistemas web e mobile, participando de todo o ciclo de desenvolvimento, desde o levantamento de requisitos até a entrega. Trabalho principalmente com React e Node.js, criando interfaces eficientes e APIs robustas, sempre focando em performance, escalabilidade e boas práticas de código.",
        "Tenho experiência com modelagem e manipulação de dados em SQL Server, desenvolvendo queries otimizadas, procedures e garantindo a integridade das informações. Também realizo integrações com APIs REST, contribuindo para a comunicação entre sistemas e automação de processos internos.",
        "Além do desenvolvimento, atuo no suporte técnico e na análise de incidentes, identificando e corrigindo problemas em produção. Utilizo Python para automações e melhorias operacionais, colaborando diretamente com áreas de negócio para propor e implementar soluções tecnológicas eficientes.",
      ],
    },
    {
      company: "Ecopower Energia Solar",
      position: "Assistente de TI",
      startDate: "Nov 2024",
      endDate: "Jun 2025",
      summary: [
        "Atuação mais focada no suporte aos sistemas e usuários, auxiliando na resolução de problemas. Realizando atendimentos, identificação de falhas e acompanhamento de chamados, garantindo o bom funcionamento das operações do dia a dia.",
        "Forte apoio na manutenção de banco de dados, execução de consultas em SQL Server, analisando schedules e executando melhorias em aplicações. Além disso, contribuo com rotinas de TI, organização de processos e suporte geral às demandas da área, sempre buscando agilidade e eficiência.",
      ],
    },
    {
      company: "Ecopower Energia Solar",
      position: "Estagiario",
      startDate: "Jun 2024",
      endDate: "Nov 2024",
      summary: [
        "Atuei no suporte técnico aos usuários, auxiliando na resolução de problemas básicos em sistemas e no banco de dados. Realizava atendimentos iniciais, registro e acompanhamento de chamados, garantindo o funcionamento das atividades do dia a dia.",
        "Também dei apoio nas rotinas de TI, com execução de consultas simples em banco de dados (SQL Server), organização de informações e suporte na manutenção de sistemas internos. Colaborei com a equipe no atendimento de demandas operacionais, adquirindo experiência prática na área."
      ]
    },
    {
      company: "UNIFEB",
      position: "Estagiario",
      startDate: "Maio 2022",
      endDate: "Maio 2024",
      summary: [
        "Atuei no DTI prestando suporte técnico a alunos, professores e funcionários da UNIFEB, auxiliando na resolução de problemas relacionados a hardware, redes e sistemas básicos. Realizava atendimentos para configuração e suporte de computadores, além de auxiliar no uso de ferramentas como e-mail, Word e outros aplicativos do dia a dia.",
        "Também prestei suporte na manutenção de equipamentos, incluindo impressoras, datashow, ar-condicionado, telefonia e infraestrutura de rede, realizando diagnósticos, solucionando falhas simples e auxiliando na organização de switches e roteadores. Além disso, tive contato com o gerenciamento de usuários, computadores e permissões no Active Directory."
      ]
    },
    {
      company: "Palma Bebidas",
      position: "Vendedor / Entregador",
      startDate: "Março 2019",
      endDate: "Atual",
      summary:
        "Atuo no atendimento direto ao cliente, realizando vendas e entregas de produtos, garantindo agilidade e qualidade no serviço. Desenvolvi habilidades de negociação, comunicação e relacionamento interpessoal, contribuindo para a fidelização de clientes. Também sou responsável pela organização logística das entregas, controle de pedidos (compra e venda) e cumprimento de prazos.",
    },
  ],
  projects: [
    {
      name: "CADRY Eventos",
      summary: "Um e-commerce para venda de ingressos e associações feito para o Centro Acadêmico Dr. Riad Younes do curso de Medicina da Unilado (São José do Rio Preto - SP). Feito em Wordpress.",
      linkPreview: "https://cadryeventos.com.br/",
      image: "/cadry.png",
    },
    {
      name: "CADRY Mobile",
      summary: "Um aplicativo mobile complementar ao site CADRY Eventos, feito para controle de presença e emissão de certificados. Feito em React + Expo e disponibilizado para Android e iOS.",
      linkPreview: "https://apps.apple.com/br/app/cadry-eventos/id6742666087",
      image: "/juncao2.png",
    },
    {
      name: "Etiquetas - Ecopower",
      summary: "Sistema de etiquetas, feito para o setor de produção, para automatizar a geração de etiquetas (impressora ZEBRA) para os volumes à produzir, dados extraidos do OMS (Protheus - TOTVS). Feito em Python + Flask.",
      linkPreview: "/",
      image: "/etiquetas.png",
    },
    {
      name: "Automação WEB",
      summary: "Automação de downloads para holerites, nos sites do e-folha e servidor sp, para gerenciamento administrativo de uma empresa de advocacia. Feito em Python + Selenium.",
      linkPreview: "/",
      image: "/sistemaJur.png",
    },
  ],
  about: {
    description: `
      Olá, sou Arthur Oliveira, tenho 22 anos e sou Desenvolvedor de Sistemas apaixonado por tecnologia e aprendizado contínuo. Atuo principalmente no desenvolvimento web e mobile, com experiência em criação de APIs, integrações entre sistemas e automação de processos. Tenho experiência com tecnologias como React, Node.js, SQL Server, Python entre outras, sempre buscando construir soluções eficientes, escaláveis e bem estruturadas.

      Sou movido por desafios e estou constantemente buscando aprender novas tecnologias e melhorar minhas habilidades. Gosto de entender problemas a fundo e desenvolver soluções que realmente façam diferença no dia a dia das pessoas e das empresas.
    `,
    image: "/arthur-big.png",
  },

};

// #5755ff
