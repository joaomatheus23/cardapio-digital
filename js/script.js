// Grão & Brasa — comportamento da navegação mobile e do filtro de cardápio.
// Vanilla JS, sem dependências externas.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu de navegação (mobile) ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  });

  // Fecha o menu ao clicar em um link (útil em telas pequenas)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Filtro de categorias do cardápio ---------- */
  const tabs = document.querySelectorAll('.tab');
  const items = document.querySelectorAll('.menu-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const categoria = tab.dataset.cat;

      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      items.forEach(item => {
        item.hidden = item.dataset.cat !== categoria;
      });
    });
  });

  /* ---------- Formulário de contato (validação simples, sem backend) ---------- */
  const form = document.querySelector('.contato-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
      alert('Mensagem recebida! Este é um projeto de estudo, então nada foi enviado de verdade — mas o formulário funciona.');
    });
  }
});
