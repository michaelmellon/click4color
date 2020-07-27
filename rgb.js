const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const div = document.querySelector(".container h2");
const btncopy = document.getElementById("btn_copy");
const copy_value = document.querySelector(".container span");

window.onload = document.body.style.backgroundColor = "rgb(200, 200, 200)";
window.onload = color.style.color = "rgb(200, 200, 200)";
btn.addEventListener("click", function () {
  const r = getRandNum();
  const g = getRandNum();
  const b = getRandNum();
  let rgb = `RGB(${r}, ${g}, ${b})`;

  const tc = tinycolor(rgb);

  if (tc.getBrightness() <= 80) {
    div.style.backgroundColor = "rgb(200, 200, 200)";
    div.style.color = rgb;
    btn.style.backgroundColor = "rgb(200, 200, 200)";
    btn.style.color = rgb;
    btncopy.style.backgroundColor = "rgb(200, 200, 200)";
    btncopy.style.color = rgb;
  } else {
    div.style.backgroundColor = "#222";
    div.style.color = "#fff";
    btn.style.backgroundColor = rgb;
    btn.style.color = "#000";
    btncopy.style.backgroundColor = rgb;
    btncopy.style.color = "#000";
  }
  document.body.style.backgroundColor = rgb;
  color.textContent = rgb;
  color.style.color = rgb;

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
  return Math.floor(Math.random() * 256);
}
