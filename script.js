console.log("Hello!");
const appElement = document.getElementById("app");
const sounds = [
  "brain-fart.mp3",
  "fart-with-extra-reverb.mp3",
  "helvete.mp3",
  "snore1.mp3",
  "discord-notification.mp3",
  "succ.mp3",
  "emotional-damage.mp3",
  "vine-boom.mp3",
  "erro.mp3",
];
const keyBindings = {
  q: sounds[0],
  w: sounds[1],
  e: sounds[2],
  r: sounds[3],
  t: sounds[4],
  y: sounds[5],
  u: sounds[6],
  a: sounds[7],
  s: sounds[8],
  d: sounds[9],
};
// loop through sound files and reduce them to an array of elements:
let soundElements = sounds.reduce((accumulator, sound) => {
  const button = buttonElement(sound, handleClick);
  return [...accumulator, button];
}, []);
appElement.append(...soundElements);

// keyboard events:
window.onkeydown = function (event) {
  if (keyBindings[event.key])
    audioElement("/assets/sounds/" + keyBindings[event.key]).play();
};

// handles Click events
function handleClick(sound) {
  audioElement("/assets/sounds/" + sound).play();
}
function audioElement(source) {
  const element = new Audio(source);
  return element;
}
// // returns a new button with given text and given click event handler function:
function buttonElement(text, clickEvent) {
  const element = document.createElement("button");
  element.textContent = text;
  element.addEventListener("click", () => clickEvent(text));
  return element;
}
