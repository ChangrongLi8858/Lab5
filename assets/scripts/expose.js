// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornSound = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');


  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;
    hornImage.src = `assets/images/${choice}.svg`;
    hornSound.src = `assets/audio/${choice}.mp3`;
  });


  volumeSlider.addEventListener('input', () => {
    const v = Number(volumeSlider.value);
    hornSound.volume = v / 100;

    let level;
    if (v === 0) level = 0;
    else if (v < 33) level = 1;
    else if (v < 67) level = 2;
    else level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
  });


  const canvas = document.getElementById('confetti-canvas');
  const jsConfetti = new JSConfetti({ canvas });
  
  playButton.addEventListener('click', () => {
    hornSound.play().catch(err => {
      console.error("fail:", err);
    });
  
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti({
        origin: { x: 0, y: -1 },
      });
      jsConfetti.addConfetti({
        origin: { x: 1, y: 1 }, 
      });
    }
  });
  
  
}
