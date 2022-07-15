import { frames } from "../../main";
import { changeScreen } from "./changeScreen";
import { pipesCollision } from "./pipes";
import { ground, Screens } from "./screens";
import { flySound, gameThemeSound, lostLife } from "./soundEffects";

const marioSprite = new Image();
marioSprite.src = '/sprites/mario-sprite.png';

const lostSprite = new Image();
lostSprite.src = '/sprites/marioOver-sprite.png';

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

    this.lostSpriteSrc = lostSprite;
    this.lostSpriteSrcX = 0;
    this.lostSpriteSrcY = 0;
    this.lostSpriteWidth = 29;
    this.lostSpriteHeight = 43;

    this.currentFrame = 0;
    this.movements = [
      {sourceX: 0, sourceY: 0},
      {sourceX: 0, sourceY: 54},
      {sourceX: 0, sourceY: 108},
      {sourceX: 0, sourceY: 162}
    ];

    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 3.8;
  };

  draw() {
    const { sourceX, sourceY } = this.movements[this.currentFrame];
    this.updateFrame();

    if(this.collision(this, ground)) {
      ctx.drawImage(
        this.lostSpriteSrc,
        this.lostSpriteSrcX, this.lostSpriteSrcY,
        this.lostSpriteWidth, this.lostSpriteHeight,
        this.x, this.y,
        this.width, this.height
      );
    } else {
      ctx.drawImage(
        this.sprite,
        sourceX, sourceY,
        this.sourceWidth, this.sourceHeight,
        this.x, this.y,
        this.width, this.height
      );
    };
  };

  collision(mario, ground) {
    const marioFoot = mario.y + mario.height;
    const groundY = ground.y;
    
    if(marioFoot >= groundY || pipesCollision) {
      return true;
    };

    return false;
  };
  
  fly() {
    this.speed = -this.jump;
    flySound.play();
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

  update() {
    if(this.collision(this, ground)) {
      lostLife.play();
      gameThemeSound.pause();
      gameThemeSound.currentTime = 0;

      changeScreen(Screens.GAME_OVER);
    };

    this.speed = this.speed + this.gravity;
    this.y = this.y + this.speed;
  };
};


