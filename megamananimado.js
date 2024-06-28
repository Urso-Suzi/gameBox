let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext("2d")


let posicaoImg = 0
let PosicaoImg2 = 0
let PosicaoX = posicaoImg * 570
let PosicaoY = 0

let megaman = new Image()



let anima = setInterval(() => {
    posicaoImg+=1
    PosicaoX = posicaoImg * 570
    PosicaoY = PosicaoImg2 * 570
    if((posicaoImg == 4) && (PosicaoX == 2280)) {
        posicaoImg = 0
        PosicaoImg2 = 1
    }  if ((PosicaoX == 2280) && (PosicaoImg2 == 1)) {
        posicaoImg = 0
        PosicaoImg2 = 0
    } 
    console.log(PosicaoImg2)
    console.log(posicaoImg)
    console.log(PosicaoX)
    
    megaman.src="megaman.png"
    megaman.addEventListener('load', () => {
        ctx.drawImage(megaman,PosicaoX,PosicaoY,500,550,0,0,100,100)
    })
    ctx.clearRect(0,0,500,500)
},1000)