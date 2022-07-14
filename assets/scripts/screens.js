import { Background } from "./background";
import { Mario } from "./mario";

export let mario = new Mario();
const background = new Background();


export const Screens = {
  START: {
    initialize() {
      mario = new Mario();
    },
    draw() {
      mario.draw();
      background.draw();
    }
  }
};

