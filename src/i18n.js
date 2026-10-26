// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    header: {
      ocupation: 'Desenvolvedor Web',
      name: 'Matheus Kipper',
      description: 'Desenvolvedor Web com foco em frameworks como Vue.js e React, ambos com Tailwind CSS. Para Backend, utilizo Node.js com Express.',
      location: 'Porto Alegre, RS'
    },
    greeting: {
      message: 'Bem-vindo ao meu portfólio!'
    },
    nav: {
      about: 'sobre',
      experience: 'experiência',
      projects: 'projetos',
      contact: 'contato'
    },
    education: {
      title: 'formação',  
      ongoing: 'Em andamento',
      completed: 'Concluído',
      postgraduate: 'Pós-graduação',
      graduation: 'Graduação',
      postgraduateTitle: 'Desenvolvimento Web',
      graduationTitle: 'Análise e Desenvolvimento de Sistemas'
    },
    experience: {
    title: "experiência",
    status: {
      current: "Atual",
      completed: "Concluído"
    },
    jobs: {
      junior: {
        title: "Desenvolvedor Web Junior",
        period: "Dezembro 2025 — Atual",
        description: "Desenvolvimento e manutenção de interfaces frontend e backend, utilizando principalmente Vue.js e React para front-end, e Node.js para backend. Realização de ajustes, melhorias e suporte contínuo em projetos já existentes."
      },
      trainee: {
        title: "Desenvolvedor Web Trainee",
        period: "Maio 2025 — Dezembro 2025",
        description: "Desenvolvimento e manutenção de interfaces front-end utilizando principalmente o framework Vue.js. Realização de ajustes, melhorias e suporte contínuo em projetos já existentes."
      },
      tech: {
        title: "Técnico de Informática",
        period: "Junho 2024 — Maio 2025",
        description: "Montagem e manutenção de computadores, suporte aos clientes e colaboradores, atualizações e cadastro de novos conteúdos na plataforma da empresa."
      },
      aux: {
        title: "Auxiliar de Informática",
        period: "Dezembro 2023 — Junho 2024",
        description: "Suporte aos clientes e colaboradores via telefone ou acesso remoto, atualizações e cadastro de novos conteúdos na plataforma da empresa."
      }
    }
    },
    projects: {
        mainTitle: 'projetos',
        mainButton: 'Acessar Todos',
        titleProject1: 'Consulta de CEP e Cálculo de Frete',
        descriptionProject1: 'Aplicação desenvolvida para implementação de microsserviços e sistemas distribuídos. O projeto consulta os dados de um endereço a partir de um CEP e calcula o valor do frete com base em regras de negócio internas.',
        stackProject1: 'Backend',
        titleProject2: 'Gerador de Senhas',
        descriptionProject2: 'Projeto de um gerador de senhas dinâmico, utilizando o framework Vue.js e estilização com Tailwind CSS, além de utilziar bibliotecas como a generate-password-browser e a toastify-js.',
        stackProject2: 'Frontend',
        tagLibraryProject2: 'bibliotecas',
        titleProject3: 'Contas e Despesas',
        descriptionProject3: 'Uma ferramenta simples e intuitiva para gerenciar suas finanças pessoais. Adicione e visualize suas contas e despesas diárias de forma fácil, mantendo um controle total sobre seus gastos.',
        stackProject3: 'Frontend',
        buttonProject: 'Clique para acessar o projeto'

  },
  contact: {
    mainTitle: 'contato',
    secondaryTitle: 'outras redes sociais'
  },
  footer: {
    text: 'Todos os direitos reservados.'
  }
},
  en: {
    header: {
      ocupation: 'Web Developer',
      name: 'Matheus Kipper',
      description: 'Web Developer focused on frameworks like Vue.js and React, both with Tailwind CSS. For Backend, I use Node.js with Express.',
      location: 'Porto Alegre, RS'
    },
    greeting: {
      message: 'Welcome to my portfolio!'
    },
    nav: {
      about: 'about',
      experience: 'experience',
      projects: 'projects',
      contact: 'contact'
    },
    education: {
      title: 'education',
      ongoing: 'Ongoing',
      completed: 'Completed',
      postgraduate: 'Postgraduate',
      graduation: 'Graduation',
      postgraduateTitle: 'Web Development',
      graduationTitle: 'Analysis and Systems Development'
    },
    experience: {
      title: 'experience',
      status: {
        current: 'Current',
        completed: 'Completed'
      },
      jobs: {
        junior: {
          title: 'Junior Web Developer',
          period: 'December 2025 — Current',
          description: 'Development and maintenance of frontend and backend interfaces, mainly using Vue.js and React for frontend, and Node.js for backend. Making adjustments, improvements, and continuous support in existing projects.'
        },
        trainee: {
          title: 'Trainee Web Developer',
          period: 'May 2025 — December 2025',
          description: 'Development and maintenance of frontend interfaces mainly using the Vue.js framework. Making adjustments, improvements, and continuous support in existing projects.'
        },
        tech: {
          title: 'IT Technician',
          period: 'June 2024 — May 2025',
          description: 'Assembly and maintenance of computers, support to clients and collaborators, updates and registration of new content on the company platform.'
        },
        aux: {
          title: 'IT Assistant',
          period: 'December 2023 — June 2024',
          description: 'Support to clients and collaborators via phone or remote access, updates and registration of new content on the company platform.'
        }
      }
    },
    projects: {
        mainTitle: 'projects',
        mainButton: 'View All',
        titleProject1: 'Zip Code Lookup and Shipping Calculation',
        descriptionProject1: 'Application developed for the implementation of microservices and distributed systems. The project retrieves address data based on a ZIP code and calculates the shipping cost based on internal business rules.',
        titleProject2: 'Password Generator',
        descriptionProject2: 'A dynamic password generator project, built with the Vue.js framework and styled with Tailwind CSS, utilizing libraries such as generate-password-browser and toastify-js.',
        tagLibraryProject2: 'libraries',
        titleProject3: 'Bills and Expenses',
        descriptionProject3: 'A simple and intuitive tool to manage your personal finances. Easily add and view your daily bills and expenses, keeping full control over your spending.',
        buttonProject: 'Click to view project'
    },
    contact: {
      mainTitle: 'contact',
      secondaryTitle: 'other social media'
    },
    footer: {
      text: 'All rights reserved.'
    }
  }
}

// Recupera o idioma salvo no LocalStorage, ou usa 'pt' como padrão
const savedLocale = localStorage.getItem('user-locale') || 'pt'

export const i18n = createI18n({
  legacy: false, // Necessário para usar a Composition API do Vue 3
  locale: savedLocale, 
  fallbackLocale: 'en',
  messages: messages,
})