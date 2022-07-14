import { activeScreen, changeScreen } from "./assets/scripts/changeScreen";
import { Screens } from "./assets/scripts/screens";

export let frames = 0;

const animate = () => {
  activeScreen.draw(); 
  activeScreen.update();

  frames = frames + 1;
  requestAnimationFrame(animate);
};

window.addEventListener('click', () => {
  if(activeScreen.click()) activeScreen.click();
});

window.addEventListener('touchstart', () => {
  if(activeScreen.click()) activeScreen.click();
});

window.addEventListener('keydown', () => {
  if(activeScreen.click()) activeScreen.click();
});

changeScreen(Screens.START);
animate();

console.log('[LUCIANA KYOKO] - Visite o meu portfolio https://lucianakyoko.com');