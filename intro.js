const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let battle = false
let room
let ranMon
let  myMusic = new Audio("./images/dungeon.mp3")
let moveSound = new Audio('./images/movement.wav')
let victorySound = new Audio('./images/victory.mp3')
let button = document.querySelector("#start")
let tutorial = document.querySelector(".tutorial")
let tutorialBattle = document.querySelector(".tutorialBattle")
let arrowKeys = document.querySelector(".arrowKeys")
let arrowKeysTwo = document.querySelector(".arrowKeysTwo")
let playerDefend = document.querySelector("#knightDefend")
let mainChar = document.querySelector("#image")
    button.addEventListener("click",function(){
        myMusic.play();
        randomRoom()
        button.style.display = 'none'
        tutorial.style.display = 'block'
        arrowKeys.style.display = 'block'
    })

const blueAll = new Image()
const blueLeftRight = new Image()
const blueUpLeft = new Image()
const blueUpRight = new Image()
const greenAll = new Image()
const greenLeftRight = new Image()
const greenUpLeft = new Image()
const greenUpRight = new Image()
const yellowAll = new Image()
const yellowLeftRight = new Image()
const yellowUpLeft = new Image()
const yellowUpRight = new Image()
const exitOne = new Image()
const exitTwo = new Image()
const knightExplore = new Image()

blueAll.src = "./images/blue all.png"
blueLeftRight.src = "./images/blue leftRight.png"
blueUpLeft.src = "./images/blue upLeft.png"
blueUpRight.src = "./images/blue upRight.png"
greenAll.src = "./images/green all.png"
greenLeftRight.src = "./images/green leftRight.png"
greenUpLeft.src = "./images/green upLeft.png"
greenUpRight.src = "./images/green upRight.png"
yellowAll.src = "/images/yellow all.png"
yellowLeftRight.src = "./images/yellow leftRight.png"
yellowUpLeft.src = "./images/yellow upLeft.png"
yellowUpRight.src = "./images/yellow upRight.png"
exitOne.src = "./images/ExitOne.png"
exitTwo.src = "./images/ExitTwo.png"
knightExplore.src = './images/knightExplore.png'

let blueCount = 0
let greenCount = 0
let yellowCount = 0

let playerBlock

