const petalCount = 30;

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 5 + Math.random() * 10 + 's';
  petal.style.animationDelay = Math.random() * 10 + 's';
  petal.style.fontSize = 12 + Math.random() * 20 + 'px';
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
    createPetal();
  }, (parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay)) * 1000);
}

for (let i = 0; i < petalCount; i++) {
  createPetal();
}
