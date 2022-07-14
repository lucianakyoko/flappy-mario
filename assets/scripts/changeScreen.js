export let activeScreen = {};

export const changeScreen = (newScreen) => {
  activeScreen = newScreen;

  if(activeScreen.initialize) activeScreen.initialize();
}