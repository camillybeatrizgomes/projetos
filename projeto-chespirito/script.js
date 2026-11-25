// Dados originais do React
const characters = [
  {
    id: "chaves",
    name: "Chaves",
    color: "bg-yellow-400",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-400",
    characterImage: "imagens/chaves.webp",
    description: "Chaves é um menino órfão de aproximadamente 8 anos que vive em um barril na vila. Ingênuo, inocente e sempre com fome, ele conquista a todos com seu jeito atrapalhado e seu coração puro. Apesar das dificuldades, mantém uma visão otimista da vida.",
    fullDescription: "Roberto Gómez Bolaños criou Chaves como um personagem que representa a pureza infantil em meio à pobreza. Seu bordão 'Foi sem querer querendo' e sua eterna busca por sanduíches de presunto tornaram-se icônicos na cultura latino-americana.",
    episodes: [
      { title: "A Festa da Boa Vizinhança", year: "1973" },
      { title: "O Aniversário do Quico", year: "1974" },
      { title: "A Escolinha do Professor Girafales", year: "1975" },
      { title: "O Natal de Chaves", year: "1978" },
      { title: "Chaves em Acapulco", year: "1977" }
    ],
    whereToWatch: ["Multishow", "SBT", "Prime Video", "YouTube Oficial"],
    curiosity: "Chaves nunca revelou seu verdadeiro nome na série."
  },
  {
    id: "chapolin",
    name: "Chapolin Colorado",
    color: "bg-red-500",
    textColor: "text-red-600",
    borderColor: "border-red-500",
    characterImage: "imagens/chapolin.webp",
    description: "Chapolin Colorado é o herói mais atrapalhado do México! Com suas anteninhas de vinil, sua marreta biônica e suas pastilhas de mineota, ele sempre aparece quando menos se espera para salvar o dia... ou complicar ainda mais a situação.",
    fullDescription: "O super-herói paródia criado por Chespirito é uma sátira aos heróis americanos. Covarde, desajeitado mas de bom coração, Chapolin sempre tenta fazer o certo, mesmo quando tudo dá errado. Seu grito 'Não contavam com minha astúcia!' é um dos bordões mais famosos da TV.",
    episodes: [
      { title: "Chapolin vs Dr. Cucaracha", year: "1973" },
      { title: "A Múmia", year: "1975" },
      { title: "O Lobisomem", year: "1976" },
      { title: "Tripaseca", year: "1974" },
      { title: "O Abominável Homem das Neves", year: "1977" }
    ],
    whereToWatch: ["Multishow", "SBT", "Prime Video", "YouTube Oficial"],
    curiosity: "O uniforme do Chapolin foi inspirado em um gafanhoto."
  },
  {
    id: "chapatin",
    name: "Dr. Chapatin",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
    characterImage: "imagens/doutor_chapatin.png",
    description: "Dr. Chapatin é um médico idoso e rabugento, sempre carregando sua inseparável sacola de papel. Conhecido por dar 'sacadinhas' com sua bolsa em quem o irrita, ele esconde um coração bondoso por trás de sua aparência mal-humorada.",
    fullDescription: "Um dos personagens mais queridos de Chespirito, Dr. Chapatin representa o idoso que, apesar de parecer irritado com o mundo, guarda uma sabedoria e carinho únicos. Seus sketches geralmente envolvem mal-entendidos cômicos e suas famosas pancadas com a sacola.",
    episodes: [
      { title: "O Médico", year: "1973" },
      { title: "A Consulta", year: "1974" },
      { title: "Dr. Chapatin no Parque", year: "1975" },
      { title: "O Velhinho e a Enfermeira", year: "1976" },
      { title: "Chapatin Apaixonado", year: "1977" }
    ],
    whereToWatch: ["Multishow", "YouTube Oficial", "DVD Colecionador"],
    curiosity: "Dr. Chapatin foi um dos primeiros personagens criados por Chespirito."
  },
  {
    id: "chompiras",
    name: "Chompiras",
    color: "bg-gray-500",
    textColor: "text-gray-600",
    borderColor: "border-gray-500",
    characterImage: "imagens/chompiras.png",
    description: "Chompiras, também conhecido como Chaveco, é um ladrão atrapalhado que forma dupla com o Peterete. Apesar de tentar ser um criminoso, seus planos sempre falham de forma hilária, mostrando que no fundo ele não tem vocação para o crime.",
    fullDescription: "Chompiras representa a paródia do bandido latino-americano. Junto com seu parceiro Peterete (interpretado por Ramón Valdés), ele protagoniza esquetes onde tentam roubar ou enganar pessoas, mas sempre acabam sendo os prejudicados. Sua ingenuidade e falta de jeito para o crime são a fonte de humor.",
    episodes: [
      { title: "O Roubo do Banco", year: "1974" },
      { title: "Os Ladrões Atrapalhados", year: "1975" },
      { title: "Chompiras e Peterete no Bar", year: "1976" },
      { title: "O Sequestro", year: "1977" },
      { title: "A Fuga", year: "1978" }
    ],
    whereToWatch: ["YouTube Oficial", "DVD Colecionador", "Multishow"],
    curiosity: "Chompiras e Chaveco são considerados o mesmo personagem em diferentes fases."
  }
];

