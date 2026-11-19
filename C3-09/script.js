const colors = ['#0bd', '#f66', '#0c6', '#f83'];
let colorIndex = 0;
const button = document.querySelector('.btn-click-bounce');

button.addEventListener('click', () => {
  button.style.transition = 'translate 0.2s ease, background-color 0.2s ease';
  button.style.translate = '0 -30px';
  button.style.backgroundColor = colors[colorIndex];
  button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';//影つけた

  
  setTimeout(() => button.style.translate = '0', 200);
  colorIndex = (colorIndex + 1) % colors.length;
});