// Рендер магазина, кейсов, инвентаря, квестов — все с 0
function renderAll(){
  // Магазин
  let shop = document.getElementById('shopGrid'); if(shop) shop.innerHTML = SHOP.map(s=>`
    <div class="card game-card"><div class="big">${s.emoji}</div><b>${s.name}</b><p>${s.cat}</p><span class="gold-tag">${s.price}</span><button class="cta" onclick="toast('Куплено: 0 • ${s.name}')">КУПИТЬ</button></div>`).join('');
  // Кейсы
  let cases = document.getElementById('casesGrid'); if(cases) cases.innerHTML = CASES.map(c=>`
    <div class="card game-card"><div class="big">${c.emoji}</div><b>${c.name}</b><span class="gold-tag">${c.price}</span><button class="cta gold" onclick="openCase('${c.name}')">ОТКРЫТЬ</button></div>`).join('');
  // Инвентарь — плейсхолдеры, 0 предметов
  let inv = document.getElementById('invGrid'); if(inv) inv.innerHTML = [1,2,3,4].map(()=>`
    <div class="card game-card" style="opacity:.6"><div class="big">❓</div><b>Пустой слот</b><p>0 шт</p></div>`).join('');
  // Квесты 0/9
  let q = document.getElementById('quests'); if(q) q.innerHTML = QUESTS.map((t,i)=>`
    <div class="card task"><div class="ico">⭐</div><div class="info"><b>${i+1}. ${t}</b><span>Награда: 0</span></div><button onclick="doTask(this)">ПРОВЕРИТЬ</button></div>`).join('');
  updateUI();
}
function updateUI(){
  document.getElementById('ui-bal').textContent = STATE.balance;
  document.getElementById('ui-stars').textContent = STATE.stars;
}
function tapMicrobe(){
  STATE.taps++; STATE.points++; STATE.exp++;
  document.getElementById('taps').textContent = STATE.taps;
  toast('Тап! Очки: '+STATE.points);
  if(window.Telegram?.WebApp?.HapticFeedback) Telegram.WebApp.HapticFeedback.impactOccurred('light');
}
function doTask(btn){
  let task = btn.closest('.task'); if(task.classList.contains('done')) return;
  task.classList.add('done'); btn.textContent='✅ ГОТОВО';
  toast('Задание на проверке • Награда: 0');
}
function copyRef(){ if(navigator.clipboard) navigator.clipboard.writeText('https://t.me/MicrobeGame_Bot?start=ref0'); toast('Ссылка скопирована'); }
function openCase(name){ STATE.casesOpened = 0; toast('Кейс "'+name+'" — пока пусто • Открыто: 0'); }
function spinWheel(){
  let wheel=document.getElementById('wheel');
  let deg = 1080 + Math.floor(Math.random()*360);
  wheel.style.transform='rotate('+deg+'deg)';
  document.getElementById('wheelText').textContent='...';
  setTimeout(()=>{ document.getElementById('wheelText').textContent='ПУСТО'; document.getElementById('rouletteResult').textContent='Результат: пусто • Победы: 0'; toast('Вращение завершено • Выпало: 0'); },2400);
}
function simAction(type){ toast(type==='post' ? 'Пост опубликован • 0 подписчиков' : 'Приглашение отправлено • 0'); }
function zombieTap(){
  let el=document.getElementById('zombieScore'); let v = parseInt(el.textContent)+1; el.textContent=v;
  STATE.points=v; toast('🧟 +1 • Очки: '+v);
}
// Множители
document.addEventListener('click', e=>{
  let m = e.target.closest('.mult'); if(!m) return;
  m.parentElement.querySelectorAll('.mult').forEach(x=>x.classList.remove('active'));
  m.classList.add('active');
});
const tg = window.Telegram?.WebApp;
if(tg){ tg.ready(); tg.expand(); tg.setHeaderColor('#260D2B'); tg.setBackgroundColor('#260D2B');
  if(tg.initDataUnsafe?.user){ document.getElementById('profileName').textContent = tg.initDataUnsafe.user.first_name || 'Гость'; document.getElementById('tasks-name').textContent = tg.initDataUnsafe.user.first_name || 'Гость'; }
}
renderAll();
