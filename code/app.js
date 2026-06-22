const RollHistoryContainer = document.getElementById("rollHistory");
const RollHistory = [];
const d4Btn = document.getElementById("d4Btn");
const d6Btn = document.getElementById("d6Btn");;
const d8Btn = document.getElementById("d8Btn");;
const d10Btn = document.getElementById("d10Btn");;
const rollbutton = document.getElementById("rollbutton");;
const logoContainer = document.getElementById("logoContainer");;
const themeContainer = document.getElementById("themeContainer");;

let d4BtnS = false;
let d6BtnS = true;
let d8BtnS = false;
let d10BtnS = false;
let theme = "light"

d6Btn.classList.add("activeBtn");
RollHistory.push(`<div id="rollhead"><h3 class="theme">Roll History</h3><h4 onclick="clearHistory()">Clear history</h4></div>`)
rollbutton.classList.add("dark");


function themeDark() {
          rollbutton.innerHTML = ` <img src="./img/dice icon  dark.webp" alt="">RollDice`
          rollbutton.classList.remove("dark");
          const text = document.querySelectorAll(".theme");
          const bg = document.querySelectorAll(".themeBg");
          const button = document.querySelectorAll(".button");
          text.forEach(element => {
                    element.classList.add("dark");
                    
          });
          bg.forEach(element => {
                    element.classList.add("dark_bg");
                    
          });
          button.forEach(element => {
                    element.classList.add("darkBtn");
                    
          });
}
function themeLight() {
          rollbutton.innerHTML = ` <img src="./img/dice icon.webp" alt="">RollDice`
          rollbutton.classList.add("dark");
          const text = document.querySelectorAll(".theme");
          const bg = document.querySelectorAll(".themeBg");
          const button = document.querySelectorAll(".button");
          text.forEach(element => {
                    element.classList.remove("dark");

          });
          bg.forEach(element => {
                    element.classList.remove("dark_bg");

          });
          button.forEach(element => {
                    element.classList.remove("darkBtn");

          });
}



function switchTheme() {
          if (theme == "light") {
                    themeDark()
                    theme = "dark";
                    logoContainer.innerHTML = `<img src="./img/logo-dark.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/moon.png" alt="">`
          }
          else if (theme == "dark") {
                    themeLight()
                    theme = "light";
                    logoContainer.innerHTML = `<img src="./img/logo-light.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/sun.png" alt="">`
          }

}


function d4() {
          d4BtnS = true;
          d6BtnS = false;
          d8BtnS = false;
          d10BtnS = false;
          newD()
          d4Btn.classList.add("activeBtn");
          d6Btn.classList.remove("activeBtn");
          d8Btn.classList.remove("activeBtn");
          d10Btn.classList.remove("activeBtn");

}
function d6() {
          d4BtnS = false;
          d6BtnS = true;
          d8BtnS = false;
          d10BtnS = false;
          newD()
          d4Btn.classList.remove("activeBtn");
          d6Btn.classList.add("activeBtn");
          d8Btn.classList.remove("activeBtn");
          d10Btn.classList.remove("activeBtn");

}
function d8() {
          d4BtnS = false;
          d6BtnS = false;
          d8BtnS = true;
          d10BtnS = false;
          newD()
          d4Btn.classList.remove("activeBtn");
          d6Btn.classList.remove("activeBtn");
          d8Btn.classList.add("activeBtn");
          d10Btn.classList.remove("activeBtn");

}
function d10() {
          d4BtnS = false;
          d6BtnS = false;
          d8BtnS = false;
          d10BtnS = true;
          newD()
          d10Btn.classList.add("activeBtn");
          d6Btn.classList.remove("activeBtn");
          d8Btn.classList.remove("activeBtn");
          d4Btn.classList.remove("activeBtn");

}

