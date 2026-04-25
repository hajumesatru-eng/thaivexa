const moviesEl = document.getElementById("movies");
let lang = localStorage.getItem("lang") || "en-US";

async function load(){
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${lang}`);
  const data = await res.json();

  data.results.forEach((m,i)=>{
    const div=document.createElement("div");
    div.className="movie";

    div.innerHTML=`
      <img src="${IMG_URL+m.poster_path}">
      <p>${m.title}</p>
    `;

    // 🔥 SMARTLINK + REDIRECT
    div.onclick=()=>{
      window.open("https://buffcasualwhine.com/henpkny1f?key=381eaab06b0c4afd4f526aab207f6ca2");
      location.href=`../movie.html?id=${m.id}`;
    };

    moviesEl.appendChild(div);

    // 🔥 ADS TIAP 6 ITEM (300x250)
    if((i+1)%6===0){
      const ad=document.createElement("div");
      ad.className="ad";
      ad.innerHTML=`
      <script>
      atOptions = {
      'key' : '53541ca00eed825e8c431c12f7418ac0',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300
      };
      </script>
      <script src="https://buffcasualwhine.com/53541ca00eed825e8c431c12f7418ac0/invoke.js"></script>
      `;
      moviesEl.appendChild(ad);
    }
  });
}

load();