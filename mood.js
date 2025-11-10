// Seleccionem elements del DOM
const text = document.getElementById('text');
const image = document.getElementById('moodImage');
const favicon = document.getElementById('favicon');
const body = document.body;

// Diccionari amb les emocions
const moods = {
  happy: {
    text: "Avui és un d’aquells dies on tot sembla sortir bé!",
    image: "img/happy.jpg",
    class: "happy",
    favicon: "img/happy.jpg"
  },
  sad: {
    text: "El món està una mica gris, però demà pot sortir el sol.",
    image: "img/sad.jpg",
    class: "sad",
    favicon: "img/sad.jpg"
  },
  angry: {
    text: "Uf... avui millor no provocar-me gaire.",
    image: "img/angry.jpg",
    class: "angry",
    favicon: "img/angry.jpg"
  },
  chill: {
    text: "Silenci, música suau i bon rotllo. Tot està bé.",
    image: "img/chill.jpg",
    class: "chill",
    favicon: "img/chill.jpg"
  },
  worried: {
    text: "No sé què passa, però tinc un nus a l’estómac.",
    image: "img/worried.jpg",
    class: "worried",
    favicon: "img/worried.jpg"
  },
  neutral: {
    text: "Avui no sé gaire bé com em sento...",
    image: "img/neutral.jpg",
    class: "neutral",
    favicon: "img/neutral.jpg"
  }
};

// Funció principal per canviar l’estat d’ànim
function changeMood(mood) {
  const { text: moodText, image: moodImg, class: moodClass, favicon: moodIcon } = moods[mood];
  
  text.textContent = moodText;
  image.src = moodImg;
  favicon.href = moodIcon;

  // Canvia el color i la font segons la classe
  body.className = '';
  body.classList.add(moodClass);

  // Desa l'últim estat al localStorage
  localStorage.setItem('lastMood', mood);
}

// Reinicia a l’estat neutre
function resetMood() {
  changeMood('neutral');
  localStorage.removeItem('lastMood');
}

// Assignem els esdeveniments a cada botó
['happy', 'sad', 'angry', 'chill', 'worried'].forEach(mood => {
  document.getElementById(mood).addEventListener('click', () => changeMood(mood));
});
document.getElementById('reset').addEventListener('click', resetMood);

// Quan es carrega la pàgina, restaura l'últim estat
window.addEventListener('load', () => {
  const lastMood = localStorage.getItem('lastMood') || 'neutral';
  changeMood(lastMood);
});
