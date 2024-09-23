//obj's
const plr = document.getElementById('plr')
const ball = document.getElementById('ball')
const html_score = document.getElementById('score')
const html_heals = document.getElementById('heals')
const start = document.getElementById('start')
const screan = document.getElementById('screan')
const bad = document.getElementById('bad')

//const's
const speed = 5

//let's
let counter = Math.round(Math.random()*100%5) + 5
let timer = 0
let wait = 300
let score = 0
let hp = 3
let plrX = 340
let dif = 2
let nextMoveType
let move_to = 790
let interval
let badMoveType = 0
let BadPosition = {
    x: 0,//790
    y: 0,
    is_live: true
}
let ballMoveVector = {
    x: 1,
    y: 1
}
let ballPosition = {
    x: 450,
    y: 600
}


//function
function checkCallision() {
    const x = ballPosition.x + ballMoveVector.x * dif
    const y = ballPosition.y + ballMoveVector.y * dif

    if(( x > 0 && x < 880) && (y > 0 && y < 570)) {

        if (y >= 520 && y <= 535 && x >= plrX && x <= plrX + 199) {
            ballMoveVector.y = ballMoveVector.y * -1
            score++
        }

        ballPosition.x += ballMoveVector.x * dif
        ballPosition.y += ballMoveVector.y * dif
    }
    else if  (x <= 0 || x >= 880) {
        ballMoveVector.x = ballMoveVector.x * -1
        score++
    }
    else if  (y <= 0 ) {
        ballMoveVector.y = ballMoveVector.y * -1
        score++
    }
    else if(y >= 470) {
        ballPosition.x = plrX
        ballPosition.y = 400
        ballMoveVector.x = 1
        ballMoveVector.y = 1
        hp--;
    }
}

function moveBall() {
    switch(score){
        case 30: dif = 3; break
        case 50: dif = 4; break
        case 70: dif = 5; break
    }
    if(hp <= 0) {
        goback()
    }
    checkCallision()
}

function moveBad() {
    if(badMoveType == 0) {
        if(BadPosition.x == move_to || Math.abs(move_to - BadPosition.x) < 3 ) {
        	badMoveType = -1
            if(Math.round(Math.random) == 1) {
        	    move_to = 790-move_to
            } else {
                move_to = plrX
            }
        	nextMoveType = 0
            counter--
        } else {
            BadPosition.x += Math.round((move_to - BadPosition.x) / 4);
        }
    }
    else if(badMoveType == -1) {
        if (timer == wait) {
            badMoveType = nextMoveType 
            BadPosition.is_live = true
            timer = 0 
            if(counter == 0) {
                badMoveType = 1
            }          
        } else {
            timer++;    
        }
    }
    else if(badMoveType == 1) {
        if(BadPosition.y == 500 || Math.abs(500 - BadPosition.y) < 3 ) {
        	badMoveType = 2
        } else {
            BadPosition.y += Math.round((500 - BadPosition.y) / 4);
        }
    }
    else if(badMoveType == 2) {
        BadPosition.x = 0
        BadPosition.y = 0
        BadPosition.is_live = false
        badMoveType = -1
        nextMoveType = 0
        move_to = 790
        counter = Math.round(Math.random()*100%5) + 5
    }
}

document.addEventListener('keydown', function(event) {
    if ((event.code == 'KeyA' || event.code == 'ArrowLeft') && plrX >= 5) {
        plrX -= speed * dif
    }
    else if ((event.code == 'KeyD' || event.code == 'ArrowRight') && plrX <= 680) {
        plrX += speed * dif
    }
  });

function render() {
    ball.style.left = `${ballPosition.x}px`
    ball.style.top = `${ballPosition.y}px`

    plr.style.left = `${plrX}px`

    html_score.textContent = `Score: ${score}`
    html_heals.textContent = `Heals: ${hp}`


    if(BadPosition.is_live) {    
        bad.style.left = `${BadPosition.x}px`
        bad.style.top = `${BadPosition.y}px`
    } else {
        bad.style.left = `-1000px`
        bad.style.top = `-1000px`
    }
}

function goback() {
    clearInterval(interval)

    score = 0
    hp = 3
    plrX = 340
    dif = 2
    ballMoveVector = {
        x: 1,
        y: 1
    }
    ballPosition = {
        x: 450,
        y: 450
    }
    BadPosition = {
        x: 0,
        y: 0,
        is_live: true
    }
    nextMoveType = undefined
    move_to = 790
    badMoveType = 0
}

start.onclick = () => {
    goback()
    interval = setInterval(() => {
        moveBall()
        moveBad()
        render()
    }, 10)
}