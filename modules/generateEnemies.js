// Генерация Врагов
function generateEnemies(timeOut) {
  const timerId = setInterval(() => {
    new Enemy();
  }, timeOut);

  //   setTimeout(() => {
  //     clearInterval(timerId);
  //   }, 5000);
}

// Рандомизация интервала.
function enemyCreateRandomizer(min, max) {
  return Math.round(min + Math.random() * max);
}
