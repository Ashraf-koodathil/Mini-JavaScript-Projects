const bodyEl = document.querySelector("Body")

bodyEl.addEventListener('mousemove', (event) => {
    let yPos = event.offsetY
    let xPos = event.offsetX
    console.log(event.offsetY);
    console.log(event.offsetX);
    
    spanEl = document.createElement('span')
    spanEl.style.left = xPos +'px'
    spanEl.style.top = yPos +'px'
    let size = Math.random() * 100
    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'
    bodyEl.appendChild(spanEl)

    setTimeout(function (){
        bodyEl.firstChild.remove()
    },2000)
})
