import { Background } from "./background";
import { changeScreen } from "./changeScreen";
import { Gameover } from "./gameOver";
import { Ground } from "./ground";
import { Mario } from "./mario";
import { Pipes } from "./pipes";
import { Score } from "./score";
import { gameThemeSound } from "./soundEffects";
import { StartMessage } from "./startMessage";

export let mario = new Mario();
export let ground = new Ground();
export let pipes = new Pipes();
export let score = new Score();

const background = new Background();
const startMessage = new StartMessage();
let gameOver = new Gameover();

export const Screens = {
  START: {
    initialize() {
      mario = new Mario();
      ground = new Ground();
      pipes = new Pipes();
      pipes.reset();
    },
    draw() {
      background.draw();
      startMessage.draw();
      mario.draw();
      ground.draw();
    },
    update() {
      ground.update();
    },
    click() {
      changeScreen(Screens.GAME);
    }
  },
  
  GAME: {
    initialize() {
      score = new Score();
    },
    draw() {
      background.draw();
      mario.draw();
      pipes.draw();
      score.draw();
      ground.draw();
      gameThemeSound.play();
    },
    update() {
      pipes.update();
      ground.update();
      mario.update();
      score.update();
    },
    click() {
      mario.fly();
    },
  },

  GAME_OVER: {
    initialize() {
      gameOver = new Gameover();
    },
    draw() {
      background.draw();
      ground.draw();
      mario.draw();
      gameOver.draw();
    },
    click() {
      changeScreen(Screens.START);
    },
    update() {
      ground.update();
    }
  }
};

