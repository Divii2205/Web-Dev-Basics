let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
    let emojiIndex1 = Math.floor (Math.random () * fighters.length)
    let emojiIndex2 = Math.floor (Math.random () * fighters.length)
    
    stageEl.textContent = fighters[emojiIndex1] + " vs " + fighters[emojiIndex2]
});

