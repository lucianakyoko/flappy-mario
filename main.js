import { Mario } from "./assets/scripts/mario";

console.log('[LUCIANA KYOKO] - Visite o meu portfolio https://lucianakyoko.com');

const mario = new Mario;

const animate = () => {
  mario.draw();
  requestAnimationFrame(animate);
};

animate();