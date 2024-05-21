let num1 = 10;
let num2 = 2;

let count = 0;

let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let storage = document.getElementById("store");
let firstNumber = (document.getElementById("num1").textContent = num1);
let secondNumber = (document.getElementById("num2").textContent = num2);

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

function addNumbers() {
  let total = firstNumber + secondNumber;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum:  " + total;
}

function substractNumbers() {
  let total = firstNumber - secondNumber;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum:  " + total;
}

function multiplyNumbers() {
  let total = firstNumber * secondNumber;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum:  " + total;
}

function divideNumbers() {
  let total = firstNumber / secondNumber;
  console.log(total);
  document.getElementById("sum-el").textContent = "Sum:  " + total;
}
