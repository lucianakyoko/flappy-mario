import { frames } from "../../main";

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

    this.currentFrame = 0;
    this.movements = [
      {sourceX: 0, sourceY: 0},
      {sourceX: 0, sourceY: 54},
      {sourceX: 0, sourceY: 108},
      {sourceX: 0, sourceY: 162}
    ];

    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4.6;
  };

  draw() {
    const { sourceX, sourceY } = this.movements[this.currentFrame];
    this.updateFrame();

    ctx.drawImage(
      this.sprite,
      sourceX, sourceY,
      this.sourceWidth, this.sourceHeight,
      this.x, this.y,
      this.width, this.height
    );
  };

  updateFrame() {
    const frameInterval = 20;
    const passedInterval = frames % frameInterval === 0;

    if(passedInterval) {
      const incrementBase = 1;
      const increment = incrementBase + this.currentFrame;
      const repeatBase = this.movements.length;

      this.currentFrame = increment % repeatBase;
    };
  };

};


