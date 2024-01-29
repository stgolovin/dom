document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');

  let currentCell = null;

  // Функция для создания изображения гоблина
  function createGoblin() {
    const goblin = document.createElement('img');
    goblin.src = '../pic/goblin.png';
    goblin.classList.add('goblin-img');
    return goblin;
  }
  const goblinImg = createGoblin();

  // Создаем и добавляем ячейки поля
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameBoard.appendChild(cell);
  }

  // Функция для рандомного перемещения гоблина
  function moveGoblin() {
    setInterval(() => {
      const randomCellIndex = Math.floor(Math.random() * 4);
      const cells = document.querySelectorAll('.cell');
      const randomCell = cells[randomCellIndex];

      // Проверяем, что randomCell существует, прежде чем добавить изображение гнома
      if (randomCell) {
        if (currentCell) {
          // Возвращаем изображение гнома в предыдущую ячейку
          currentCell.appendChild(goblinImg);
        }

        // Перемещаем изображение гнома в новую ячейку
        randomCell.appendChild(goblinImg);

        // Обновляем текущую ячейку
        currentCell = randomCell;
      }
    }, 1000);
  }
  moveGoblin();
});