let selectedCharacterId = null;

const navContainer = document.getElementById('nav-buttons');
const mainContent = document.getElementById('main-content');

// Renderiza os botões de navegação
function renderNav() {
    navContainer.innerHTML = characters.map(char => {
        const isActive = selectedCharacterId === char.id;
        const activeClass = isActive ? `active ${char.textColor} ${char.borderColor}` : 'border-transparent';
        
        return `
            <button 
                onclick="handleCharacterClick('${char.id}')"
                class="nav-btn ${activeClass}"
            >
                ${char.name}
            </button>
        `;
    }).join('');
}

// Renderiza o Estado Vazio (Welcome)
function renderEmptyState() {
    return `
        <div class="empty-state slide-up">
            <div class="empty-icon-wrapper">
                <i data-lucide="play" width="32" height="32"></i>
            </div>
            <h2 class="empty-title">Escolha um Personagem</h2>
            <p class="empty-desc">
                Clique em um dos personagens acima para descobrir mais sobre sua história, 
                episódios famosos e onde assistir.
            </p>
        </div>
    `;
}

// Renderiza o Personagem Selecionado
function renderCharacter(char) {
    // Background opacity hack for episodes and curiosity using style attribute
    return `
        <div class="character-content slide-up">
            <div class="character-grid">
                
                <div class="char-image-wrapper slide-in-left">
                    <div class="char-glow ${char.color}"></div>
                    <div class="char-img-box ${char.color}">
                        <img src="${char.characterImage}" alt="${char.name}">
                    </div>
                </div>

                <div class="char-info slide-in-right">
                    <h3>Sobre o Personagem</h3>
                    <p>${char.description}</p>
                    <p style="margin-top: 1rem; font-size: 1rem; color: #78716c;">${char.fullDescription}</p>

                    <div class="curiosity-box ${char.borderColor}" style="background-color: var(--${char.color}-light, rgba(255,255,255,0.7));">
                        <div class="curiosity-header">
                            <i data-lucide="star" class="${char.textColor}"></i>
                            <span>Curiosidade</span>
                        </div>
                        <p style="color: #57534e;">${char.curiosity}</p>
                    </div>
                </div>
            </div>

            <div style="opacity: 0; animation: slideUp 0.5s ease-out 0.4s forwards;">
                <div class="section-title-row">
                    <i data-lucide="play" class="${char.textColor}"></i>
                    <h3 class="section-title">Episódios Mais Famosos</h3>
                </div>

                <div class="episodes-grid">
                    ${char.episodes.map((ep, idx) => `
                        <div class="episode-card">
                            <div class="episode-number ${char.color}" style="opacity: 0.8; color: white;">
                                ${idx + 1}
                            </div>
                            <h4 class="episode-title">${ep.title}</h4>
                            <div class="episode-year">
                                <i data-lucide="calendar" width="12"></i>
                                <span>${ep.year}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="opacity: 0; animation: slideUp 0.5s ease-out 0.6s forwards; margin-top: 4rem;">
                <div class="section-title-row">
                    <i data-lucide="tv" class="${char.textColor}"></i>
                    <h3 class="section-title">Onde Assistir</h3>
                </div>
                
                <div class="platforms-flex">
                    ${char.whereToWatch.map(platform => `
                        <div class="platform-pill ${char.borderColor}" style="border-opacity: 0.5;">
                            <i data-lucide="map-pin" class="${char.textColor}"></i>
                            <span>${platform}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Manipulador de Cliques
window.handleCharacterClick = (id) => {
    // Toggle logic: se clicar no mesmo, desseleciona
    if (selectedCharacterId === id) {
        selectedCharacterId = null;
    } else {
        selectedCharacterId = id;
    }

    renderApp();
};

function renderApp() {
    // 1. Atualizar Nav
    renderNav();

    // 2. Atualizar Main Content
    const char = characters.find(c => c.id === selectedCharacterId);
    
    // Pequeno delay visual para simular a desmontagem do React (opcional, mas suave)
    mainContent.innerHTML = char ? renderCharacter(char) : renderEmptyState();

    // 3. Recarregar ícones Lucide (necessário pois o DOM mudou)
    lucide.createIcons();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
});