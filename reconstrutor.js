/* =========================================================
   RECONSTRUTOR DE DIAGNÓSTICO — SKILLIU (uso interno)
   Cola uma linha da planilha (28 colunas, A a AB) e recria
   exatamente o que a pessoa viu no site.
   ========================================================= */

const DIMENSIONS = [
  {
    id: 1,
    title: 'Visão e Planejamento Estratégico',
    short: 'Visão',
    icon: '📋',
    questions: [
      'A instituição possui um plano estratégico de educação tecnológica documentado, com metas claras, indicadores de sucesso e orçamento definido, que seja conhecido por toda a comunidade escolar?',
      'De que forma a liderança escolar promove e apoia ativamente a inovação e o uso de tecnologias digitais como parte integral do projeto político-pedagógico?',
    ],
  },
  {
    id: 2,
    title: 'Infraestrutura e Recursos Digitais',
    short: 'Infraestrutura',
    icon: '🔌',
    questions: [
      'A infraestrutura de conectividade da escola é suficiente para garantir o uso pedagógico consistente e simultâneo por alunos e professores?',
      'A escola garante acesso equitativo a dispositivos tecnológicos para todos os alunos, incluindo aqueles com necessidades educacionais especiais?',
    ],
  },
  {
    id: 3,
    title: 'Formação Docente e Desenvolvimento Profissional',
    short: 'Formação',
    icon: '👨‍🏫',
    questions: [
      'A instituição oferece um programa de formação continuada para os professores sobre aplicação pedagógica de tecnologias?',
      'Existem espaços dedicados à colaboração e troca de experiências entre professores sobre uso de tecnologias educacionais?',
    ],
  },
  {
    id: 4,
    title: 'Currículo e Práticas Pedagógicas',
    short: 'Currículo',
    icon: '📚',
    questions: [
      'De que maneira o currículo contempla o desenvolvimento de competências digitais como pensamento computacional e letramento midiático?',
      'As práticas pedagógicas incluem atividades que promovam autoria, colaboração, pesquisa e resolução de problemas?',
    ],
  },
  {
    id: 5,
    title: 'Cultura Digital, Cidadania e Ética',
    short: 'Cultura Digital',
    icon: '🌐',
    questions: [
      'A escola desenvolve ações sistemáticas para formação de cidadania digital crítica abordando segurança online e privacidade?',
      'Como a instituição avalia e monitora o desenvolvimento das competências digitais dos alunos?',
    ],
  },
  {
    id: 6,
    title: 'STEAM e Robótica Educacional',
    short: 'STEAM',
    icon: '🤖',
    questions: [
      'A instituição oferece programas estruturados de robótica educacional e atividades STEAM (Ciência, Tecnologia, Engenharia, Artes e Matemática) integradas ao currículo?',
      'Existem espaços dedicados (laboratórios, maker spaces) e recursos (kits de robótica, impressoras 3D) disponíveis para desenvolvimento de projetos STEAM?',
    ],
  },
];

const SCALE_OPTIONS = [
  { value: 1, label: 'Não iniciado', description: 'Nenhuma ação nesta área' },
  { value: 2, label: 'Em desenvolvimento', description: 'Iniciativas pontuais' },
  { value: 3, label: 'Implementado', description: 'Ações estruturadas' },
  { value: 4, label: 'Consolidado', description: 'Prática sistemática' },
  { value: 5, label: 'Avançado', description: 'Excelência e inovação' },
];

const BADGE_LABEL = {
  high: 'Avançado',
  medium: 'Consolidado',
  developing: 'Em Desenvolvimento',
  low: 'Iniciante',
};

/* =========================================================
   RECOMENDAÇÕES DETALHADAS (texto-base do plano de ação)
   ========================================================= */
