const button = document.querySelector('.btn-circle');

button.addEventListener('click', () => {
  button.classList.add('fast-spin');
  button.style.color = 'rgb(239, 247, 90)';//色つけた

  setTimeout(() => {
    button.classList.remove('fast-spin');
  }, 2000); //数字大きくした
});