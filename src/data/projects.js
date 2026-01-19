import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const state = reactive({
    projects: [
      {
        id: 1,
        title: 'Automação de Emissão de NF de Saída – SAP Business One',
        description:
          'Fluxo automatizado para emissão de notas fiscais de saída via Service Layer, substituindo RPA terceirizada e eliminando intervenção manual.',
        logo: new URL('@/assets/images/banner.png', import.meta.url).href,
        image: new URL('@/assets/images/banner.png', import.meta.url).href,
        status: 'Concluído',
        type: 'Automação - (Integração)',
        technologies: ['n8n', 'SAP B1 Service Layer', 'SAP HANA', 'JavaScript', 'REST APIs'],
        duration: '---',
        year: '2026',
        carrouselImages: [new URL('@/assets/images/banner.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Fluxo de automação em n8n para geração automática de NF de Saída no SAP Business One, controle de adiantamentos e integração via Service Layer e HANA SQL.',
      },
      {
        id: 2,
        title: 'Automação de Integrações Logísticas – SAP Business One & WMS',
        description:
          'Conjunto de fluxos para integração entre ERP, WMS e sistemas externos, automatizando processos logísticos e padronizando dados.',
        logo: new URL('@/assets/images/wms.png', import.meta.url).href,
        image: new URL('@/assets/images/wms.png', import.meta.url).href,
        status: 'Em andamento / Evolução contínua',
        type: 'Automação - (Integração)',
        technologies: ['n8n', 'SAP Business One', 'SQL', 'REST APIs'],
        duration: '---',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/wms.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Conjunto de fluxos para integração entre ERP, WMS e sistemas externos, automatizando processos logísticos e padronizando dados.',
      },
      {
        id: 3,
        title: 'Automação de Onboarding e Offboarding de Colaboradores',
        description:
          'Fluxo automatizado para gerenciamento de processos de entrada e saída de colaboradores, com coleta de dados via formulários web e integração com sistemas internos.',
        logo: new URL('@/assets/images/banner.png', import.meta.url).href,
        image: new URL('@/assets/images/banner.png', import.meta.url).href,
        status: 'Concluído',
        type: 'Automação - (Integração)',
        technologies: ['n8n', 'HTML', 'CSS', 'JavaScript', 'APIs REST'],
        duration: '---',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/banner.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Fluxo automatizado para gerenciamento de processos de entrada e saída de colaboradores, com coleta de dados via formulários web e integração com sistemas internos.',
      },
      {
        id: 4,
        title: 'Automação de Compactação de Imagens e Envio por E-mail',
        description:
          'Processo automatizado para compactação de imagens e envio de documentos por e-mail, padronizando arquivos e reduzindo tamanho de anexos.',
        logo: new URL('@/assets/images/banner.png', import.meta.url).href,
        image: new URL('@/assets/images/banner.png', import.meta.url).href,
        status: 'Concluído',
        type: 'Automação - (Integração)',
        technologies: ['n8n', 'JavaScript', 'APIs REST', 'SMTP'],
        duration: '---',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/banner.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Processo automatizado para compactação de imagens e envio de documentos por e-mail, padronizando arquivos e reduzindo tamanho de anexos.',
      },
      {
        id: 5,
        title: 'Gestão de Despesas e Notas Fiscais',
        description:
          'Aplicação web para registro de despesas de colaboradores e upload de notas fiscais, com validação de campos e integração com fluxo automatizado de processamento no SAP.',
        logo: new URL('@/assets/images/banner.png', import.meta.url).href,
        image: new URL('@/assets/images/banner.png', import.meta.url).href,
        status: 'Concluído',
        type: 'Aplicação Web - (Integração)',
        technologies: ['SAP Service Layer', 'JavaScript', 'SAP', 'HTML','CSS', 'SAP Service Layer', 'n8n'],
        duration: '---',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/telalogindespesas.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Aplicação web para registro de despesas de colaboradores e upload de notas fiscais, com autenticação validada diretamente no SAP e integração com fluxo automatizado de processamento no ERP.',
      },
      {
        id: 6,
        title: 'Cadastro de Parceiros – Aplicação Web',
        description:
          'Aplicação web para cadastro de parceiros, com validação de dados e integração com backend para envio automatizado de informações ao SAP.',
        logo: new URL('@/assets/images/banner.png', import.meta.url).href,
        image: new URL('@/assets/images/banner.png', import.meta.url).href,
        status: 'Em Desenvolvimento',
        type: 'Aplicação Web - (Integração)',
        technologies: ['HTML', 'CSS', 'JavaScript', 'APIs REST', 'SAP Business One', 'n8n'],
        duration: '---',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/banner.png', import.meta.url).href],
        links: [
          {
            label: 'GitHub',
            url: 'x',
            type: 'secondary',
            icon: '🔗',
          },
        ],
        about:
          'Aplicação web para cadastro de parceiros, com validação de dados e integração com backend para envio automatizado de informações ao SAP.',
      },
    ],
    selectedProject: null,
    loading: false,
    error: null,
  })

  const getProjectById = (id) => {
    const response = state.projects.find((project) => project.id == id)
    state.selectedProject = response
    return response
  }

  return {
    state,
    getProjectById,
  }
})
