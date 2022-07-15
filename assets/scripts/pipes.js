import { frames } from "../../main";
import { changeScreen } from "./changeScreen";
import { mario, Screens } from "./screens";
import { gameThemeSound, lostLife } from "./soundEffects";

const pipesSprite = new Image();
pipesSprite.src = '/sprites/pipes-sprite.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export let pipesCollision = false;
export let passedTimes = 0;

export class Pipes {
  constructor() {
    this.sprite = pipesSprite;
    this.width = 52;
    this.height = 400;
    this.bottom = {
      sourceX: 0,
      sourceY: 0
    };
    this.top = {
      sourceX: 53,
      sourceY: 0
    };
    this.pairsOfPipes = [];
  };

  reset() {
    pipesCollision = false;
    passedTimes = 0;
  };

  draw() {
    this.pairsOfPipes.forEach(pair => {
      const spaceBetween = 120;
      const yRandom = pair.y;
      const pipeTopX = pair.x;
      const pipeTopY = yRandom;
      const pipeBottomX = pair.x;
      const pipeBottomY = this.height + spaceBetween + yRandom;

      ctx.drawImage(
        this.sprite,
        this.top.sourceX, this.top.sourceY,
        this.width, this.height,
        pipeTopX, pipeTopY,
        this.width, this.height
      );
  
      ctx.drawImage(
        this.sprite,
        this.bottom.sourceX, this.bottom.sourceY,
        this.width, this.height,
        pipeBottomX, pipeBottomY,
        this.width, this.height
      );

      pair.pipeTop = {
        x: pipeTopX,
        y: this.height + pipeTopY
      };

      pair.pipeBottom = {
        x: pipeBottomX,
        y: pipeBottomY
      }
    });
  };

  colision(pair) {
    const marioHead = mario.y;
    const marioFoot = mario.y + mario.height;

    if((mario.x + mario.width) >= pair.x) {
      if(marioHead <= pair.pipeTop.y) {
        return true;
      };
      if(marioFoot >= pair.pipeBottom.y) {
        return true;
      };
    }
    return false;
  };

  update() {
    const over100Frames = frames % 100 === 0;
    if(over100Frames) {
      this.pairsOfPipes.push({
        x: canvas.width,
        y: -150 * (Math.random() + 1)
      })
    };

    this.pairsOfPipes.forEach(pair => {
      pair.x = pair.x - 2;

      if(this.colision(pair)) {
        lostLife.play();
        gameThemeSound.pause();
        gameThemeSound.currentTime = 0;

        pipesCollision = true;
        changeScreen(Screens.GAME_OVER);
      };

      if(pair.x + this.width <= 0) {
        passedTimes = passedTimes + 1;

        this.pairsOfPipes.shift();
      };
    });
  }
}