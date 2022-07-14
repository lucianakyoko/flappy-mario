import { Mario } from "./mario";

export let mario = new Mario();


export const Screens = {
  START: {
    initialize() {
      mario = new Mario();
    },
    draw() {
      mario.draw();
    }
  }
};

