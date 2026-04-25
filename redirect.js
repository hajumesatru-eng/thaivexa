(function(){
  if(localStorage.getItem("lang_done")) return;

  const l = navigator.language.toLowerCase();
  let path="/en/";

  if(l.includes("th")) path="/th/";
  else if(l.includes("vi")) path="/vi/";
  else if(l.includes("zh")) path="/zh/";
  else if(l.includes("ko")) path="/ko/";
  else if(l.includes("es")) path="/es/";
  else if(l.includes("pt")) path="/pt/";

  localStorage.setItem("lang_done","1");
  location.href = path;
})();