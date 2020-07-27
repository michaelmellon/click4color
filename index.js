const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const div = document.querySelector(".container h2");
const color = document.querySelector(".color");
const btncopy = document.getElementById("btn_copy");
const copy_value = document.querySelector(".container span");

window.onload = color.style.color = "#f49850";
window.onload = document.body.style.backgroundColor = "#f49850";

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandNum()];
  }
  const tc = tinycolor(hexColor);

  if (tc.getBrightness() <= 80) {
    div.style.backgroundColor = "rgb(200, 200, 200)";
    div.style.color = hexColor;
    btn.style.backgroundColor = "rgb(200, 200, 200)";
    btn.style.color = hexColor;
    btncopy.style.backgroundColor = "rgb(200, 200, 200)";
    btncopy.style.color = hexColor;
  } else {
    div.style.backgroundColor = "#222";
    div.style.color = "#fff";
    btn.style.backgroundColor = hexColor;
    btn.style.color = "#000";
    btncopy.style.backgroundColor = hexColor;
    btncopy.style.color = "#000";
  }

  color.textContent = hexColor;
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;

  //reset copy button text
  btn_copy.textContent = "Copy!";
});

btn_copy.addEventListener("click", function () {
  const text_to_copy = copy_value.textContent;
  copyToClipboard(text_to_copy);
  btn_copy.textContent = "Copied!";
});

function copyToClipboard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

function getRandNum() {
  return Math.floor(Math.random() * hex.length);
}
