// app.js
// === MOVIES DATA (from your message) ===
const MOVIES = [
  {
    id: "madam-cash",
    title: "MADAM CASH",
    plot: "Madam Cash — an overly wealthy philanthropist, landlord and multi billionaire entrepreneur but behind the curtains has a dark & twisted secret to her wealth. Listen to her story.",
    year: 2025,
    poster: "https://imgur.com/a/PUiPV5B",
    video: "https://www.dropbox.com/scl/fi/zwa1rpo4502cvvf4f5mtn/Video-Oct-24-2025-12-00-10-AM.mov?raw=1"
  },
  {
    id: "ojuju-curse",
    title: "OJUJU CURSE",
    plot: "A Horrifying story of a possession. Nana working in BOTOM BELE Bar encounters a strange man and it changes her life forever.",
    year: 2025,
    poster: "https://imgur.com/a/U3CVy6l",
    video: "https://www.dropbox.com/scl/fi/8fupl9cx53ft2ayv93r2u/Video-Oct-23-2025-11-59-23-PM.mov?raw=1"
  },
  {
    id: "vengance-abiyoyo",
    title: "VENGEANCE OF ABIYOYO",
    plot: "In a wasteland alternate version of Abuja city, a demon terrorises the people and causes mass hysteria. Get ready for thrilling visuals & sounds.",
    year: 2025,
    poster: "https://imgur.com/a/iAXYv0u",
    video: "https://www.dropbox.com/scl/fi/ovrlys523t356nulee5x4/Video-Oct-24-2025-12-00-48-AM.mov?raw=1"
  },
  {
    id: "lagbaja",
    title: "LAGBAJA",
    plot: "Take a dive into the hidden tribe of The ERU people... that all changes when they encounter a masqueraded entity.",
    year: 2025,
    poster: "https://imgur.com/a/xcPRX6H",
    video: "https://www.dropbox.com/scl/fi/o70fdliuucstko0o69oci/Video-Oct-24-2025-12-00-33-AM.mov?raw=1"
  },
  {
    id: "kalakuta-2",
    title: "KALAKUTA 2",
    plot: "The fight for freedom continues as KUTI faces tragedy and must rise up even in this setback to free the people of KALAKUTA.",
    year: 2025,
    poster: "https://imgur.com/a/4D0Jysc",
    video: "https://www.dropbox.com/scl/fi/lkbb8uylde1j4oll4azoe/ScreenRecording_10-22-2025-10-01-57_1.MP4?raw=1"
  },
  {
    id: "kalakuta-1",
    title: "KALAKUTA 1",
    plot: "Step into an alternate world where Nigeria is plagued by bad governance and a man rises against injustice.",
    year: 2025,
    poster: "https://imgur.com/a/mU4c91E",
    video: "https://youtu.be/2q5Hmn6KlBU?si=7yfTV_hsApbzN_4h"
  }
];

// Coming soon (GIFs you included)
const COMING = [
  { id: "origin-abiyoyo", title: "ORIGIN OF ABIYOYO", poster: "https://i.imgur.com/9Uklygc.jpeg" },
  { id: "kalakuta2-gif", title: "KALAKUTA 2", poster: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/cl9s7W1bPjPFlIvdnQLw/pub/3oNTh0hvHjF15ni37UEm.gif" },
  { id: "abiyoyo-gif", title: "VENGEANCE OF ABIYOYO", poster: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/cl9s7W1bPjPFlIvdnQLw/pub/3oNTh0hvHjF15ni37UEm.gif" },
  { id: "ojuju-gif", title: "BEWARE THE OJUJU CURSE", poster: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/cl9s7W1bPjPFlIvdnQLw/pub/y0MQbrGbB2463NmrSkVb.gif" },
  { id: "kalakuta1-gif", title: "KALAKUTA 1", poster: "https://i.imgur.com/qk2aQL7.gif" },
  { id: "madamcash-gif", title: "MADAM CASH", poster: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/cl9s7W1bPjPFlIvdnQLw/pub/m92paNu2HwYcy0WKr10D.gif" },
  { id: "lagbaja-gif", title: "LAGBAJA", poster: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/cl9s7W1bPjPFlIvdnQLw/pub/G6rMESZT3IfnBqWaJng5.gif" }
];

// Utility: returns poster URL as-is (replace album URLs with direct image URLs for best quality)
function posterFor(url){
  return url;
}

function createCard(m) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-logo"><img src="https://i.imgur.com/e40IkRK.jpeg" alt="FLICK logo"></div>
    <div class="poster-wrap">
      <div class="poster-flip flipping"><img class="poster-img" src="${posterFor(m.poster)}" alt="${m.title}"></div>
    </div>
    <div class="title-row">
      <div><h3>${m.title}</h3><div class="meta-row">${m.year || ''}</div></div>
    </div>
    <p class="plot">${m.plot || ''}</p>
    <div class="overlay-actions">
      <button class="play-btn" data-id="${m.id}" title="Play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></button>
    </div>
  `;
  card.querySelector('.play-btn').addEventListener('click', (e)=> {
    e.stopPropagation();
    window.location.href = `movie.html?id=${encodeURIComponent(m.id)}`;
  });
  card.addEventListener('click', ()=> window.location.href = `movie.html?id=${encodeURIComponent(m.id)}`);
  return card;
}

// populate now showing
const grid = document.getElementById('grid-wrap');
MOVIES.forEach(m => grid.appendChild(createCard(m)));

// populate coming soon
const comingGrid = document.getElementById('coming-grid');
COMING.forEach(c => {
  const d = document.createElement('div');
  d.className = 'card';
  d.innerHTML = `
    <div class="card-logo"><img src="https://i.imgur.com/e40IkRK.jpeg" alt="FLICK logo"></div>
    <div class="poster-wrap"><div class="poster-flip"><img class="poster-img" src="${posterFor(c.poster)}" alt="${c.title}"></div></div>
    <div class="title-row"><div><h3>${c.title}</h3></div></div>
    <p class="plot">Coming soon — subscribe to get notified.</p>
    <div class="overlay-actions"><a class="btn subscribe" href="https://youtube.com/@kezithelastcreator?si=AIUm9DMrV8DnBxw-" target="_blank">Subscribe</a></div>
  `;
  comingGrid.appendChild(d);
});

// flip animation staggering
document.querySelectorAll('.poster-flip').forEach((el,i)=> el.style.animationDelay = (i*220)+'ms');

// optional: soft continuous scroll for desktop
let pos = 0;
function floatScroll(){
  const el = document.getElementById('grid-wrap');
  if(!el) return;
  const max = Math.max(0, el.scrollWidth - el.clientWidth);
  pos += 0.25;
  if(pos > max) pos = 0;
  el.scrollTo({left: pos});
  requestAnimationFrame(floatScroll);
}
if(window.innerWidth > 900) requestAnimationFrame(floatScroll);
