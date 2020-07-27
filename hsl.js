const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const div = document.querySelector(".container h2");
const btncopy = document.getElementById("btn_copy");
const copy_value = document.querySelector(".container span");

window.onload = document.body.style.backgroundColor = "hsl(215, 30%, 55%)";
window.onLoad = color.style.color = "hsl(215, 30%, 55%)";
btn.addEventListener("click", function () {
  const h = getRandNum();
  const s = getPercentage();
  const l = getPercentage();

  let hsl = `HSL(${h}, ${s}%, ${l}%)`;
  const tc = tinycolor(hsl);

  if (tc.getBrightness() <= 80) {
    div.style.backgroundColor = "rgb(200, 200, 200)";
    div.style.color = hsl;
    btn.style.backgroundColor = "rgb(200, 200, 200)";
    btn.style.color = hsl;
    btncopy.style.backgroundColor = "rgb(200, 200, 200)";
    btncopy.style.color = hsl;
  } else {
    div.style.backgroundColor = "#222";
    div.style.color = "#fff";
    btn.style.backgroundColor = hsl;
    btn.style.color = "#000";
    btncopy.style.backgroundColor = hsl;
    btncopy.style.color = "#000";
  }
  document.body.style.backgroundColor = hsl;
  color.textContent = hsl;
  color.style.color = hsl;

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
  return Math.floor(Math.random() * 361);
}

function getPercentage() {
  return Math.floor(Math.random() * 101);
}
