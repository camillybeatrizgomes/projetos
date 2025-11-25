// Função para filtrar os cards de receita por categoria
function filtrarReceitas(categoria) {
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach(card => {
    const badge = card.querySelector('.badge');
    if (categoria === 'Todas' || badge.textContent === categoria) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Adiciona evento aos botões de categoria
const botoes = document.querySelectorAll('.category');
botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    // Remove classe 'active' de todos os botões
    botoes.forEach(b => b.classList.remove('active'));
    // Adiciona classe 'active' ao botão clicado
    this.classList.add('active');
    // Filtra receitas pela categoria
    const textoCategoria = this.textContent.trim().replace(/^[^\w]+/, '');
    filtrarReceitas(textoCategoria);
  });
});

// Exibe todas as receitas ao carregar a página
filtrarReceitas('Todas');

// === DADOS DAS RECEITAS (adicione ou edite livremente) ===
const receitas = {
  "Moqueca de Peixe": {
    imagem: "images/moqueca-de-peixe.jpg",
    categoria: "Almoço",
    tempo: "60 min",
    porcoes: "6 porções",
    dificuldade: "Médio",
    descricao: "Moqueca capixaba aromática com peixe fresco, tomates e coentro.",
    ingredientes: [
      "1kg de peixe em postas",
      "3 tomates maduros",
      "2 cebolas",
      "1 pimentão verde",
      "1 maço de coentro",
      "200ml de leite de coco"
    ],
    preparo: [
      "Tempere o peixe com limão, sal e pimenta.",
      "Em uma panela de barro, faça camadas de cebola, tomate e pimentão.",
      "Adicione o peixe e regue com leite de coco.",
      "Cozinhe por aproximadamente 20 minutos.",
      "Finalize com coentro fresco."
    ]
  },

  "Escondidinho de Carne Seca": {
    imagem: "images/Escondidinho-de-carne-seca.webp",
    categoria: "Jantar",
    tempo: "90 min",
    porcoes: "6 porções",
    dificuldade: "Médio",
    descricao: "Purê cremoso com carne seca desfiada e queijo gratinado.",
    ingredientes: [
      "500g de carne seca",
      "1kg de mandioca",
      "1 cebola picada",
      "100g de queijo mussarela",
      "50g de manteiga"
    ],
    preparo: [
      "Cozinhe a mandioca e amasse com manteiga.",
      "Refogue a carne seca com cebola.",
      "Monte camadas de purê e carne.",
      "Cubra com queijo e leve ao forno para gratinar."
    ]
  },

  "Frango Assado": {
    imagem: "images/frango-assado.webp",
    categoria: "Almoço",
    tempo: "80 min",
    porcoes: "4 porções",
    dificuldade: "Fácil",
    descricao: "Frango assado crocante com ervas aromáticas e acompanhamento de legumes.",
    ingredientes: [
      "1 frango inteiro",
      "2 dentes de alho",
      "1 ramo de alecrim",
      "Sal e pimenta a gosto",
      "Legumes variados para acompanhar"
    ],
    preparo: [
        "Tempere o frango com alho, alecrim, sal e pimenta.",
        "Asse o frango em forno pré-aquecido a 200°C por cerca de 80 minutos.",
        "Prepare os legumes como acompanhamento."
    ]
  },

  "Brigadeiro Gourmet": {
    imagem: "images/brigadeiro-gourmet.jpg",
    categoria: "Sobremesas",
    tempo: "30 min",
    porcoes: "30 porções",
    dificuldade: "Fácil",
    descricao: "O clássico brigadeiro brasileiro com acabamento refinado e cobertura de chocolate belga.",
    ingredientes: [
        "1 lata de leite condensado",
        "2 colheres de sopa de cacau em pó",
        "1 colher de sopa de manteiga",
        "Granulado de chocolate belga para decorar"
    ],
    preparo: [
        "Em uma panela, misture o leite condensado, o cacau em pó e a manteiga.",
        "Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela.",
        "Deixe esfriar, faça bolinhas e passe no granulado de chocolate belga."
    ]
  },

  "Pudim de Leite Condensado": {
    imagem: "images/pudim-de-leite-condensado.webp",
    categoria: "Sobremesas",
    tempo: "90 min",
    porcoes: "10 porções",
    dificuldade: "Médio",
    descricao: "Pudim cremoso com calda de caramelo, sobremesa perfeita para qualquer ocasião.",
    ingredientes: [
        "1 lata de leite condensado",
        "2 latas de leite (use a lata de leite condensado)",
        "3 ovos",
        "1 xícara de açúcar para a calda"
    ],
    preparo: [
        "Faça a calda caramelizando o açúcar em uma forma.",
        "Bata no liquidificador leite condensado, leite e ovos.",
        "Despeje sobre a calda.",
        "Asse em banho-maria por 60 minutos a 180°C.",
        "Deixe esfriar e leve à geladeira por 4 horas.",
        "Desenforme gelado e sirva."
    ]
  },

  "Coxinha de Frango": {
    imagem: "images/coxinha-de-frango.jpg",
    categoria: "Lanches",
    tempo: "90 min",
    porcoes: "30 porções",
    dificuldade: "Difícil",
    descricao: "Salgado brasileiro clássico com recheio cremoso de frango desfiado.",
    ingredientes: [
        "500g de frango cozido e desfiado",
        "2 xícaras de caldo de galinha",
        "2 xícaras de farinha de trigo",
        "2 colheres de manteiga",
        "1 cebola",
        "Farinha de rosca",
        "2 ovos batidos",
        "Óleo para fritar"
    ],
    preparo: [
        "Refogue o frango com cebola e temperos.",
        "Ferva o caldo com manteiga e adicione a farinha de uma vez.",
        "Mexa até formar uma massa lisa e deixe esfriar.",
        "Abra porções da massa, recheie com frango e modele.",
        "Passe no ovo e na farinha de rosca.",
        "Frite em óleo quente até dourar."
    ]
  },

  "Pastel de Feira": {
    imagem: "images/pastel-de-feira.jpg",
    categoria: "Lanches",
    tempo: "45 min",
    porcoes: "30 porções",
    dificuldade: "Médio",
    descricao: "Pastel crocante recheado com queijo e presunto, tradicional das feiras brasileiras.",
    ingredientes: [
        "500g de farinha de trigo",
        "1 ovo",
        "2 colheres de sopa de óleo",
        "1 xícara de água",
        "Sal a gosto",
        "200g de queijo mussarela",
        "200g de presunto",
        "Óleo para fritar"
    ],
    preparo: [
        "Misture farinha, ovo, óleo, água e sal até formar uma massa.",
        "Deixe descansar por 30 minutos.",
        "Abra a massa bem fina e corte retângulos.",
        "Recheie com queijo e presunto.",
        "Feche bem as bordas com um garfo.",
        "Frite em óleo quente até dourar."
    ]
  },

  "Pão de Queijo Mineiro": {
    imagem: "images/Pao-de-queijo.webp",
    categoria: "Café da Manhã",
    tempo: "40 min",
    porcoes: "20 porções",
    dificuldade: "Fácil",
    descricao: "O autêntico pão de queijo mineiro, crocante por fora e macio por dentro, perfeito para o café da manhã.",
    ingredientes: [
        "500g de polvilho azedo",
        "300ml de leite",
        "100ml de óleo",
        "2 ovos",
        "200g de queijo minas curado ralado",
        "1 colher de chá de sal"
    ],
    preparo: [
        "Ferva o leite com o óleo e o sal.",
        "Despeje sobre o polvilho e misture bem até formar uma massa homogênea.",
        "Deixe esfriar um pouco e adicione os ovos um a um, misturando bem.",
        "Acrescente o queijo ralado e misture.",
        "Faça bolinhas com as mãos untadas com óleo.",
        "Asse em forno pré-aquecido a 180°C por 30-35 minutos até dourar."
    ]
  },

};


