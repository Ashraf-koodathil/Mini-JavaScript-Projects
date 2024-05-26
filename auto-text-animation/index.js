const containerEl = document.querySelector('.container')

let career = ['Developer','Backend Developer','Tech Enthusiast','Business']

let careerIndex = 0
let charecterIndex = 0

updateText();

function updateText (){
    charecterIndex++;
    containerEl.innerHTML = `
    <h1>I'm become ${career[careerIndex].slice(0,charecterIndex)}</h1>`
    
    if(charecterIndex == career[careerIndex].length){
        careerIndex++;
        charecterIndex = 0
    }

    if(careerIndex === career.length){
        careerIndex = 0;
    }
    setTimeout(updateText,500)
}
