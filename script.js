// selecting the main content div holding the buttons
const appElement = document.getElementById("app");
// array of file names
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
  "satan-sid.mp3",
  "jesus.mp3",
  "tuturu_1.mp3",
  "pew.mp3",
  "fuckoff.mp3",
  "surprise-motherfucka.mp3",
  "poi.mp3",
  "niconico.mp3",
  "sheep.mp3",
];
// setting the sounds index to a key value
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
  f: sounds[10],
  g: sounds[11],
  h: sounds[12],
  z: sounds[13],
  x: sounds[14],
  c: sounds[15],
  v: sounds[16],
  b: sounds[17],
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
  // when clicked run audio function and play it
  audioElement("/assets/sounds/" + sound).play();
}
// creates the audioElement
function audioElement(source) {
  const element = new Audio(source);
  return element;
}

function buttonElement(text, clickEvent) {
  //create Elements
  const divElement = document.createElement("div");
  const element = document.createElement("div");
  //Give the elements a class name
  divElement.classList.add(`card`);
  element.classList.add(`card-content`);
  // add a text content
  element.textContent = `♫`;
  // make the card clickable to trigger audioElement
  divElement.addEventListener("click", () => clickEvent(text));
  // append the divs within each other
  divElement.append(element);
  appElement.append(divElement);

  return divElement;
}

// Hover effect
//  link to video tut for this code https://youtu.be/htGfnF1zN4g - Hyperplexed
document.getElementById("app").onmousemove = (e) => {
  // looks at mouse hover position on card
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      //finds the coordinates of the cursor as it moves across the document
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    // sets the new positions of mouse hover as a value to the hover gradient
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
