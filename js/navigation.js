let historyStack = ['home'];
function showPage(id, btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  let el = document.getElementById('page-'+id);
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  else {
    let map = {home:0, tasks:1, roulette:2, shop:3, history:4};
    if(map[id]!==undefined) document.querySelectorAll('.nav-btn')[map[id]].classList.add('active');
  }
  if(historyStack[historyStack.length-1]!==id) historyStack.push(id);
  window.scrollTo(0,0);
  if(window.Telegram?.WebApp?.HapticFeedback) Telegram.WebApp.HapticFeedback.impactOccurred('light');
}
function goBack(){
  if(historyStack.length>1){ historyStack.pop(); let prev = historyStack[historyStack.length-1]; showPage(prev); historyStack.pop(); }
  else showPage('home');
}
function setFilter(btn, group){
  let parent = btn.parentElement;
  parent.querySelectorAll('.filter').forEach(f=>f.classList.remove('active'));
  btn.classList.add('active');
  toast('Фильтр: ' + btn.textContent);
}
