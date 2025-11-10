document.addEventListener('DOMContentLoaded', () => {
  const helloBtn = document.getElementById('helloBtn');
  const helloText = document.getElementById('helloText');
  const clickCount = document.getElementById('clickCount');
  const toggleBgBtn = document.getElementById('toggleBgBtn');
  const searchInput = document.getElementById('search');
  const searchResult = document.getElementById('searchResult');

  let count = 0;

  helloBtn.addEventListener('click', () => {
    count += 1;
    helloText.textContent = 'Szia!';
    clickCount.textContent = String(count);
  });

  toggleBgBtn.addEventListener('click', () => {
    document.body.classList.toggle('yellow-bg');
    const on = document.body.classList.contains('yellow-bg');
    toggleBgBtn.textContent = on ? 'Háttér: BE' : 'Háttér: KI';
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchResult.textContent = searchInput.value;
    } else if (e.key === 'Escape') {
      searchInput.value = '';
      searchResult.textContent = '';
    }
  });
});