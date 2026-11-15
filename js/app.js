function renderAll(){
  let shop = document.getElementById('shopGrid');
  if(shop) shop.innerHTML = SHOP.map(s=>`
    <div class="card game-card"><div class="big">${s.emoji}</div><b>${s.name}</b><p>${s.cat}</p><span class="gold-tag">${s.prize}</span><button class="cta" onclick="toast('Приз: ${s.prize}')">КУПИТЬ</button></div>`).join('');
  let cases = document.getElementById('casesGrid');
  if(cases) cases.innerHTML = CASES.map(c=>`
    <div class="card game-card"><div class="big">${c.emoji}</div><b>${c.name}</b><span class="gold-tag">${c.prize}</span><button class="cta gold" onclick="openCase('${c.name}')">ОТКРЫТЬ</button></div>`).join('');
  renderInventory();
  let q = document.getElementById('quests');
  if(q) q.innerHTML = QUESTS.map((t,i)=>`
    <div class="card task"><div class="ico">⭐</div><div class="info"><b>${i+1}. ${t}</b><span>Награда: 0</span></div><button onclick="doTask(this)">ПРОВЕРИТЬ</button></div>`).join('');
  updateUI();
}
function renderInventory(){
  let inv = document.getElementById('invGrid');
  if(!inv) return;
  if(STATE.myPrizes.length===0){
    inv.innerHTML = [1,2,3,4].map(()=>`
      <div class="card game-card" style="opacity:.6"><div class="big">❓</div><b>Пустой слот</b><p>0 шт</p></div>`).join('');
    document.getElementById('invEmpty').style.display='block';
  } else {
    document.getElementById('invEmpty').style.display='none';
    inv.innerHTML = STATE.myPrizes.map(p=>`
      <div class="card game-card"><div class="big">${p.emoji}</div><b>${p.name}</b><p>+${p.value} к балансу</p><span class="gold-tag">В ИНВЕНТАРЕ</span></div>`).join('');
  }
  document.getElementById('invPrizes').textContent = STATE.myPrizes.length;
  document.getElementById('invBadge').textContent = STATE.myPrizes.length;
}
function updateUI(){
  document.getElementById('ui-bal').textContent = STATE.balance;
  document.getElementById('ui-stars').textContent = STATE.stars;
  document.getElementById('homeBal').textContent = STATE.balance;
  document.getElementById('rouletteBal').textContent = STATE.balance;
  document.querySelectorAll('.bal-text').forEach(el=>el.textContent = STATE.balance);
}
function tapMicrobe(){
  STATE.taps++; STATE.points++; STATE.exp++;
  document.getElementById('taps').textContent = STATE.taps;
  toast('Тап! Очки: '+STATE.points+' • Баланс: '+STATE.balance);
  if(window.Telegram?.WebApp?.HapticFeedback) Telegram.WebApp.HapticFeedback.impactOccurred('light');
}
function doTask(btn){
  let task = btn.closest('.task'); if(task.classList.contains('done')) return;
  task.classList.add('done'); btn.textContent='✅ ГОТОВО';
  toast('Задание на проверке • Баланс: '+STATE.balance);
}
function copyRef(){ if(navigator.clipboard) navigator.clipboard.writeText('https://t.me/MicrobeGame_Bot?start=ref0'); toast('Ссылка скопирована'); }
function openCase(name){
  let prize = WHEEL_PRIZES[Math.floor(Math.random()*WHEEL_PRIZES.length)];
  STATE.balance += prize.value;
  STATE.myPrizes.push(prize);
  STATE.gifts++; STATE.inventory++; STATE.casesOpened++;
  updateUI(); renderInventory();
  toast('🎁 Из кейса "'+name+'" выпал: '+prize.name+' '+prize.emoji+' • +'+prize.value+' • Баланс: '+STATE.balance);
}
let wheelDeg = 0;
let spinning = false;
function spinWheel(){
  if(spinning) return;
  spinning = true;
  let wheel=document.getElementById('wheel');
  let prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
  let prize = WHEEL_PRIZES[prizeIndex];
  let targetAngle = 360 - (prizeIndex * 45 + 22);
  wheelDeg += 1080 + targetAngle;
  wheel.style.transform='rotate('+wheelDeg+'deg)';
  document.getElementById('wheelText').innerHTML='...';
  document.getElementById('rouletteResult').textContent='Крутим...';
  setTimeout(()=>{
    spinning = false;
    STATE.balance += prize.value;
    STATE.spinCount++; STATE.wins++; STATE.gifts++; STATE.inventory++;
    STATE.myPrizes.push(prize);
    updateUI();
    document.getElementById('wheelText').innerHTML = prize.emoji + '<br>' + prize.name + '<br>+'+prize.value;
    document.getElementById('rouletteResult').textContent = '🎉 ПРИЗ: ' + prize.name + ' ' + prize.emoji + ' • +'+prize.value+' • Баланс: '+STATE.balance;
    document.getElementById('rouletteWins').textContent = STATE.wins;
    document.getElementById('roulettePrizes').textContent = STATE.myPrizes.length;
    document.getElementById('spinCount').textContent = STATE.spinCount;
    document.getElementById('lastPrizeBox').style.display='block';
    document.getElementById('lastPrize').textContent = prize.name + ' ' + prize.emoji + ' • +'+prize.value;
    renderInventory();
    toast('🎉 Твой ПРИЗ: ' + prize.name + ' ' + prize.emoji + ' • +'+prize.value+' • Баланс: '+STATE.balance);
    if(window.Telegram?.WebApp?.HapticFeedback) Telegram.WebApp.HapticFeedback.notificationOccurred('success');
  },2400);
}
function simAction(type){ toast(type==='post' ? 'Пост опубликован • Баланс: '+STATE.balance : 'Приглашение отправлено • Баланс: '+STATE.balance); }
function zombieTap(){
  let el=document.getElementById('zombieScore'); let v = parseInt(el.textContent)+1; el.textContent=v;
  STATE.points=v; toast('🧟 +1 • Очки: '+v+' • Баланс: '+STATE.balance);
}
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
