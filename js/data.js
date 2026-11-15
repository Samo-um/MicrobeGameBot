const STATE = {
  balance: 0, stars: 0, level: 0, exp: 0,
  gifts: 0, inventory: 0, wins: 0, loses: 0,
  friends: 0, invites: 0, points: 0,
  operations: 0, purchases: 0, withdraws: 0,
  casesOpened: 0, tasksDone: 0, rewards: 0,
  progress: "0/9", taps: 0, sound: true,
  spinCount: 0, myPrizes: []
};
const WHEEL_PRIZES = [
  { emoji: "🎁", name: "Подарок", value: 5 },
  { emoji: "💎", name: "Кристалл", value: 20 },
  { emoji: "👑", name: "Корона", value: 50 },
  { emoji: "🧸", name: "Мишка", value: 10 },
  { emoji: "⭐", name: "Звезда", value: 5 },
  { emoji: "🦠", name: "Микроб", value: 3 },
  { emoji: "💖", name: "Сердце", value: 15 },
  { emoji: "🚀", name: "Ракета", value: 25 },
];
const SHOP = [
  { name:"Мишка или кольцо", prize:"Приз: 🧸 Мишка • +10", emoji:"🧸", cat:"Подарки" },
  { name:"Сердце или алмаз", prize:"Приз: 💎 Алмаз • +20", emoji:"💎", cat:"Подарки" },
  { name:"Микроб Neon", prize:"Приз: 🦠 Микроб • +3", emoji:"🦠", cat:"Персонажи" },
  { name:"Корона VIP", prize:"Приз: 👑 Корона • +50", emoji:"👑", cat:"Особые" },
];
const CASES = [
  { name:"Мишка или кольцо", prize:"Приз: 🧸", emoji:"🧸" },
  { name:"Сердце или алмаз", prize:"Приз: 💖", emoji:"💖" },
  { name:"CS2 Кейс", prize:"Приз: 🔫", emoji:"🔫" },
  { name:"Особый кейс", prize:"Приз: ✨", emoji:"✨" },
];
const QUESTS = [
  "Пригласи 1 друга","Открой 1 кейс","Сыграй в рулетку","Выполни 3 задания",
  "Тапни микроба 10 раз","Зайди в магазин","Открой профиль","Посмотри лидеров","Участвуй в конкурсе"
];
