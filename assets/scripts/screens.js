import { Background } from "./background";
import { Ground } from "./ground";
import { Mario } from "./mario";

export let mario = new Mario();
export let ground = new Ground();

const background = new Background();


export const Screens = {
  START: {
    initialize() {
      mario = new Mario();
      ground = new Ground();
    },
    draw() {
      background.draw();
      mario.draw();
      ground.draw();
    },
    update() {
      ground.update();
    }
  }
};

