window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakBtn = document.querySelector('button');
  const faceImg = document.querySelector('#explore img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — DEFAULT' : ''}`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  speakBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    const selectedIndex = voiceSelect.selectedIndex;
    if (selectedIndex >= 0 && voices[selectedIndex]) {
      utter.voice = voices[selectedIndex];
    }


    faceImg.src = 'assets/images/smiling-open.png';
    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utter);
  });
}
