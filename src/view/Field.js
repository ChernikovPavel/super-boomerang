class Field {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  createField() {
    const field = [];
    for (let i = 0; i < this.fieldSize; i++) {
      field.push(new Array(this.fieldSize * 2).fill("\u3000"));
    }
    return field;
  }

  displayField(field, playerPosition, enemies, bullets, userSkin) {
    console.clear();
    const fieldWithEntities = field.map((row, y) =>
      row.map((cell, x) => {
        if (playerPosition.x === x && playerPosition.y === y) {
          return userSkin;
        }
        for (const enemy of enemies) {
          if (enemy.position.x === x && enemy.position.y === y) {
            return enemy.skin;
          }
        }
        for (const bullet of bullets) {
          if (bullet.position.x === x && bullet.position.y === y) {
            return bullet.fire;
          }
        }
        return cell;
      })
    );
    fieldWithEntities.forEach((row) => console.log(row.join(" ")));
  }
}

module.exports = Field;
