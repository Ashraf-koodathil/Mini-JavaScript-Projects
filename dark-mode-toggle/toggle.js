const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem('mode'))

function updateBg(){
    if(inputEl.checked){
        bodyEl.style.background = 'black'
    }else {
        bodyEl.style.background = 'white'
    }
}

inputEl.addEventListener('input',() => {
        updateBg()  
        updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}