function rollDice() {
          const NumOfDice = document.getElementById("NumOfDice").value;
          const outputNumContainer = document.getElementById("outputNumContainer");
          const DiceImg = document.getElementById("dice_img");
          const RollHistoryContainer = document.getElementById("rollHistory");
          const values = [];
          const img = [];
          const indexofhead = RollHistory.indexOf(`<div id="rollhead"><h3 class="theme">Roll History</h3><h4 onclick="clearHistory()">Clear history</h4></div>`)
          let total = 0;
          let dice = 0;

          if (d4BtnS) {
                    dice = 4
                    for (let i = 0; i < NumOfDice; i++) {
                              let value = Math.floor(Math.random() * 4) + 1;
                              values.push(value);
                              total = total + value;
                              img.push(`<img src="./img/d4/4d${value}.webp" alt="">`);
                    }
          }
          if (d6BtnS) {
                    dice = 6
                    for (let i = 0; i < NumOfDice; i++) {
                              let value = Math.floor(Math.random() * 6) + 1;
                              values.push(value);
                              total = total + value;
                              img.push(`<img src="./img/d6/6d${value}.webp" alt="">`);
                    }
          } if (d8BtnS) {
                    dice = 8
                    for (let i = 0; i < NumOfDice; i++) {
                              let value = Math.floor(Math.random() * 8) + 1;
                              values.push(value);
                              total = total + value;
                              img.push(`<img src="./img/d8/8d${value}.webp" alt="">`);
                    }
          } if (d10BtnS) {
                    dice = 10
                    for (let i = 0; i < NumOfDice; i++) {
                              let value = Math.floor(Math.random() * 10) + 1;
                              values.push(value);
                              total = total + value;
                              img.push(`<img src="./img/d10/10d${value}.webp" alt="">`);
                    }
          }

          RollHistory.splice(indexofhead, 1)
          RollHistory.unshift(`<div><p class="theme">${dice}d${NumOfDice}</p><p class="theme">(${values.join(",")})</p><p class="theme">${total}</p></div>`)
          RollHistory.unshift(`<div id="rollhead"><h3 class="theme">Roll History</h3><h4 onclick="clearHistory()">Clear history</h4></div>`)

          RollHistoryContainer.innerHTML = RollHistory.join("");
          outputNumContainer.innerHTML = ` <h2 class="theme" >${values.join(",")}</h2>`;
          DiceImg.innerHTML = img.join("");
          if (theme == "dark") {
                    themeDark()
                    logoContainer.innerHTML = `<img src="./img/logo-dark.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/moon.png" alt="">`
          }
          else if (theme == "light") {
                    themeLight()
                    logoContainer.innerHTML = `<img src="./img/logo-light.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/sun.png" alt="">`
          }

}
function clearHistory() {
          const DiceImg = document.getElementById("dice_img");
          const RollHistoryContainer = document.getElementById("rollHistory");
          const indexofhead = RollHistory.indexOf(`<div id="rollhead"><h3 class="theme">Roll History</h3><h4 onclick="clearHistory()">Clear history</h4></div>`)
          RollHistory.splice(indexofhead, 1)
          RollHistory.length = 0;
          RollHistory.unshift(`<div id="rollhead"><h3 class="theme">Roll History</h3><h4 onclick="clearHistory()">Clear history</h4></div>`)
          RollHistoryContainer.innerHTML = RollHistory.join("");
          outputNumContainer.innerHTML = ` <h2 class="theme" >output</h2>`;
          DiceImg.innerHTML = `<img src="./img/white dice.png" alt=""><img src="./img/orange dice.png" alt="">`;
          if (theme == "dark") {
                    themeDark()
                    logoContainer.innerHTML = `<img src="./img/logo-dark.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/moon.png" alt="">`
          }
          else if (theme == "light") {
                    themeLight()
                    logoContainer.innerHTML = `<img src="./img/logo-light.svg" alt="">`
                    themeContainer.innerHTML = `<img src="./img/sun.png" alt="">`
          }
}
function newD(){
          const DiceImg = document.getElementById("dice_img");
          outputNumContainer.innerHTML = ` <h2 class="theme" >output</h2>`;
          DiceImg.innerHTML = `<img src="./img/white dice.png" alt=""><img src="./img/orange dice.png" alt="">`;
          


}