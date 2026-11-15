// ВСЕ ЗНАЧЕНИЯ С НУЛЯ — ПО ТЗ
const STATE = {
  balance: 0, stars: 0, level: 0, exp: 0,
  gifts: 0, inventory: 0, wins: 0, loses: 0,
  friends: 0, invites: 0, points: 0,
  operations: 0, purchases: 0, withdraws: 0,
  casesOpened: 0, tasksDone: 0, rewards: 0,
  progress: "0/9", taps: 0, sound: true
};
const SHOP = [
  {name:"Мишка или кольцо", price:"0 ⭐", emoji:"🧸", cat:"Подарки"},
  {name:"Сердце или алмаз", price:"0 ⭐", emoji:"💎", cat:"Подарки"},
  {name:"Микроб Neon", price:"0 ⭐", emoji:"🦠", cat:"Персонажи"},
  {name:"Корона VIP", price:"0 ⭐", emoji:"👑", cat:"Особые"},
];
const CASES = [
  {name:"Мишка или кольцо", price:"0 ⭐", emoji:"🧸"},
  {name:"Сердце или алмаз", price:"0 ⭐", emoji:"💖"},
  {name:"CS2 Кейс", price:"0 ⭐", emoji:"🔫"},
  {name:"Особый кейс", price:"0 ⭐", emoji:"✨"},
];
const QUESTS = [
  "Пригласи 1 друга","Открой 1 кейс","Сыграй в рулетку","Выполни 3 задания",
  "Тапни микроба 10 раз","Зайди в магазин","Открой профиль","Посмотри лидеров","Участвуй в конкурсе"
];
