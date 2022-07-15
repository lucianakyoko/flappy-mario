import { passedTimes } from "./pipes";

const gameoverSprite = new Image();
gameoverSprite.src = '/sprites/gameOver-sprite.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class Gameover {
  constructor() {
    this.sprite = gameoverSprite;
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 226;
    this.sourceHeight = 204,
    this.x = (canvas.width /2) - (226 / 2);
    this.y = 50;
    this.width = 226;
    this.height = 204;
  };

  draw() {
    ctx.drawImage(
      this.sprite,
      this.sourceX, this.sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    );
    ctx.font = '40px "VT323"';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${passedTimes}`, canvas.width/ 2 + 5, 140);
  };
}