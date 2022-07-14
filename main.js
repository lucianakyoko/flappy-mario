import { activeScreen, changeScreen } from "./assets/scripts/changeScreen";
import { Mario } from "./assets/scripts/mario";
import { Screens } from "./assets/scripts/screens";


export let frames = 0;

const animate = () => {
  activeScreen.draw();

  frames = frames + 1;
  requestAnimationFrame(animate);
};

changeScreen(Screens.START);
animate();

console.log('[LUCIANA KYOKO] - Visite o meu portfolio https://lucianakyoko.com');