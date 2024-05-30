let px=0
let py=0
let dx=5
let dy=0
 
let anima 
let l_ret = a_ret=50
let l_canvas = a_canvas = 500

function desenha () {
let canvas = document.getElementById("desenho1")
let ctx = canvas.getContext('2d')

ctx.clearRect(0,0,l_canvas, a_canvas)

ctx.fillStyle ='#f00'
ctx.lineWidth = 5
ctx.stokeStyle = '#000'
ctx.strokeRect(px,py,l_ret,a_ret)
ctx.fillRect(px,py,l_ret,a_ret)

px+=dx
py+=dy

if((px <= 0) && (py<= 0)){
    dx=5
    dy=0
} if((px+l_ret >= l_canvas) && (py <= 0)){
    dx=0
    dy=5
} if((px+l_ret >= l_canvas) && (py+a_ret >= a_canvas)){
    dx=-5
    dy=0
} if((px <= 0) && (py+a_ret >= a_canvas)) {
    dx = 0
    dy =-5
}


anima=requestAnimationFrame(desenha)
}

// desenha()