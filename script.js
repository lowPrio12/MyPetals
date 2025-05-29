// Glow cursor
const cursor = document.getElementById('glow-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Music control
const musicBtn = document.getElementById('music-btn');
let audio;

if (musicBtn) {
  audio = new Audio('music/Thousand-silent-deaths.mp3');
  audio.loop = false;
  audio.volume = 1;

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicBtn.textContent = '🔇 Pause';
    } else {
      audio.pause();
      musicBtn.textContent = '🎵 Resume VM';
    }
  });
}