const DETAILED_RECOMMENDATIONS = {
  1: {
    low: {
      title: 'Desenvolver Visão Estratégica',
      description:
        'A instituição precisa estabelecer uma visão clara sobre o papel da tecnologia na educação e documentar um plano estratégico com envolvimento da comunidade escolar.',
      actions: [
        'Formar comissão de educação digital com representantes de gestão, professores, alunos e pais',
        'Realizar diagnóstico participativo sobre necessidades e desafios tecnológicos',
        'Elaborar plano estratégico de 3-5 anos com metas SMART',
        'Alinhar plano com PNED, PNE e BNCC',
        'Comunicar plano a toda comunidade escolar',
      ],
    },
    medium: {
      title: 'Fortalecer Comunicação e Alinhamento Estratégico',
      description:
        'O plano existe, mas precisa ser melhor comunicado e garantir alinhamento com o Projeto Político-Pedagógico (PPP) e políticas internas.',
      actions: [
        'Revisar plano estratégico com base em feedback da comunidade',
        'Integrar objetivos de educação digital explicitamente no PPP',
        'Criar dashboard de acompanhamento de metas com indicadores visuais',
        'Realizar comunicações periódicas sobre progresso',
        'Estabelecer sistema de feedback para ajustes contínuos',
      ],
    },
    high: {
      title: 'Consolidar Cultura de Inovação Contínua',
      description:
        'Implementar sistema robusto de monitoramento, avaliação e melhoria contínua do plano estratégico com participação ativa da comunidade.',
      actions: [
        'Estabelecer sistema de monitoramento em tempo real com KPIs',
        'Realizar avaliações semestrais com análise de dados e ajustes',
        'Criar programa de inovação que incentive experiências pedagógicas com tecnologia',
        'Implementar ciclos de melhoria contínua (Plan-Do-Check-Act)',
        'Reconhecer e premiar iniciativas inovadoras de professores e alunos',
      ],
    },
  },
  2: {
    low: {
      title: 'Construir Infraestrutura Tecnológica Básica',
      description:
        'A escola precisa investir em conectividade adequada e dispositivos tecnológicos para garantir acesso equitativo a todos os alunos.',
      actions: [
        'Realizar auditoria de infraestrutura atual (conexão, dispositivos, espaços)',
        'Elaborar plano de investimento em conectividade',
        'Adquirir dispositivos tecnológicos com foco em equidade',
        'Garantir acesso para alunos com necessidades educacionais especiais',
        'Estabelecer política de manutenção preventiva e suporte técnico',
      ],
    },
    medium: {
      title: 'Otimizar e Expandir Infraestrutura',
      description:
        'Ampliar cobertura de conectividade, garantir manutenção regular e diversificar recursos educacionais digitais alinhados ao currículo.',
      actions: [
        'Aumentar velocidade de internet para suportar uso simultâneo',
        'Implementar sistema de gestão de dispositivos (MDM)',
        'Diversificar recursos: plataformas, softwares educacionais, repositórios',
        'Criar política de BYOD segura e inclusiva',
        'Realizar manutenção preventiva com cronograma definido',
      ],
    },
    high: {
      title: 'Implementar Infraestrutura Inteligente e Sustentável',
      description:
        'Desenvolver ecossistema tecnológico integrado, escalável e sustentável com foco em inovação e inclusão digital.',
      actions: [
        'Implementar infraestrutura em nuvem com backup automático',
        'Criar laboratórios especializados (maker space, estúdio de produção)',
        'Desenvolver programa de renovação tecnológica com ciclo de 3-4 anos',
        'Implementar IoT para ambientes inteligentes',
        'Estabelecer parcerias com empresas de tecnologia',
      ],
    },
  },
  3: {
    low: {
      title: 'Iniciar Programa de Formação em Competências Digitais',
      description:
        'Implementar programa estruturado de formação continuada que vá além do uso instrumental de ferramentas, focando em aplicação pedagógica.',
      actions: [
        'Diagnosticar necessidades de formação dos professores',
        'Oferecer cursos básicos em ferramentas digitais',
        'Incluir módulos sobre pedagogia digital e metodologias ativas',
        'Certificar professores em competências digitais',
        'Criar grupo de professores multiplicadores',
      ],
    },
    medium: {
      title: 'Expandir e Consolidar Programa de Desenvolvimento Profissional',
      description:
        'Criar comunidades de prática, oferecer formações avançadas e incentivar desenvolvimento profissional contínuo e especializado.',
      actions: [
        'Estabelecer comunidades de prática por área',
        'Oferecer formações avançadas em temas específicos',
        'Criar mentoria entre professores experientes e iniciantes',
        'Apoiar participação em conferências e cursos externos',
        'Implementar plano de carreira com reconhecimento de especialização digital',
      ],
    },
    high: {
      title: 'Consolidar Cultura de Aprendizagem Profissional Contínua',
      description:
        'Transformar a instituição em centro de excelência em educação digital com pesquisa, inovação e compartilhamento de conhecimento.',
      actions: [
        'Implementar programa de pesquisa-ação sobre práticas digitais inovadoras',
        'Oferecer especialização em nível de pós-graduação',
        'Criar repositório de boas práticas e casos de sucesso documentados',
        'Estabelecer parcerias com universidades para pesquisa colaborativa',
        'Hospedar eventos, workshops e conferências sobre educação digital',
      ],
    },
  },
  4: {
    low: {
      title: 'Integrar Competências Digitais ao Currículo',
      description:
        'Incorporar desenvolvimento de competências digitais de forma transversal e em componentes específicos, alinhado à BNCC.',
      actions: [
        'Mapear onde competências digitais estão no currículo atual',
        'Elaborar matriz de competências digitais por série/ano',
        'Integrar pensamento computacional em Matemática, Ciências e Tecnologia',
        'Desenvolver projetos interdisciplinares com foco em resolução de problemas',
        'Criar sequências didáticas que usem tecnologia para aprendizagem ativa',
      ],
    },
    medium: {
      title: 'Consolidar Práticas Pedagógicas Inovadoras com Tecnologia',
      description:
        'Expandir uso de tecnologia para atividades de autoria, colaboração e resolução de problemas, indo além da apresentação de conteúdo.',
      actions: [
        'Implementar metodologias ativas: projetos, sala de aula invertida, aprendizagem colaborativa',
        'Usar tecnologia para criação de conteúdo pelos alunos',
        'Implementar avaliação formativa com ferramentas digitais',
        'Criar ambientes virtuais de aprendizagem para complementar presencial',
        'Usar dados de aprendizagem para personalizar ensino',
      ],
    },
    high: {
      title: 'Implementar Ecossistema de Aprendizagem Personalizada e Inovadora',
      description:
        'Desenvolver currículo flexível e adaptativo com tecnologia, focando em aprendizagem profunda, criatividade e pensamento crítico.',
      actions: [
        'Implementar aprendizagem personalizada com IA (adaptive learning)',
        'Criar trilhas de aprendizagem flexíveis baseadas em interesses e ritmo',
        'Integrar educação empreendedora com tecnologia',
        'Desenvolver competências para futuro (pensamento sistêmico, criatividade)',
        'Implementar avaliação por competências com portfólios digitais avançados',
      ],
    },
  },
  5: {
    low: {
      title: 'Iniciar Programa de Cidadania Digital',
      description:
        'Desenvolver ações sistemáticas para formar cidadãos digitais críticos e responsáveis, abordando segurança, privacidade e ética.',
      actions: [
        'Incluir educação em segurança online no currículo',
        'Oferecer workshops sobre privacidade de dados e direitos digitais',
        'Criar campanhas sobre combate à desinformação e fake news',
        'Ensinar sobre direitos autorais e propriedade intelectual',
        'Envolver famílias em formações sobre uso responsável de tecnologia',
      ],
    },
    medium: {
      title: 'Consolidar Cultura de Uso Responsável e Ético',
      description:
        'Expandir programa de cidadania digital com avaliação de impacto e envolvimento de toda comunidade escolar.',
      actions: [
        'Implementar código de conduta digital para alunos e professores',
        'Criar sistema de monitoramento e denúncia de comportamentos inadequados',
        'Oferecer formações para pais sobre mediação de uso de tecnologia',
        'Avaliar impacto das ações de cidadania digital',
        'Integrar ética digital em discussões de temas transversais',
      ],
    },
    high: {
      title: 'Transformar em Centro de Referência em Cidadania Digital',
      description:
        'Implementar pesquisa, inovação e compartilhamento de conhecimento sobre educação digital ética e responsável.',
      actions: [
        'Conduzir pesquisa sobre impacto da tecnologia no bem-estar e aprendizagem',
        'Desenvolver programa de embaixadores digitais',
        'Criar repositório de recursos sobre cidadania digital',
        'Estabelecer parcerias com organizações de proteção de dados',
        'Publicar relatórios anuais sobre saúde digital da instituição',
      ],
    },
  },
  6: {
    low: {
      title: 'Iniciar Programas de STEAM e Robótica',
      description:
        'Implementar atividades estruturadas que integrem Ciência, Tecnologia, Engenharia, Artes e Matemática com foco em robótica educacional.',
      actions: [
        'Adquirir kits de robótica educacional adequados ao nível de ensino',
        'Oferecer formação inicial para professores em robótica',
        'Criar clube ou aula optativa de robótica',
        'Desenvolver projetos piloto integrando robótica em Matemática e Ciências',
        'Participar de competições regionais de robótica',
      ],
    },
    medium: {
      title: 'Consolidar Abordagem STEAM Integrada',
      description:
        'Expandir programas de robótica e STEAM com integração curricular, projetos interdisciplinares e participação em competições.',
      actions: [
        'Integrar robótica em pelo menos 3 componentes curriculares',
        'Desenvolver projetos STEAM interdisciplinares com desafios reais',
        'Criar laboratório de robótica com espaço dedicado',
        'Treinar equipes para competições estaduais e nacionais',
        'Documentar e compartilhar projetos em plataformas maker',
      ],
    },
    high: {
      title: 'Transformar em Centro de Excelência em STEAM',
      description: 'Desenvolver ecossistema robusto de STEAM e robótica com pesquisa, inovação e liderança regional.',
      actions: [
        'Oferecer trilhas especializadas em robótica avançada (IA, IoT, drones)',
        'Implementar programa de mentorado com universidades e empresas',
        'Criar espaço maker completo com impressoras 3D, eletrônica, programação',
        'Hospedar competições regionais e eventos de robótica',
        'Desenvolver projetos de pesquisa-ação sobre impacto de STEAM na aprendizagem',
      ],
    },
  },
};

