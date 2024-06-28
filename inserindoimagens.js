let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

let mario = new Image()
mario.src="mario.png"
mario.addEventListener('load', () => {
    //imagem, xiniRecorte, YiniRecorte, Lrecorte, Arecorte,  
    ctx.drawImage(mario,0,0,50,50)})


desenha = function () {

} 