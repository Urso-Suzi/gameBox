let px=0
let py=0

let anima 

const desenha = function () {
let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

if(px == 480) {
    px = 0 
    py+=50
} else if (py > 450) {
    py = 0
    px = 0
    ctx.clearRect(0,0,500,500)
}

ctx.fillStyle ='#f00'
ctx.fillRect(px,py,50,50)
px+=10


anima = requestAnimationFrame(desenha)

}