/* =========================================================
   LINHA DE EXEMPLO (28 colunas, A a AB)
   ========================================================= */
const EXEMPLO_LINHA = [
  'Maria Oliveira',
  'maria.oliveira@escola.edu.br',
  'E.M. Jardim das Flores',
  'Coordenador(a)',
  '(14) 99123-4567',
  '19/08/2026 14:32:10',
  'SIM',
  4, 3, 3, 2, 2, 3, 4, 3, 2, 2, 5, 5,
  70, 50, 60, 70, 40, 100,
  65,
  'Consolidado',
  '19/08/2026 15:01:44',
].join('\t');

/* =========================================================
   PARSING (28 colunas, A a AB)
   ========================================================= */
function parseLinha(raw) {
  const clean = raw.replace(/\r/g, '').trim();
  if (!clean) return { erro: 'Cole uma linha antes de gerar o diagnóstico.' };

  let cols = clean.split('\t').map((c) => c.trim());

  // fallback: se não veio com tabs (às vezes acontece ao colar de outros lugares), tenta múltiplos espaços
  if (cols.length < 28) {
    const alt = clean.split(/\s{2,}/).map((c) => c.trim());
    if (alt.length >= 28) cols = alt;
  }

  if (cols.length < 28) {
    return {
      erro: `Foram encontradas ${cols.length} colunas, mas eram esperadas 28 (A a AB). Confira se copiou a linha inteira da planilha, sem pular colunas.`,
    };
  }

  // Índices das 28 colunas (A=0 ... AB=27)
  const nome = cols[0];
  const email = cols[1];
  const instituicao = cols[2];
  const profissao = cols[3];
  const whatsapp = cols[4];
  const dataCadastro = cols[5];
  const aceitePrivacidade = cols[6];
  // cols[7..18]  = R1 a R12 (H-S)
  // cols[19..24] = scores por eixo (T-Y) — recalculados, não usados aqui
  // cols[25]     = score geral (Z) — recalculado, não usado aqui
  // cols[26]     = nível geral (AA) — recalculado, não usado aqui
  const dataConclusao = cols[27];

  const respostas = cols.slice(7, 19).map((v) => parseInt(v, 10));

  if (respostas.some((v) => isNaN(v) || v < 1 || v > 5)) {
    return { erro: 'Uma ou mais respostas (R1 a R12) não são números válidos entre 1 e 5. Confira os valores colados.' };
  }

  const responses = {};
  respostas.forEach((v, idx) => {
    responses[idx] = v;
  });

  return {
    nome,
    email,
    instituicao,
    profissao,
    whatsapp,
    dataCadastro,
    aceitePrivacidade,
    dataConclusao,
    responses,
  };
}

