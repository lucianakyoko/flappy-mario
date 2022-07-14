import { Background } from "./background";
import { changeScreen } from "./changeScreen";
import { Ground } from "./ground";
import { Mario } from "./mario";
import { StartMessage } from "./startMessage";

export let mario = new Mario();
export let ground = new Ground();

const background = new Background();
const startMessage = new StartMessage();


export const Screens = {
  START: {
    initialize() {
      mario = new Mario();
      ground = new Ground();
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
      ground.draw();
    },
    update() {
      ground.update();
      // mario.update();
    },
    click() {},
  }
};

