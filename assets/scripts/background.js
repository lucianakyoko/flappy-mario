const backgroundSprite = new Image();
backgroundSprite.src = '/sprites/background-sprite.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class Background {
  constructor() {
    this.sprite = backgroundSprite;
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 512;
    this.sourceHeight = 131;
    this.x = 0;
    this.y = canvas.height - (77 + 131);
    this.width = 512;
    this.height = 131;
  };

  draw() {
    ctx.fillStyle = '#C1EBEF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    );
  }
};