let animation
function animateScript() {
let position = 95
const interval = 500 
animation = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`
if (position < 190)
{ position = position + 95;}
else
{ position = 95; }
}
, interval )
} 

let slash
function animateSlash() {
    let slashArt = document.querySelector("#slash")
    slashArt.style.display = 'block'
    let position = 170
    const interval = 100
    slash = setInterval (() => {
        document.getElementById("slash").style.backgroundPosition = `-${position}px 0px`
        if(position < 680) { 
        position = position + 170
        } else {
            slashArt.style.display = 'none'
            clearInterval(slash)}
    }, interval)   
}

let attack
function animateAttack() {
    let attackArt = document.querySelector("#attack")
    attackArt.style.display = 'block'
    let position = 108
    const interval = 100
    attack = setInterval (() => {
        document.getElementById("attack").style.backgroundPosition = `-${position}px 0px`
        if(position < 864) { 
        position = position + 108
        } else {
            attackArt.style.display = 'none'
            clearInterval(attack)}
    }, interval)   
}

let knightSlash
function animateKnightSlash() {
    let mainChar = document.querySelector("#image")
    mainChar.style.display = 'none'
    let knightSlashArt = document.querySelector("#knightSlash")
    knightSlashArt.style.display = 'block'
    let position = 120
    const interval = 250
    knightSlash = setInterval (() => {
        document.getElementById("knightSlash").style.backgroundPosition = `-${position}px 0px`
        if(position < 360) { 
        position = position + 120
        } else {
            mainChar.style.display = 'block'
            knightSlashArt.style.display = 'none'
            clearInterval(knightSlash)}
    }, interval)   
}


function stopAnimate() {
    clearInterval(animation);
    }

class Knight {
    constructor(health,attack,defense) {
        this.health = 10
        this.attack = 2
        this.defense = 0
    }
}

class Enemy {
    constructor(health,attack,defense) {
        this.health = health
        this.attack = attack - defense
        this.defense = defense
    }
}

class Player {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    start() {
        animateScript()
        let mainChar = document.querySelector("#image")
        mainChar.style.display = 'block'
    }
    explore() {
        let mainChar = document.querySelector("#image")
        mainChar.style.display = 'block'
    }
    hide() {
        moveSound.play()
        let mainChar = document.querySelector("#image")
        mainChar.style.display = 'none'
    }
}

let p1 = new Player(Player.x,Player.y,Player.w,Player.h)
let char = new Knight
let skeleton = new Enemy(5,1,0)
let skeletonTwo = new Enemy(3,2,0)
let skeletonThree = new Enemy(3,1,0)
let skeletonFour = new Enemy(10,1,0)
let skeletonFive = new Enemy(5,2,0)

class transition {
    constructor(x,y,w,h) {
        this.x = 0
        this.y = 0
        this.w = canvas.width
        this.h = 0
    }
    draw() {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    fadeOut() {
        this.h += 5
    }
    reset() {
        this.h = 0
    }
}
let fade = new transition

function disable() {
 document.onkeydown = function (e) { return false }
}
function enable() {
    document.onkeydown = function (e) { return true }
}
function blueRoomMove() {
    let myInterval = setInterval(() => {
        fade.draw()
        fade.fadeOut()
    }, 10)  
    setTimeout(() => {
        clearInterval(myInterval)
        fade.reset() 
        stageGreen()}, 1300)
}

function stageGreen(){
    if(blueCount > 10 && (Math.random()*10) > 8.5) {
        randomRoomGreen()
    } else {
        randomRoom2()
    }
}

function greenRoomMove() {
    let myInterval = setInterval(() => {
        fade.draw()
        fade.fadeOut()
    }, 10)  
    setTimeout(() => {
        clearInterval(myInterval)
        fade.reset() 
        stageYellow()}, 1300)
}

function stageYellow() {
    if(greenCount > 10 && (Math.random()*10) > 8.5) {
        randomRoomYellow()
    } else {
        randomRoomGreen()
    }
}

function yellowRoomMove() {
    let myInterval = setInterval(() => {
        fade.draw()
        fade.fadeOut()
    }, 10)  
    setTimeout(() => {
        clearInterval(myInterval)
        fade.reset() 
        stageExit()}, 1300)
}

function stageExit() {
    if(yellowCount > 10 && (Math.random()*10) > 8.5) {
        exitRoom()
    } else {
        randomRoomYellow()
    }
}
function tutorialEncounter(){
    setTimeout(() => {
    skelOne.style.display = 'block'
    setTimeout(() => {
        attackDefend()
    },1000)
    },1300)
}
function spawnSkeleton() {
    return skeleton
}
function blueRanEncounter() {
    let ranMonster = Math.floor(Math.random()*10+1)
    switch(ranMonster) {
        case 1:
            ranMon = skeleton
            setTimeout(() => {
            skelOne.style.display = 'block'
            setTimeout(() =>)
        })
        case 2:
            ranMon = skeletonTwo
            skelTwo.style.display = 'block'
        case 3:
            ranMon = skeletonThree
            skelThree.style.display = 'block'
        case 4:
            ranMon = skeletonFour
            skelFour.style.display = 'block'
        case 5:
            ranMon = skeletonFive
            skelFive.style.display = 'block'
        case 6:
            enable()
            blueRoomSelector()
        case 7:
            enable()
            blueRoomSelector()
        case 8:
            enable()
            blueRoomSelector()
        case 9:
            enable()
            blueRoomSelector()
        case 10:
            enable()
            blueRoomSelector()
    }
}
function attackDefend() {
    animateKnightSlash()
    setTimeout(() => {
        animateSlash()
        setTimeout(() => {
            arrowKeysTwo.style.display = 'block'
            tutorialBattle.style.display = 'block'
            skeleton.health = skeleton.health - char.attack
            lifeCalc()
            if(battle === true) {
                enable()
                document.onkeydown = function() {
                    switch(event.code) {
                        case "ArrowUp":
                            playerBlock = 0
                            console.log(playerDefend)
                            defendCalc()
                            disable()
                            break
                        case "ArrowLeft":
                            playerBlock = 1
                            defendCalc()
                            disable()
                            break
                        case "ArrowRight":
                            playerBlock = 2
                            defendCalc()
                            disable()
                            break
                    }
                }
            }
        },350)
    }, 500)

}

function defendCalc() {
    let enemyAttack = Number(Math.floor(Math.random()*3))
    if(enemyAttack === playerBlock) {
        mainChar.style.display = 'none'
        playerDefend.style.display = 'block'
        setTimeout(() => {
            playerDefend.style.display = 'none'
            mainChar.style.display = 'block'
            attackDefend()
        },1500)
    } else {
        animateAttack()
        char.health = char.health + char.defense - skeleton.attack
        setTimeout(() => {
            attackDefend()
    },1500)
}
}
function lifeCalc() {
    if(char.health <= 0) {
        alert("Game Over!")
        window.location.reload()
    } else if(skeleton.health <= 0) {
        skelOne.style.display = 'none'
        battle = false
        arrowKeysTwo.style.display = 'none'
        tutorialBattle.style.display = 'none'
        enable()
        blueRoomSelector()
    } else {
        battle=true
    }
}

function randomRoom() {
    let ran = Math.floor((Math.random()*4)+1)
    switch(ran) {
        case 1:
            blueCount ++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueAll,0,0,700,500)
            p1.start()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        disable() 
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()                                                                          
                        break
                    case "ArrowLeft":
                        disable()
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()                        
                        break
                    case "ArrowRight":
                        disable() 
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                }
            }
            break
        case 2:
            blueCount ++
            ctx.clearRect(0,0,700,500)
            // blueLeftRight.onload = function () {
            ctx.drawImage(blueLeftRight,0,0,700,500)
            // }
            p1.start()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        disable()
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                    case "ArrowRight":
                        disable() 
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                }
            }
            break
        case 3:
            blueCount++
            ctx.clearRect(0,0,700,500)
            // blueUpLeft.onload = function () {
            ctx.drawImage(blueUpLeft,0,0,700,500)
            // }
            p1.start()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        disable()            
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                    case "ArrowLeft":
                        disable()
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break

                }
            }
            break
        case 4:
            blueCount++
            ctx.clearRect(0,0,700,500)
            // blueUpRight.onload = function () {
            ctx.drawImage(blueUpRight,0,0,700,500)
            // }
            p1.start()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        disable()                   
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                    case "ArrowRight":
                        disable()
                        blueRoomMove()
                        p1.hide()
                        tutorial.style.display = 'none'
                        arrowKeys.style.display = 'none'
                        tutorialEncounter()
                        break
                }
            }
            break
        }
    }
    function randomRoomGreen() {
        let ran = Math.floor((Math.random()*4)+1)
        switch(ran){
        case 1:
            greenCount ++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenAll,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        greenRoomMove()
                        p1.hide()
                        break
                    case "ArrowLeft":
                        greenRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        greenRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 2:
            greenCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenLeftRight,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        greenRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        greenRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 3:
            greenCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenUpLeft,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        greenRoomMove()
                        p1.hide()
                        break
                    case "ArrowLeft":
                        greenRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 4:
            greenCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenUpRight,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        greenRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        greenRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        }
    }
    function randomRoomYellow() {
        let ran = Math.floor((Math.random()*4)+1)
        switch(ran){
        case 1:
            yellowCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowAll,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        yellowRoomMove()
                        p1.hide()
                        break
                    case "ArrowLeft":
                        yellowRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        yellowRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 2:
            yellowCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowLeftRight,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        yellowRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        yellowRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 3:
            yellowCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowUpLeft,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        yellowRoomMove()
                        p1.hide()
                        break
                    case "ArrowLeft":
                        yellowRoomMove()
                        p1.hide()
                        break
                }
            }
            break
        case 4:
            yellowCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowUpRight,0,0,700,500)
            p1.explore()
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        yellowRoomMove()
                        p1.hide()
                        break
                    case "ArrowRight":
                        yellowRoomMove()
                        p1.hide()
                        break
                }
            }
    }
}
function blueRoomAll() {
document.onkeydown = function() {
    switch(event.code) {
        case "ArrowUp":
            blueRoomMove()
            p1.hide()
            break
        case "ArrowLeft":
            blueRoomMove()
            p1.hide()
            break
        case "ArrowRight":
            blueRoomMove()
            p1.hide()
            break
    }
}
}
function blueRoomLeftRight() {
document.onkeydown = function() {
    switch(event.code) {
        case "ArrowLeft":
            blueRoomMove()
            p1.hide()
            break
        case "ArrowRight":
            blueRoomMove()
            p1.hide()
            break
    }
}
}
function blueRoomUpLeft() {
document.onkeydown = function() {
    switch(event.code) {
        case "ArrowUp":     
            blueRoomMove()
            p1.hide()
            break
        case "ArrowLeft":
            blueRoomMove()
            p1.hide()
            break
    }
}
}
function blueRoomUpRight() {
document.onkeydown = function() {
    switch(event.code) {
        case "ArrowUp":
            blueRoomMove()                   
            p1.hide()
            break
        case "ArrowRight":
            blueRoomMove()
            p1.hide()
            break
    }
}
}
function blueRoomSelector() {
    switch(room) {
        case "all":
            blueRoomAll()
            break
        case "leftRight":
            blueRoomLeftRight()
            break
        case "upLeft":
            blueRoomUpLeft()
            break
        case "upRight":
            blueRoomUpLeft()
            break
    }
}
function randomRoom2() {
    let ran = Math.floor((Math.random()*4)+1)
    switch(ran) {
        case 1:
            disable()
            blueCount++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueAll,0,0,700,500)
            p1.explore()
            room = "all"
            break            
        case 2:
            disable()
            blueCount ++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueLeftRight,0,0,700,500)
            p1.explore()
            room = "leftRight"
            break
        case 3:
            disable()
            blueCount ++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueUpLeft,0,0,700,500)
            p1.explore()
            room = "upLeft"
            break
        case 4:
            disable()
            blueCount ++
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueUpRight,0,0,700,500)
            p1.explore()
            room = "upRight"
            console.log('hi')
            enable()
            break
            }
}
function victory() {
    myMusic.pause()
    victorySound.play()
    ctx.clearRect(155,150,410,200)
    ctx.fillStyle = 'black'
    ctx.fillRect(155,150, 410, 200)
    ctx.font = '60px copperplate'
    ctx.fillStyle = 'brown'
    ctx.fillText(`You escaped!`, 165, 250)
    let button2 = document.querySelector("#tryAgain")
    button2.style.display = 'block'
    button2.addEventListener("click",function(){
        console.log('hi')
        window.location.reload()
        })    
    }    
function exitRoom() {
    ctx.clearRect(0,0,700,500)
        ctx.drawImage(exitOne,0,0,700,500)
        document.onkeydown = function() {
            if(event.code === 'ArrowUp'){
                let mainChar = document.querySelector("#image")
                mainChar.style.display = 'none'
                ctx.clearRect(0,0,700,500)
                    ctx.drawImage(exitTwo,0,0,700,500)
                    setTimeout(() => {  victory(); }, 1000); 
            }
}
}
