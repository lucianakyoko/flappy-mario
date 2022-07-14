import { passedTimes } from "./pipes";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export class Score {
  constructor() {
    this.scoreNumber = 0;
  }

  draw() {
    ctx.font = '40px "VT323"';
    ctx.textAlign = 'right';
    ctx.fillStyle = 'black';
    ctx.fillText(`${this.scoreNumber}`, canvas.width/ 2, 40)
  };

  update() {
    this.scoreNumber = passedTimes;
  }
}
