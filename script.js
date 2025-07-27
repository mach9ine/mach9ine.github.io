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
const profilePic = document.getElementById('pfp');

const resources = [
  'pfp.png',
  'music.mp3',
  'https://fonts.googleapis.com/css2?family=Jersey+10&display=swap'
];

let loaded = 0;

function preloadResources(callback) {
  const total = resources.length;

  resources.forEach((src) => {
    let element;
    if (src.endsWith('.png') || src.endsWith('.jpg')) {
      element = new Image();
      element.onload = element.onerror = check;
      element.src = src;
    } else if (src.endsWith('.mp3')) {
      element = new Audio();
      element.oncanplaythrough = check;
      element.onerror = check;
      element.src = src;
    } else {
      fetch(src).then(check).catch(check);
    }
  });

  function check() {
    loaded++;
    if (loaded === total) callback();
  }
}

function showEnterText() {
  loadingPercent.style.display = 'none';  //wtf optoon1 
  enterText.classList.add('visible');    
  loadingScreen.style.cursor = 'pointer';
  loadingScreen.addEventListener('click', enterSite, { once: true });
}

function enterSite() {
  bgMusic.play().catch(() => {}); // Try autoplay
  loadingScreen.style.transform = 'translateY(-100%)';
  loadingScreen.style.opacity = '0';
  mainContent.classList.add('visible');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1500);
}

function copyInstagramUsername() {
  navigator.clipboard.writeText("051661d35764ee83470b679ed6d5c8a426dbc2a58c9a6c4718aef71784a81b7b6e").catch(() => {});
}

document.body.addEventListener('copy', function (e) {
  if (e.target.tagName !== 'A' || !e.target.classList.contains('contact-buttons')) {
    e.preventDefault();
  }
});

// holy fuck the important part please mch9ne remember to edit ts please 
window.addEventListener('load', () => {
  preloadResources(showEnterText);
});