/* =========================================================
   CÁLCULO
   ========================================================= */
function calcularDimensoes(responses) {
  return DIMENSIONS.map((dim, idx) => {
    const q1 = responses[idx * 2] || 0;
    const q2 = responses[idx * 2 + 1] || 0;
    const score = Math.round(((q1 + q2) / 10) * 100);
    let level;
    if (score >= 80) level = 'high';
    else if (score >= 60) level = 'medium';
    else level = 'low';
    return { ...dim, score, level };
  });
}

function nivelGeral(score) {
  if (score >= 80) return { label: 'Avançado' };
  if (score >= 60) return { label: 'Consolidado' };
  if (score >= 40) return { label: 'Em Desenvolvimento' };
  return { label: 'Iniciante' };
}

/* =========================================================
   FLUXO PRINCIPAL
   ========================================================= */
const pasteArea = document.getElementById('pasteArea');
const pasteError = document.getElementById('pasteError');

document.getElementById('btnExemplo').addEventListener('click', () => {
  pasteArea.value = EXEMPLO_LINHA;
});

document.getElementById('btnGerar').addEventListener('click', () => {
  const resultado = parseLinha(pasteArea.value);

  if (resultado.erro) {
    pasteError.textContent = resultado.erro;
    pasteError.classList.add('show');
    return;
  }
  pasteError.classList.remove('show');

  gerarDiagnostico(resultado);
});

