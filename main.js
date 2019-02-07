let addresses = [
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",      liter: 'Q'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",        liter: 'W'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",          liter: 'E'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",      liter: 'A'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",          liter: 'S'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",         liter: 'D'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",         liter: 'Z'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",         liter: 'X'},
  {link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", liter: 'C'}
];


function addEvents() {
  let audioBlocks = document.querySelectorAll('.audio-block');

  function togglePlay() {
    this.parentElement.children[3].play();
  }

  function togglePause() {
    this.parentElement.children[3].pause();
  }

  for (let i = 0; i < audioBlocks.length; i++) {
    let children = audioBlocks[i].children;
    children[1].addEventListener('click', togglePlay);
    children[2].addEventListener('click', togglePause);
  }
}


(function createBaseStructure(callback) {
  let audioBlock = document.querySelector('.audio-container');
  let baseStructure = '';
  addresses.forEach((item, position) => {
    baseStructure += `
  <div class="audio-block">
      <h2>${item.liter}</h2>
      <button class="play" data-check="pl${position}">Play</button>
      <button class="pause" data-check="ps${position}">Pause</button>
      <audio class="myAudio" src=${item.link} preload='auto' data-check="au${position}" loop></audio>
  </div>`;
  });
  audioBlock.innerHTML += baseStructure;
  callback();
})(addEvents);
