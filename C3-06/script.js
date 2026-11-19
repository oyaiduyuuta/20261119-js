const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {
  btnChange.classList.add('done');
  btnChange.textContent = '完了！';
  btnChange.style.backgroundColor = '#28a745';//追加
});