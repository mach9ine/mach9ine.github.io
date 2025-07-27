function glitchEffect(element) {
  element.classList.add('glitch');
  setTimeout(() => {
    element.classList.remove('glitch');
  }, 1000);
}

const loadingScreen = document.getElementById('loadingScreen');
const loadingPercent = document.getElementById('loadingPercent');
const enterText = document.getElementById('enterText');
const mainContent = document.querySelector('main');
const bgMusic = document.getElementById('bgMusic');

let progress = 0;
let loadingInterval;

function updateLoading() {
  if (progress >= 100) {
    clearInterval(loadingInterval);
    loadingPercent.style.display = 'none';
    enterText.classList.add('visible');
    loadingScreen.style.cursor = 'pointer';
    loadingScreen.addEventListener('click', enterSite, { once: true });
  } else {
    loadingPercent.textContent = `Loading ${progress}`;
    progress++;
  }
}

function enterSite() {
  bgMusic.play().catch(() => {});
  loadingScreen.style.transform = 'translateY(-100%)';
  loadingScreen.style.opacity = '0';
  mainContent.classList.add('visible');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1500);
}

loadingInterval = setInterval(updateLoading, 40);

function copyInstagramUsername() {
  navigator.clipboard.writeText("051661d35764ee83470b679ed6d5c8a426dbc2a58c9a6c4718aef71784a81b7b6e").catch(() => {
    // No alert or visible message – silent fail
  });
}

document.body.addEventListener('copy', function (e) {
  if (e.target.tagName !== 'A' || !e.target.classList.contains('contact-buttons')) {
    e.preventDefault();
  }
});
