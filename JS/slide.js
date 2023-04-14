let time = 2500
let currentImageIndex = 0
let img = document.querySelectorAll('#slider img')
let max = img.length 


function nextImagem() {

    img[currentImageIndex].classList.remove("selected")    

    currentImageIndex++

    if (currentImageIndex >= max){
    currentImageIndex = 0}
    
    img[currentImageIndex].classList.add("selected")
   
   
}

function start (){
    setInterval(() => {
        nextImagem()
    },time)
}

window.addEventListener('load', start)