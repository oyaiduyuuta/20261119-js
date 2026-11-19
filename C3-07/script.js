const button = document.querySelector('.btn-sparkle');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.backgroundColor = "#ff0";//追加
  
  const size = Math.random() * 6 + 4; 
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  
  const x = Math.random() * button.offsetWidth;
  const y = Math.random() * button.offsetHeight;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  
  button.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

function sparkleEffect() {
  setInterval(createSparkle, 200); //数字変えた
}

sparkleEffect();