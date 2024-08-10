class Field {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  createField() {
    const field = [];
    for (let i = 0; i < this.fieldSize; i++) {
      field.push(new Array(this.fieldSize ).fill("\u3000"));
    }
    return field;
  }

  displayField(field, playerPosition, enemies, bullets, userSkin) {
    console.clear();
    const fieldWithEntities = field.map((row, y) =>
      row.map((cell, x) => {
        if (playerPosition.x === y && playerPosition.y ===  x) {
          return userSkin;
        }
        for (const enemy of enemies) {
          if (enemy.position.x === y && enemy.position.y === x) {
            return enemy.skin;
          }
        }
        for (const bullet of bullets) {
          if (bullet.position.x === y && bullet.position.y === x) {
            return bullet.fire;
          }
        }
        return cell;
      })
    );
    fieldWithEntities.forEach((row) => console.log(row.reverse().join(" ")));
  }
}

module.exports = Field;
