const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
const body = document.querySelector(".body-toggler");
const toggle = document.getElementById("theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
toggle.onclick = function () {
  body.classList.toggle("dark");
  calculator.classList.toggle("dark");
  toggle.classList.toggle("active");
  isDark = !isDark;
};
