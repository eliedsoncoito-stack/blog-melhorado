// Filtros
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const posts = document.querySelectorAll('.post');

botoesFiltro.forEach(btn => {
  btn.addEventListener('click', () => {
    botoesFiltro.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');

    const filtro = btn.dataset.filtro;

    posts.forEach(post => {
      if (filtro === 'todos' || post.dataset.anime === filtro) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});

// Botões de curtir
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('curtido');
    if (btn.classList.contains('curtido')) {
      btn.textContent = '❤️ Curtido!';
    } else {
      btn.textContent = '❤️ Curtir';
    }
  });
});

// Smooth scroll para os links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const secao = document.querySelector(id);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