// === MODAL ===
const modal = document.getElementById("recipe-modal");
const closeBtn = document.getElementById("close-modal");

// Abrir modal ao clicar no card
document.querySelectorAll(".recipe-card").forEach(card => {
  card.addEventListener("click", () => {
    const titulo = card.querySelector("h3").textContent;
    const receita = receitas[titulo];

    if (!receita) return;

    document.querySelector(".modal-title").textContent = titulo;
    document.querySelector(".modal-badge").textContent = receita.categoria;
    document.querySelector(".modal-time").textContent = "⏱️ " + receita.tempo;
    document.querySelector(".modal-servings").textContent = "👤 " + receita.porcoes;
    document.querySelector(".modal-difficulty").textContent = "🔥 " + receita.dificuldade;
    document.querySelector(".modal-description").textContent = receita.descricao;

    // Fundo da imagem
    document.querySelector(".modal-header").style.backgroundImage =
      `url(${receita.imagem})`;

    // Ingredientes
    const ingList = document.querySelector(".modal-ingredients");
    ingList.innerHTML = "";
    receita.ingredientes.forEach(item => {
      ingList.innerHTML += `<li>${item}</li>`;
    });

    // Preparo
    const prepList = document.querySelector(".modal-steps");
    prepList.innerHTML = "";
    receita.preparo.forEach(p => {
      prepList.innerHTML += `<li>${p}</li>`;
    });

    modal.style.display = "flex";
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
