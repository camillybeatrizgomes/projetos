const versiculos = [
  {
    id: 1,
    texto: "O Senhor é o meu pastor; nada me faltará.",
    referencia: "Salmos 23:1",
    imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    id: 2,
    texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
    referencia: "João 3:16",
    imagem: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80"
  },
  {
    id: 3,
    texto: "Tudo posso naquele que me fortalece.",
    referencia: "Filipenses 4:13",
    imagem: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80"
  },
  {
    id: 4,
    texto: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    referencia: "Provérbios 3:5",
    imagem: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
  },
  {
    id: 5,
    texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.",
    referencia: "Isaías 41:10",
    imagem: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
  },
  {
    id: 6,
    texto: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    referencia: "1 Tessalonicenses 5:18",
    imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800"
  },
  {
    id: 7,
    texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.",
    referencia: "1 Coríntios 13:4",
    imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
  },
  {
    id: 8,
    texto: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça.",
    referencia: "Mateus 6:33",
    imagem: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80"
  },
  {
    id: 9,
    texto: "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei.",
    referencia: "Apocalipse 3:20",
    imagem: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80"
  },
  {
    id: 10,
    texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
    referencia: "Salmos 37:5",
    imagem: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
  },
  {
    id: 11,
    texto: "O Senhor é a minha luz e a minha salvação; de quem terei medo?",
    referencia: "Salmos 27:1",
    imagem: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
  },
  {
    id: 12,
    texto: "O Senhor está perto de todos os que o invocam.",
    referencia: "Salmos 145:18",
    imagem: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=800"
  },
  {
    id: 13,
    texto: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
    referencia: "Salmos 119:105",
    imagem: "https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=800"
  },
  {
    id: 14,
    texto: "O Senhor te guardará de todo mal; guardará a tua alma.",
    referencia: "Salmos 121:7",
    imagem: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800"
  },
  {
    id: 15,
    texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
    referencia: "Salmos 37:5",
    imagem: "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?q=80&w=800"
  }
];

let copiedId = null;

const grid = document.getElementById("versiculos-grid");

function render() {
  grid.innerHTML = "";

  versiculos.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-img-box">
        <img src="${v.imagem}" alt="${v.referencia}">
        <div class="overlay">
          <p>"${v.texto}"</p>
          <small>— ${v.referencia}</small>
        </div>
      </div>

      <div class="buttons">
        <button class="btn btn-copy" data-id="${v.id}">
          <i data-lucide="copy"></i> Copiar
        </button>

        <button class="btn btn-download" data-download="${v.id}">
          <i data-lucide="download"></i> Baixar
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  lucide.createIcons(); // aplica os ícones
}

render();

/* COPIAR */
document.addEventListener("click", e => {
  if (e.target.closest(".btn-copy")) {
    const id = Number(e.target.closest(".btn-copy").dataset.id);
    const v = versiculos.find(v => v.id === id);

    const texto = `"${v.texto}" - ${v.referencia}`;
    navigator.clipboard.writeText(texto);

    const btn = e.target.closest(".btn-copy");
    btn.innerHTML = `<i data-lucide="check"></i> Copiado!`;
    lucide.createIcons();

    setTimeout(() => render(), 2000);
  }
});

/* DOWNLOAD */
document.addEventListener("click", e => {
  const btn = e.target.closest("[data-download]");
  if (!btn) return;

  const id = Number(btn.dataset.download);
  const v = versiculos.find(v => v.id === id);

  downloadImage(v);
});

function downloadImage(versiculo) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "anonymous";

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = Math.floor(canvas.width / 20);
    ctx.font = `bold ${fontSize}px Georgia, serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;

    // Quebra de linhas
    const words = versiculo.texto.split(" ");
    const lines = [];
    let line = "";
    const maxWidth = canvas.width * 0.8;

    words.forEach(w => {
      const test = line + w + " ";
      if (ctx.measureText(test).width > maxWidth) {
        lines.push(line.trim());
        line = w + " ";
      } else {
        line = test;
      }
    });
    lines.push(line.trim());

    const lineHeight = fontSize * 1.4;
    const startY = (canvas.height - lines.length * lineHeight) / 2;

    lines.forEach((l, i) => {
      ctx.fillText(`"${l}"`, canvas.width / 2, startY + i * lineHeight);
    });

    ctx.font = `italic ${fontSize * 0.7}px Georgia, serif`;
    ctx.fillText(`— ${versiculo.referencia}`, canvas.width / 2, startY + lines.length * lineHeight + fontSize);

    const a = document.createElement("a");
    a.download = `versiculo-${versiculo.referencia.replace(/[:\s]/g, "-")}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  img.src = versiculo.imagem;
}
