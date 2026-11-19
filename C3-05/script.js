const btnAdv = document.querySelector('.btn-inner-adv');
const rectAdv = document.querySelector('.btn-rect-adv');

btnAdv.addEventListener('click', () => {
  btnAdv.textContent = '読み込み中...';//追加
  rectAdv.classList.remove('active');
  setTimeout(() => {
    rectAdv.classList.add('active');
  }, 10);
});