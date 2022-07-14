import { Background } from "./background";
import { changeScreen } from "./changeScreen";
import { Ground } from "./ground";
import { Mario } from "./mario";
import { Pipes } from "./pipes";
import { StartMessage } from "./startMessage";

export let mario = new Mario();
export let ground = new Ground();
export let pipes = new Pipes();

const background = new Background();
const startMessage = new StartMessage();


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

    },
    draw() {
      background.draw();
      mario.draw();
      pipes.draw();
      ground.draw();
    },
    update() {
      pipes.update();
      ground.update();
      mario.update();
    },
    click() {
      mario.fly();
    },
  },

  GAME_OVER: {
    initialize() {},
    draw() {
      background.draw();
      ground.draw();
      mario.draw();
    },
    click() {
      changeScreen(Screens.START);
    },
    update() {
      ground.update();
    }
  }
};

