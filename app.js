function appendToInput(value) {
  document.getElementById("input").value += value;
}

function calculate() {
  let expression = document.getElementById("input").value;
  let result = eval(expression);
  document.getElementById("input").value = result;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function deleteLastChar() {
  let input = document.getElementById("input");
  input.value = input.value.slice(0, -1);
}
