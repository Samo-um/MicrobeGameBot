function toast(t){
  let el=document.getElementById('toast');
  el.textContent=t; el.style.display='block';
  setTimeout(()=>el.style.display='none',2600);
}
function toggleSound(){
  STATE.sound = !STATE.sound;
  document.getElementById('soundBtn').textContent = STATE.sound ? '🔊' : '🔇';
  toast(STATE.sound ? 'Звук включён' : 'Звук выключен');
}
let freeSec = 86399;
setInterval(()=>{
  freeSec--; if(freeSec<0) freeSec=86399;
  let h = String(Math.floor(freeSec/3600)).padStart(2,'0');
  let m = String(Math.floor(freeSec%3600/60)).padStart(2,'0');
  let s = String(freeSec%60).padStart(2,'0');
  let el=document.getElementById('freeTimer');
  if(el) el.textContent = h+':'+m+':'+s;
},1000);
