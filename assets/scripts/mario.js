
const marioSprite = new Image();
marioSprite.src = './assets/sprites/mario-sprite.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class Mario {
  constructor() {
    this.sprite = marioSprite;
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 48;
    this.sourceHeight = 54;
    this.x = 10;
    this.y = 50;
    this.width = 32;
    this.height = 36.77;
  };

  draw() {
    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    );
  };

}