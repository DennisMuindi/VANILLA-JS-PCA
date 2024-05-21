//document.getElementById("count-el").innerText = 5;

let count = 0;

let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let storage = document.getElementById("store");

incrementBtn.onclick = function increment() {
  count += 1;
  console.log(count);
  countEl.textContent = count;
};

saveBtn.onclick = function save() {
  let countStr = count + " - ";
  storage.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
};
