let canvas = document.getElementById("desenho")
let ctx = canvas.getContext('2d')


const teclado = {
    cima: false,
    baixo: false,
    esquerda: false,
    direita: false
}

//Movimento do personagem
window.addEventListener('keydown', (event) => {

    if(event.key === 'ArrowRight') {
    teclado.direita = true
   } else if (event.key === 'ArrowLeft') {
    teclado.esquerda = true  
   }  else if (event.key === 'ArrowUp') {
    teclado.cima = true
   } else if (event.key === 'ArrowDown') {
    teclado.baixo = true
   } 
})

window.addEventListener('keyup', (event) => {

    if(event.key === 'ArrowRight') {
    teclado.direita = false
   } else if (event.key === 'ArrowLeft') {
    teclado.esquerda = false  
   }  else if (event.key === 'ArrowUp') {
    teclado.cima = false
   } else if (event.key === 'ArrowDown') {
    teclado.baixo = false
   } 
})


const game =() => {
    ctx.clearRect(0,0,canvas.width,canvas.heigth)
    requestAnimationFrame(game)
}

requestAnimationFrame(game)
