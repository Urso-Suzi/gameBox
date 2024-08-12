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
let velocidade = 2
let cima = false, baixo = false, esquerda = false, direita = false
garoto.src="movimento.png"

// Joga o garoto na tela, assim que a tela é carregada



// Função que desenha o movimento para o personagem.


garoto.addEventListener('load', () => {
    
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
    //condicao das parede laterais
    if(posicaoXInC > 425) {
         direita = 425
    } else if (posicaoXInC < -5) {
         posicaoXInC = -5
    }


    if(event.key === 'ArrowRight') {
    direita = true
    PosicaoY = saltoColunaSprite * 3
   } else if (event.key === 'ArrowLeft') {
    esquerda = true
    PosicaoY = saltoColunaSprite * 2
   }  else if (event.key === 'ArrowUp') {
    cima = true
    PosicaoY = saltoColunaSprite * 1
   } else if (event.key === 'ArrowDown') {
    baixo = true
    PosicaoY = saltoColunaSprite * 0
   }

   
})

window.addEventListener('keyup', (event) => {
    //condicao das parede laterais
    if(posicaoXInC > 425) {
         posicaoXInC = 425
    } else if (posicaoXInC < -5) {
         posicaoXInC = -5
    }

    
    if(event.key === 'ArrowRight') {
    direita = false
    PosicaoY = saltoColunaSprite * 3
   } else if (event.key === 'ArrowLeft') {
    esquerda = false
    PosicaoY = saltoColunaSprite * 2
   }  else if (event.key === 'ArrowUp') {
    cima = false
    PosicaoY = saltoColunaSprite * 1
   } else if (event.key === 'ArrowDown') {
    baixo = false
    PosicaoY = saltoColunaSprite * 0
   }


})


const game = () => {
    if(cima) {
        posicaoYInC -= velocidade
    }
    if(baixo) {
        posicaoYInC += velocidade
    }
    if(esquerda) {
        posicaoXInC -= velocidade
    }
    if(direita) {
        posicaoXInC += velocidade
    }    
    requestAnimationFrame(game)
    desenha()
}


requestAnimationFrame(game)









//  ArrowUp
//  ArrowRight
//  ArrowDown
//  ArrowLeft