const imgContainerEl = document.querySelector('.img-container')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click', () => {
    addNewImages();
})

function addNewImages () {
    let imgLimit = 8
    for (let i = 0;i < imgLimit;i++){
        const newImgEl = document.createElement("img")
        newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`
        console.log(Math.floor(Math.random()*2000));
        imgContainerEl.appendChild(newImgEl)
    }
}