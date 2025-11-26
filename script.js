const items = document.querySelectorAll('.item');
const popup = document.getElementById('popup');

items.forEach(item => {
    item.style.pointerEvents = 'auto';

  item.addEventListener('mouseenter', (e) => {
    const info = e.target.dataset.info;
    if (!info) return;
    popup.textContent = info;
    popup.style.display = 'block';
  });

  item.addEventListener('mousemove', (e) => {
    popup.style.left = e.pageX + 'px';
    popup.style.top = (e.pageY - 50) + 'px'; // popup juste au-dessus du curseur
  });

  item.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
});
