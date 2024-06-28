let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

let tamMax = 40
let tamMin = 10
let maxCirculos = 50

let angIni = 0
let angFim = 0

let local1 = 250
let local2 = 250


function desenha() {


    ctx.clearRect(0,0,500,500)
    //posX, posY, raio, angIni, angFim, sentido (true/false)
    //(PI/180) * ang_grau
    for(let i = 0; i < maxCirculos; i++) {
    ctx.beginPath()
    ctx.fillStyle = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'
    ctx.arc(Math.random()*500,Math.random()*500,Math.random()*tamMax+tamMin,(Math.PI/180)* 0,(Math.PI/180) * 360,true)
    ctx.fill()

    }  
    
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.arc(local1,local2,100,(Math.PI/180)* angIni,(Math.PI/180) * angFim,false)
    ctx.fill()

    angFim++
    if(angFim > 360) {
        angFim = 0
        local1 = Math.random()*400
        local2 = Math.random()*400
    }
    anima=requestAnimationFrame(desenha)
}

desenha()
