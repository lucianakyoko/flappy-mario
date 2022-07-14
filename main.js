import { Mario } from "./assets/scripts/mario";

const mario = new Mario;

export let frames = 0;

const animate = () => {
  mario.draw();

  frames = frames + 1;
  requestAnimationFrame(animate);
};

animate();
console.log('[LUCIANA KYOKO] - Visite o meu portfolio https://lucianakyoko.com');