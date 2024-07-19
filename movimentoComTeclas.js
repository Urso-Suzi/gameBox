let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

//2 + 252
let garoto = new Image
garoto.src="movimento.png"


let numSprite = 0
let PosicaoX = 0
let PosicaoY = 0
let saltoSprite = 252
let saltoColunaSprite = 380
let posicaoXInC = 0
let posicaoYInC = 0
let velocidade = 7

garoto.src="movimento.png"
garoto.addEventListener('load', () => {
    ctx.drawImage(garoto,PosicaoX,0,250,380,posicaoXInC,posicaoYInC,78,100)
})

let anima = setInterval (() => {

    
    
    
    
    
    
     PosicaoX = numSprite * saltoSprite

    garoto.src="movimento.png"
    garoto.addEventListener('load', () => {
        ctx.drawImage(garoto,PosicaoX,PosicaoY,250,380,posicaoXInC,posicaoYInC,78,100)
    })

    numSprite++
    if(numSprite >= 4) {
        numSprite = 0
    }
    
    ctx.clearRect(0,0,500,500)
},150)



//Movimento do personagem
window.addEventListener('keydown', (event) => {
       if(event.key === 'ArrowRight') {
    posicaoXInC += velocidade
    PosicaoY = saltoColunaSprite * 3
   } else if (event.key === 'ArrowLeft') {
    posicaoXInC -= velocidade
    PosicaoY = saltoColunaSprite * 2
   }  else if (event.key === 'ArrowUp') {
    posicaoYInC -= velocidade
    PosicaoY = saltoColunaSprite * 1
   } else if (event.key === 'ArrowDown') {
    posicaoYInC += velocidade
    PosicaoY = saltoColunaSprite * 0
   }
   //condicao das parede laterais
   if(posicaoXInC > 425) {
        posicaoXInC = 425
   } else if (posicaoXInC < -5) {
        posicaoXInC = -5
   }
})








//  ArrowUp
//  ArrowRight
//  ArrowDown
//  ArrowLeft