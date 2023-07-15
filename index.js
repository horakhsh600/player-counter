let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("numberofplayer")

let count = 0;
function increment() {
    count = count + 1
    countEl.innerText = count
}

function savePlayers() {
  let countStr = count + " - "
  saveEl.textContent += countStr
}



const restBtn = document.getElementById('restbtn');
restBtn.addEventListener('click', () => {
  location.reload();
});



