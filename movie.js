// movie.js
// replicate the same MOVIES array (or import it if bundling)
const MOVIES = [
  { id:"madam-cash", title:"MADAM CASH", plot:"Madam Cash — an overly wealthy philanthropist, landlord and multi billionaire entrepreneur but behind the curtains has a dark & twisted secret to her wealth. Listen to her story.", year:2025, poster:"https://imgur.com/a/PUiPV5B", video:"https://www.dropbox.com/scl/fi/zwa1rpo4502cvvf4f5mtn/Video-Oct-24-2025-12-00-10-AM.mov?raw=1" },
  { id:"ojuju-curse", title:"OJUJU CURSE", plot:"A Horrifying story of a possession...", year:2025, poster:"https://imgur.com/a/U3CVy6l", video:"https://www.dropbox.com/scl/fi/8fupl9cx53ft2ayv93r2u/Video-Oct-23-2025-11-59-23-PM.mov?raw=1" },
  { id:"vengance-abiyoyo", title:"VENGEANCE OF ABIYOYO", plot:"In a wasteland alternate Abuja...", year:2025, poster:"https://imgur.com/a/iAXYv0u", video:"https://www.dropbox.com/scl/fi/ovrlys523t356nulee5x4/Video-Oct-24-2025-12-00-48-AM.mov?raw=1" },
  { id:"lagbaja", title:"LAGBAJA", plot:"Take a dive into the hidden tribe of The ERU people...", year:2025, poster:"https://imgur.com/a/xcPRX6H", video:"https://www.dropbox.com/scl/fi/o70fdliuucstko0o69oci/Video-Oct-24-2025-12-00-33-AM.mov?raw=1" },
  { id:"kalakuta-2", title:"KALAKUTA 2", plot:"The fight for freedom continues as KUTI...", year:2025, poster:"https://imgur.com/a/4D0Jysc", video:"https://www.dropbox.com/scl/fi/lkbb8uylde1j4oll4azoe/ScreenRecording_10-22-2025-10-01-57_1.MP4?raw=1" },
  { id:"kalakuta-1", title:"KALAKUTA 1", plot:"Step into an alternate world where...", year:2025, poster:"https://imgur.com/a/mU4c91E", video:"https://youtu.be/2q5Hmn6KlBU?si=7yfTV_hsApbzN_4h" }
];

function qs(name){ return new URLSearchParams(location.search).get(name); }
const id = qs('id');
const movie = MOVIES.find(m=>m.id===id);

const back = document.getElementById('backBtn');
back && back.addEventListener('click', ()=> history.back());

if(!movie){
  document.querySelector('.movie-landing').innerHTML = `<p style="color:#ccc">Movie not found. <a href="index.html">Back</a></p>`;
} else {
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-year').textContent = movie.year;
  document.getElementById('movie-plot').textContent = movie.plot;
  document.getElementById('movie-poster').style.backgroundImage = `url(${movie.poster})`;
  const videoEl = document.getElementById('movie-video');

  if(movie.video && movie.video.includes('youtube.com')){
    const iframe = document.createElement('iframe');
    iframe.src = movie.video.replace('watch?v=','embed/');
    iframe.width = "100%"; iframe.height = "480";
    iframe.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
    iframe.setAttribute('allowfullscreen','');
    videoEl.replaceWith(iframe);
  } else if(movie.video){
    videoEl.src = movie.video;
    videoEl.poster = movie.poster || '';
  } else {
    videoEl.insertAdjacentHTML('beforebegin','<div style="color:var(--muted)">No playable video available.</div>');
  }

  document.getElementById('flickIt').addEventListener('click', ()=>{
    const vid = document.getElementById('movie-video');
    if(vid && vid.play) {
      vid.muted = false;
      vid.play().catch(()=> alert('Click Play on the video if autoplay is blocked.'));
      vid.scrollIntoView({behavior:'smooth', block:'center'});
    } else {
      window.open(movie.video,'_blank');
    }
  });
}
