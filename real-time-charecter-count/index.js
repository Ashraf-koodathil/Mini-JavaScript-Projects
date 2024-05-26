const textArea = document.getElementById("textarea")
const totalCounterEl = document.getElementById("to-counter")
const remainingCounter = document.getElementById("re-counter")

textArea.addEventListener('keyup', () => {
    updateConter()
})

updateConter()

function updateConter(){

    totalCounterEl.innerText = textArea.value.length

    remainingCounter.innerText = textArea.getAttribute("maxlength") - textArea.value.length
}