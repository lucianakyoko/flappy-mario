const groundSprite = new Image();
groundSprite.src = '/sprites/ground-sprite.png'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class Ground {
  constructor() {
    this.sprite = groundSprite;
    this.sourceX = 0;
    this.sourceY= 0;
    this.sourceWidth = 204;
    this.sourceHeight = 77;
    this.x = 0;
    this.y = canvas.height - 77;
    this.width = 204,
    this.height = 77;
  };

  draw() {
    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    ); 

    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      (this.x + this.sourceWidth), this.y,
      this.width, this.height
    ); 
  };

  update() {
    const groundMove = 1;
    const repeatOn = this.sourceWidth / 4;
    const movement = this.x - groundMove;

    this.x = movement % repeatOn;
  };
}