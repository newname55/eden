// CLUB EDEN - main.js

document.addEventListener('DOMContentLoaded', () => {
  // フッターの年号を自動更新
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ヘッダーのスクロール時の見た目変化
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
