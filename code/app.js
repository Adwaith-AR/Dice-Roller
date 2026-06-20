
function rollDice(){
          const NumOfDice = document.getElementById("NumOfDice").value;
          const outPutNum = document.getElementById("outputNum");
          const DiceImg = document.getElementById("dice_img");
          const values = [];
          const img = [];

          for (let i = 0; i < NumOfDice; i++) {
                    let value = Math.floor(Math.random() * 6) + 1;
                    window.console.log(value);
                    values.push(value);
                    img.push(`<img src="./img/6d${value}.webp" alt="">`);


                    

          }
          outPutNum.textContent = values.join(",");
          DiceImg.innerHTML = img.join("");
          
}