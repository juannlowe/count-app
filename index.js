let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let backgroundBtn = document.getElementById("btn-background")
let count = 0

const increment = () => {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// will check this..
function  changeBackground(){
    style.backgroundBtn= white;
}