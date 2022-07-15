const startMessageSprite = new Image();
startMessageSprite.src = '/sprites/startMessage-sprite.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class StartMessage {
  constructor() {
    this.sprite = startMessageSprite;
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 199;
    this.sourceHeight = 147.72,
    this.x = (canvas.width / 2) - (this.sourceWidth /2),
    this.y = 50;
    this.width = 240;
    this.height = 178.16;
  };

  draw() {
    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    );
  }
}