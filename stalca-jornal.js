
/*
 * STALCA NEWS — O Giro da Gestão
 * Seção institucional interativa
 * Não modifica o restante do site.
 */

(() => {
  "use strict";

  if (document.getElementById("stalca-jornal")) return;

  const noticias = [
    {
      icone: "👥",
      categoria: "PESSOAS & RH",
      titulo: "Cuidar de pessoas também faz parte da gestão.",
      resumo:
        "O RH da Stalca acompanha mudanças trabalhistas e orienta colaboradores e condomínios nas rotinas do dia a dia.",
      detalhes:
        "Das orientações aos colaboradores à organização documental, nossa equipe trabalha para manter as rotinas de pessoal mais claras e organizadas.",
      destaques: [
        "Orientação aos colaboradores",
        "Acompanhamento das mudanças trabalhistas",
        "Apoio às rotinas de Recursos Humanos"
      ]
    },
    {
      icone: "🧾",
      categoria: "CONTAS A PAGAR",
      titulo: "Cada documento merece atenção.",
      resumo:
        "Fornecedores, notas fiscais, vencimentos e atenção às mudanças da reforma tributária.",
      detalhes:
        "O departamento acompanha documentos e pagamentos, orienta fornecedores quanto aos procedimentos e observa mudanças tributárias que possam impactar a administração condominial.",
      destaques: [
        "Organização de pagamentos e vencimentos",
        "Solicitação e conferência de notas fiscais",
        "Acompanhamento das novidades tributárias"
      ]
    },
    {
      icone: "📚",
      categoria: "PRESTAÇÃO DE CONTAS",
      titulo: "Transparência que você consegue consultar.",
      resumo:
        "Prestação de contas online e documentação física, conforme os procedimentos de cada condomínio.",
      detalhes:
        "A Stalca organiza os documentos financeiros para facilitar a conferência das movimentações. As informações ficam disponíveis na Área do Condômino, conforme as permissões de acesso.",
      destaques: [
        "Consulta online pelo sistema",
        "Documentação de suporte",
        "Organização para conferência física"
      ]
    },
    {
      icone: "📨",
      categoria: "BOLETOS & COBRANÇAS",
      titulo: "Informação acessível, atendimento próximo.",
      resumo:
        "Orientações sobre boletos, segunda via e acompanhamento das cobranças condominiais.",
      detalhes:
        "Um dos departamentos mais procurados da Stalca orienta proprietários e acompanha as rotinas de cobrança. A segunda via pode ser consultada na Área do Condômino.",
      destaques: [
        "Orientações sobre boletos",
        "Segunda via na Área do Condômino",
        "Acompanhamento das cobranças"
      ]
    },
    {
      icone: "🚀",
      categoria: "EVOLUÇÃO STALCA",
      titulo: "Experiência para continuar evoluindo.",
      resumo:
        "Tradição, tecnologia e aprendizado constante para aprimorar a administração de condomínios.",
      detalhes:
        "Desde 1989, a Stalca constrói sua trajetória valorizando a proximidade com as pessoas. Continuamos buscando processos melhores, soluções tecnológicas e um atendimento responsável.",
      destaques: [
        "Melhoria contínua dos processos",
        "Tecnologia a serviço das pessoas",
        "Propostas personalizadas"
      ]
    }
  ];

  const estilo = document.createElement("style");

  estilo.textContent = `
    #stalca-jornal {
      --azul: #071a3e;
      --azul-claro: #1554ae;
      color: #102b4f;
      background: linear-gradient(
        180deg,
        #f7fbff 0%,
        #eaf3ff 100%
      );
      padding: 85px 0;
    }

    #stalca-jornal * {
      box-sizing: border-box;
    }

    #stalca-jornal .j-container {
      width: min(1180px, calc(100% - 36px));
      margin: auto;
    }

    #stalca-jornal .j-etiqueta {
      font-family: Arial, sans-serif;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 3px;
      color: #2566b1;
      text-transform: uppercase;
    }

    #stalca-jornal .j-cabecalho {
      display: grid;
      grid-template-columns: 1.3fr 0.7fr;
      align-items: end;
      gap: 24px;
      margin: 18px 0 30px;
    }

    #stalca-jornal .j-titulo {
      font-family: Georgia, serif;
      font-size: clamp(40px, 6vw, 76px);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -2px;
      margin: 0;
      color: #071a3e;
    }

    #stalca-jornal .j-titulo em {
      color: #1665bd;
    }

    #stalca-jornal .j-subtitulo {
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.7;
      color: #47617e;
    }

    #stalca-jornal .j-plantao {
      display: flex;
      background: #071a3e;
      border-radius: 14px;
      overflow: hidden;
      color: white;
      margin-bottom: 24px;
      box-shadow: 0 12px 30px #09255320;
    }

    #stalca-jornal .j-plantao-label {
      background: #1d66c3;
      padding: 16px 20px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      white-space: nowrap;
    }

    #stalca-jornal .j-faixa {
      overflow: hidden;
      display: flex;
      align-items: center;
      min-width: 0;
    }

    #stalca-jornal .j-faixa-texto {
      display: flex;
      gap: 45px;
      width: max-content;
      white-space: nowrap;
      animation: stalca-rolagem 35s linear infinite;
      font-family: Arial, sans-serif;
      font-size: 13px;
      font-weight: 700;
      padding: 16px 25px;
    }

    #stalca-jornal .j-plantao:hover .j-faixa-texto {
      animation-play-state: paused;
    }

    @keyframes stalca-rolagem {
      to {
        transform: translateX(-50%);
      }
    }

    #stalca-jornal .j-layout {
      display: grid;
      grid-template-columns: 1.07fr 0.93fr;
      gap: 20px;
    }

    #stalca-jornal .j-principal {
      background: #071a3e;
      color: white;
      border-radius: 24px;
      padding: clamp(25px, 4vw, 45px);
      display: flex;
      flex-direction: column;
      min-height: 460px;
      position: relative;
      overflow: hidden;
    }

    #stalca-jornal .j-principal::after {
      content: "";
      position: absolute;
      width: 300px;
      height: 300px;
      border: 1px solid #71b8ff35;
      border-radius: 50%;
      right: -140px;
      bottom: -130px;
      pointer-events: none;
      box-shadow:
        0 0 0 45px #ffffff07,
        0 0 0 95px #ffffff05;
    }

    #stalca-jornal .j-categoria {
      color: #a5d3ff;
      font-size: 12px;
      font-weight: 850;
      letter-spacing: 2px;
    }

    #stalca-jornal .j-manchete {
      font-family: Georgia, serif;
      font-size: clamp(30px, 3.6vw, 49px);
      line-height: 1.12;
      color: white;
      margin: 22px 0 15px;
    }

    #stalca-jornal .j-resumo {
      color: #d5e6f9;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.7;
      margin: 0;
    }

    #stalca-jornal .j-detalhes {
      color: #e4f1ff;
      font-size: 14px;
      line-height: 1.7;
      margin: 22px 0;
      font-family: Arial, sans-serif;
    }

    #stalca-jornal .j-detalhes ul {
      padding-left: 20px;
      margin-top: 12px;
    }

    #stalca-jornal .j-rodape-card {
      margin-top: auto;
      padding-top: 25px;
      border-top: 1px solid #ffffff30;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      color: #a5d3ff;
      font-size: 12px;
      font-weight: 700;
    }

    #stalca-jornal .j-lista {
      display: grid;
      gap: 10px;
    }

    #stalca-jornal .j-item {
      width: 100%;
      display: grid;
      grid-template-columns: 48px 1fr auto;
      gap: 15px;
      align-items: center;
      text-align: left;
      background: white;
      color: #071a3e;
      border: 1px solid #d8e5f4;
      border-radius: 17px;
      padding: 17px;
      cursor: pointer;
      transition: 0.2s ease;
      font-family: Arial, sans-serif;
    }

    #stalca-jornal .j-item:hover {
      transform: translateY(-2px);
      border-color: #69a5ea;
    }

    #stalca-jornal .j-item[aria-pressed="true"] {
      background: #e8f3ff;
      border-color: #2472ca;
      box-shadow: inset 4px 0 0 #2472ca;
    }

    #stalca-jornal .j-icone {
      display: grid;
      place-items: center;
      background: #eaf3ff;
      width: 48px;
      height: 48px;
      border-radius: 13px;
      font-size: 23px;
    }

    #stalca-jornal .j-item-categoria {
      color: #3372b4;
      font-size: 10px;
      font-weight: 850;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 6px;
    }

    #stalca-jornal .j-item-titulo {
      display: block;
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }

    #stalca-jornal .j-seta {
      color: #4483c8;
      font-size: 24px;
    }

    #stalca-jornal .j-chamada {
      background: white;
      border: 1px solid #d8e5f4;
      border-radius: 21px;
      padding: 30px;
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
    }

    #stalca-jornal .j-chamada h3 {
      color: #071a3e;
      font-family: Georgia, serif;
      font-size: clamp(22px, 2.7vw, 30px);
      line-height: 1.2;
      margin: 0 0 10px;
    }

    #stalca-jornal .j-chamada p {
      color: #506782;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }

    #stalca-jornal .j-botao {
      background: #1557ae;
      color: white;
      border: none;
      border-radius: 100px;
      padding: 16px 24px;
      font-size: 14px;
      font-weight: 750;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.2s;
    }

    #stalca-jornal .j-botao:hover {
      background: #0b3575;
    }

    #stalca-jornal button:focus-visible {
      outline: 3px solid #29a5ff;
      outline-offset: 3px;
    }

    #stalca-jornal .j-aviso {
      font-size: 11px;
      color: #607790;
      line-height: 1.5;
      margin-top: 14px;
    }

    @media (max-width: 800px) {
      #stalca-jornal .j-cabecalho,
      #stalca-jornal .j-layout {
        grid-template-columns: 1fr;
      }

      #stalca-jornal .j-principal {
        min-height: 400px;
      }

      #stalca-jornal .j-chamada {
        flex-direction: column;
        align-items: flex-start;
      }

      #stalca-jornal .j-plantao {
        flex-direction: column;
      }

      #stalca-jornal .j-plantao-label {
        text-align: center;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #stalca-jornal .j-faixa-texto {
        animation: none;
        white-space: normal;
        flex-wrap: wrap;
      }

      #stalca-jornal .j-item {
        transition: none;
      }
    }
  `;

  const secao = document.createElement("section");

  secao.id = "stalca-jornal";

  secao.setAttribute(
    "aria-labelledby",
    "jornal-titulo"
  );

  const chamadas = [
    "RH: orientação e acompanhamento",
    "✦",
    "Contas a pagar: atenção aos documentos",
    "✦",
    "Prestação de contas: clareza e acesso",
    "✦",
    "Boletos: segunda via na Área do Condômino",
    "✦"
  ];

  function escapar(texto) {
    return String(texto).replace(
      /[&<>"']/g,
      caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[caractere]
    );
  }

  const faixaTexto = chamadas
    .concat(chamadas)
    .map(texto => `<span>${escapar(texto)}</span>`)
    .join("");

  const listaNoticias = noticias
    .map((noticia, indice) => `
      <button
        class="j-item"
        type="button"
        data-noticia="${indice}"
        aria-pressed="${indice === 0}"
      >
        <span class="j-icone" aria-hidden="true">
          ${noticia.icone}
        </span>

        <span>
          <span class="j-item-categoria">
            ${escapar(noticia.categoria)}
          </span>

          <span class="j-item-titulo">
            ${escapar(noticia.titulo)}
          </span>
        </span>

        <span class="j-seta" aria-hidden="true">›</span>
      </button>
    `)
    .join("");

  secao.innerHTML = `
    <div class="j-container">

      <div class="j-etiqueta">
        BOLETIM INSTITUCIONAL · STALCA EM MOVIMENTO
      </div>

      <div class="j-cabecalho">
        <h2 class="j-titulo" id="jornal-titulo">
          O giro da <em>gestão.</em>
        </h2>

        <p class="j-subtitulo">
          Por trás de cada condomínio existem pessoas,
          documentos e decisões. Conheça quem faz a
          administração acontecer.
        </p>
      </div>

      <div class="j-plantao" aria-label="Destaques dos serviços">
        <span class="j-plantao-label">
          ● EM DESTAQUE
        </span>

        <div class="j-faixa">
          <div class="j-faixa-texto" aria-hidden="true">
            ${faixaTexto}
          </div>
        </div>
      </div>

      <div class="j-layout">

        <article
          class="j-principal"
          aria-live="polite"
          aria-atomic="true"
        >
          <span class="j-categoria" id="j-categoria"></span>

          <h3 class="j-manchete" id="j-manchete"></h3>

          <p class="j-resumo" id="j-resumo"></p>

          <div class="j-detalhes" id="j-detalhes"></div>

          <div class="j-rodape-card">
            <span>Stalca ao lado do seu condomínio</span>
            <span id="j-pagina"></span>
          </div>
        </article>

        <div class="j-lista" role="group"
             aria-label="Conheça nossos departamentos">
          ${listaNoticias}
        </div>

      </div>

      <div class="j-chamada">
        <div>
          <h3>
            Sem quebrar a cabeça:
            traga seu condomínio para a Stalca.
          </h3>

          <p>
            Gestão Completa, Gestão Compartilhada
            ou Somente Prestação de Contas.
            Solicite uma proposta personalizada.
          </p>
        </div>

        <button
          class="j-botao"
          type="button"
          id="j-proposta"
        >
          Quero uma proposta →
        </button>
      </div>

      <p class="j-aviso">
        Conteúdo institucional sobre serviços e rotinas.
        As manchetes não representam notícias em tempo real.
      </p>

    </div>
  `;

  function mostrarNoticia(indice) {
    const noticia = noticias[indice];

    secao.querySelector("#j-categoria").textContent =
      noticia.categoria;

    secao.querySelector("#j-manchete").textContent =
      noticia.titulo;

    secao.querySelector("#j-resumo").textContent =
      noticia.resumo;

    const detalhes = secao.querySelector("#j-detalhes");

    detalhes.replaceChildren();

    const paragrafo = document.createElement("p");
    paragrafo.textContent = noticia.detalhes;
    detalhes.appendChild(paragrafo);

    const lista = document.createElement("ul");

    noticia.destaques.forEach(texto => {
      const item = document.createElement("li");
      item.textContent = texto;
      lista.appendChild(item);
    });

    detalhes.appendChild(lista);

    secao.querySelector("#j-pagina").textContent =
      `${String(indice + 1).padStart(2, "0")} / 05`;

    secao.querySelectorAll("[data-noticia]").forEach(botao => {
      botao.setAttribute(
        "aria-pressed",
        String(Number(botao.dataset.noticia) === indice)
      );
    });
  }

  // Insere a nova seção antes da área de contato.
  const destino =
    document.querySelector("section#contato") ||
    document.querySelector("footer");

  if (!destino) return;

  document.head.appendChild(estilo);
  destino.before(secao);

  // Manchetes clicáveis.
  secao.querySelectorAll("[data-noticia]").forEach(botao => {
    botao.addEventListener("click", () => {
      mostrarNoticia(Number(botao.dataset.noticia));
    });
  });

  // Aproveita o formulário comercial já existente.
  secao.querySelector("#j-proposta").addEventListener(
    "click",
    () => {
      const botaoExistente =
        document.querySelector(".open-proposal");

      if (botaoExistente) {
        botaoExistente.click();
      } else {
        document.querySelector("#contato")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  );

  mostrarNoticia(0);
})();