document.getElementById('btnNovaColagem').addEventListener('click', () => {
  document.getElementById('screen-recon-results').classList.remove('active');
  document.getElementById('screen-paste').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------------- Troca de abas ---------------- */
document.querySelectorAll('.recon-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.recon-tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.recon-panel').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  });
});

/* =========================================================
   GERAÇÃO DO DIAGNÓSTICO
   ========================================================= */
function gerarDiagnostico(dados) {
  // Perfil da pessoa / instituição
  document.getElementById('uNome').textContent = dados.nome || '—';
  document.getElementById('uInstituicao').textContent = dados.instituicao || '—';
  document.getElementById('uEmail').textContent = dados.email || '—';
  document.getElementById('uProfissao').textContent = dados.profissao || '—';
  document.getElementById('uWhatsapp').textContent = dados.whatsapp || '—';
  document.getElementById('uDataCadastro').textContent = dados.dataCadastro || '—';
  document.getElementById('uAceite').textContent = dados.aceitePrivacidade || '—';
  document.getElementById('uDataConclusao').textContent = dados.dataConclusao || '—';

  document.getElementById('reconSchoolTitle').textContent = dados.instituicao
    ? `${dados.instituicao} · ${dados.nome}`
    : 'Diagnóstico reconstruído';

  const dimensionScores = calcularDimensoes(dados.responses);
  const overallScore = Math.round(dimensionScores.reduce((sum, d) => sum + d.score, 0) / dimensionScores.length);
  const nivel = nivelGeral(overallScore);

  document.getElementById('scoreGeral').textContent = overallScore + '%';
  document.getElementById('scoreNivel').textContent = nivel.label;
  document.getElementById('scoreBarFill').style.width = overallScore + '%';
  document.getElementById('scoreDescricao').textContent =
    `A instituição está em um nível ${nivel.label.toLowerCase()} de maturidade em educação tecnológica.`;

  renderRadarChart(dimensionScores);
  renderDimensionsSummary(dimensionScores);
  renderTabelaRespostas(dados.responses);
  renderPlanoDeAcao(dimensionScores);

  // volta pra primeira aba
  document.querySelectorAll('.recon-tab').forEach((t) => t.classList.remove('active'));
  document.querySelectorAll('.recon-panel').forEach((p) => p.classList.remove('active'));
  document.querySelector('.recon-tab[data-tab="perfil"]').classList.add('active');
  document.getElementById('panel-perfil').classList.add('active');

  document.getElementById('screen-paste').classList.remove('active');
  document.getElementById('screen-recon-results').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================================
   GRÁFICO RADAR (SVG, sem dependências externas)
   ========================================================= */
function renderRadarChart(dimensionScores) {
  const size = 440;
  const center = size / 2;
  const maxRadius = size / 2 - 90;
  const levels = [20, 40, 60, 80, 100];
  const axisCount = dimensionScores.length;

  function pointFor(index, value) {
    const angle = (Math.PI * 2 * index) / axisCount - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  }

  let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;

  levels.forEach((lvl) => {
    const pts = dimensionScores.map((_, i) => {
      const p = pointFor(i, lvl);
      return `${p.x},${p.y}`;
    });
    svg += `<polygon points="${pts.join(' ')}" fill="none" stroke="#e2e8f0" stroke-width="1" />`;
  });

  dimensionScores.forEach((dim, i) => {
    const p = pointFor(i, 100);
    const labelP = pointFor(i, 122);
    svg += `<line x1="${center}" y1="${center}" x2="${p.x}" y2="${p.y}" stroke="#e2e8f0" stroke-width="1" />`;

    let anchor = 'middle';
    if (labelP.x > center + 12) anchor = 'start';
    else if (labelP.x < center - 12) anchor = 'end';

    const words = dim.short.split(' ');
    let textEl = `<text x="${labelP.x}" y="${labelP.y}" text-anchor="${anchor}" font-size="11.5" font-weight="700" fill="#1e3d6e" font-family="Garet, sans-serif">`;
    words.forEach((word, wIdx) => {
      const dy = wIdx === 0 ? (words.length > 1 ? '-0.25em' : '0.32em') : '1.15em';
      textEl += `<tspan x="${labelP.x}" dy="${dy}">${word}</tspan>`;
    });
    textEl += '</text>';
    svg += textEl;
  });

  const dataPts = dimensionScores.map((dim, i) => {
    const p = pointFor(i, dim.score);
    return `${p.x},${p.y}`;
  });
  svg += `<polygon points="${dataPts.join(' ')}" fill="#32a557" fill-opacity="0.22" stroke="#32a557" stroke-width="2.5" />`;

  dimensionScores.forEach((dim, i) => {
    const p = pointFor(i, dim.score);
    svg += `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#28904a" stroke="#ffffff" stroke-width="2" />`;
  });

  svg += '</svg>';
  document.getElementById('radarChartWrap').innerHTML = svg;
}

/* =========================================================
   RESUMO DAS DIMENSÕES
   ========================================================= */
function renderDimensionsSummary(dimensionScores) {
  const wrap = document.getElementById('dimensionsSummary');
  wrap.innerHTML = '';

  dimensionScores.forEach((dim) => {
    const row = document.createElement('div');
    row.className = 'dim-row';
    row.innerHTML = `
      <div class="dim-row-top">
        <div class="dim-row-left">
          <span class="dim-icon">${dim.icon}</span>
          <div>
            <div class="dim-name">${dim.title}</div>
            <div class="dim-score">Pontuação: ${dim.score}%</div>
          </div>
        </div>
        <span class="dim-badge ${dim.level}">${BADGE_LABEL[dim.level]}</span>
      </div>
      <div class="dim-bar-track">
        <div class="dim-bar-fill" style="width:${dim.score}%"></div>
      </div>
    `;
    wrap.appendChild(row);
  });
}

/* =========================================================
   TABELA DE RESPOSTAS
   ========================================================= */
function renderTabelaRespostas(responses) {
  const tbody = document.querySelector('#answersTable tbody');
  tbody.innerHTML = '';

  let contador = 1;
  DIMENSIONS.forEach((dim, dimIdx) => {
    dim.questions.forEach((question, qIdx) => {
      const qId = dimIdx * 2 + qIdx;
      const valor = responses[qId];
      const opcao = SCALE_OPTIONS.find((o) => o.value === valor);

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="col-num">${contador}</td>
        <td class="col-eixo">${dim.icon} ${dim.short}</td>
        <td>${question}</td>
        <td class="col-resposta">${opcao ? opcao.label : '—'}</td>
      `;
      tbody.appendChild(tr);
      contador++;
    });
  });
}

/* =========================================================
   PLANO DE AÇÃO (texto-base + anotação do consultor)
   ========================================================= */
function renderPlanoDeAcao(dimensionScores) {
  const wrap = document.getElementById('planoWrap');
  wrap.innerHTML = '';

  dimensionScores.forEach((dim) => {
    const rec = DETAILED_RECOMMENDATIONS[dim.id][dim.level];

    const card = document.createElement('div');
    card.className = 'card plano-card';
    card.innerHTML = `
      <div class="plano-card-head">
        <h4>${dim.icon} ${dim.title}</h4>
        <span class="dim-badge ${dim.level}">${BADGE_LABEL[dim.level]} · ${dim.score}%</span>
      </div>

      <p class="plano-rec-title">${rec.title}</p>
      <p class="plano-rec-desc">${rec.description}</p>

      <ul class="plano-actions-list">
        ${rec.actions.map((a) => `<li>${a}</li>`).join('')}
      </ul>

      <label class="plano-note-label">Anotações do consultor</label>
      <textarea class="plano-note" placeholder="Escreva aqui observações específicas sobre esta instituição antes de repassar ao cliente..."></textarea>
    `;
    wrap.appendChild(card);
  });
}
