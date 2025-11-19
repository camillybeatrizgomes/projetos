/* Carrossel com imagem de fundo (backdrop) diferente da imagem central (poster/banner).
   Cada filme tem: poster (imagem central) e backdrop (fundo hero).
*/
const filmes = [
  {
    title: "Titanic",
    poster: "./imagens/titanic.jpeg",    // imagem central (banner/pôster horizontal)
    backdrop: "./imagens/titanic-backdrop.jpeg" // imagem idealizada para fundo (exemplo)
  },
  {
    title: "O Rei Leão",
    poster: "./imagens/rei_leao.jpg",
    backdrop: "./imagens/rei_leao-backdrop.jpg"
  },
  {
    title: "Cantando na Chuva",
    poster: "./imagens/cantando-na-chuva.jpg",
    backdrop: "./imagens/cantando-na-chuva-backdrop.jpg"
  }
];

// OBS: alguns backdrops são exemplos — você pode trocar por backdrops oficiais específicos.
// Caso queira eu busco backdrops ideais para cada filme.

let idx = 0;
const hero = document.getElementById('hero');
const posterEl = document.getElementById('heroPoster');
const heroTitle = document.getElementById('heroTitle'); // novo
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const themeToggle = document.getElementById('themeToggle');

// Adicione transição suave ao fundo e poster
hero.style.transition = 'background-image 0.6s cubic-bezier(.4,0,.2,1)';
posterEl.style.transition = 'opacity 0.5s';

// atualiza hero com poster diferente do fundo
function updateHero() {
  const f = filmes[idx];
  posterEl.style.opacity = 0;
  heroTitle.style.opacity = 0;
  setTimeout(() => {
    hero.style.backgroundImage = `url('${f.backdrop}')`;
    posterEl.src = f.poster;
    posterEl.alt = `Poster do filme ${f.title}`;
    heroTitle.textContent = f.title; // Certifique-se que é 'title'
    posterEl.style.opacity = 1;
    heroTitle.style.opacity = 1;
  }, 250);
}

// navegação
nextBtn.addEventListener('click', () => {
  idx = (idx + 1) % filmes.length;
  updateHero();
});

prevBtn.addEventListener('click', () => {
  idx = (idx - 1 + filmes.length) % filmes.length;
  updateHero();
});

// tema escuro (salvar em localStorage)
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('tema', dark ? 'escuro' : 'claro');
  themeToggle.textContent = dark ? '☀️' : '🌙';
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Scroll suave para links de navegação — seleciona links reais do projeto
const navLinks = document.querySelectorAll('.nav-list a, .mobile-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      // fecha menu mobile se aberto
      if (mobileMenu) mobileMenu.classList.remove('open');
    }
  });
});

// inicia
updateHero();
