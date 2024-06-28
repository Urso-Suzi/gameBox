let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

let tamMax = 250
let tamMin = 10
let maxCirculos = 250
let variacao = 0

function desenha() {

    //posX, posY, raio, angIni, angFim, sentido (true/false)
    //(PI/180) * ang_grau





    for(let i = 0; i < maxCirculos; i+=10) {
    ctx.beginPath()
    ctx.fillStyle = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'
    ctx.arc(250,250, tamMax - i,(Math.PI/180)* 0,(Math.PI/180) * 360,true)
    ctx.fill()
    console.log(i)
    }   

}

desenha()