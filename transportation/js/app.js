document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  Layout.init();
  Utils.hideLoader();
});

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-overlay');
    if (loader) loader.classList.add('hidden');
  });
}
