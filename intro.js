const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

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

function randomRoom() {
    let ran = Math.floor((Math.random()*12)+1)
    switch(ran) {
        case 1:
            ctx.clearRect(0,0,700,500)
            blueAll.onload = function () {
            ctx.drawImage(blueAll,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 2:
            ctx.clearRect(0,0,700,500)
            blueLeftRight.onload = function () {
            ctx.drawImage(blueLeftRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 3:
            ctx.clearRect(0,0,700,500)
            blueUpLeft.onload = function () {
            ctx.drawImage(blueUpLeft,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break

                }
            }
            break
        case 4:
            ctx.clearRect(0,0,700,500)
            blueUpRight.onload = function () {
            ctx.drawImage(blueUpRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 5:
            ctx.clearRect(0,0,700,500)
            greenAll.onload = function () {
            ctx.drawImage(greenAll,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 6:
            ctx.clearRect(0,0,700,500)
            greenLeftRight.onload = function () {
            ctx.drawImage(greenLeftRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 7:
            ctx.clearRect(0,0,700,500)
            greenUpLeft.onload = function () {
            ctx.drawImage(greenUpLeft,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                }
            }
            break
        case 8:
            ctx.clearRect(0,0,700,500)
            greenUpRight.onload = function () {
            ctx.drawImage(greenUpRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 9:
            ctx.clearRect(0,0,700,500)
            yellowAll.onload = function () {
            ctx.drawImage(yellowAll,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 10:
            ctx.clearRect(0,0,700,500)
            yellowLeftRight.onload = function () {
            ctx.drawImage(yellowLeftRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 11:
            ctx.clearRect(0,0,700,500)
            yellowUpLeft.onload = function () {
            ctx.drawImage(yellowUpLeft,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                }
            }
            break
        case 12:
            ctx.clearRect(0,0,700,500)
            yellowUpRight.onload = function () {
            ctx.drawImage(yellowUpRight,0,0,700,500)
            }
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
    }
}
function randomRoom2() {
    let ran = Math.floor((Math.random()*12)+1)
    switch(ran) {
        case 1:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueAll,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 2:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueLeftRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 3:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueUpLeft,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                }
            }
            break
        case 4:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(blueUpRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 5:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenAll,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 6:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenLeftRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 7:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenUpLeft,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                }
            }
            break
        case 8:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(greenUpRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 9:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowAll,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 10:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowLeftRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowLeft":
                        randomRoom2()
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
            break
        case 11:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowUpLeft,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":                   
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        randomRoom2()
                        break
            }
        }
            break
        case 12:
            ctx.clearRect(0,0,700,500)
            ctx.drawImage(yellowUpRight,0,0,700,500)
            document.onkeydown = function() {
                switch(event.code) {
                    case "ArrowUp":
                        randomRoom2()
                        break
                    case "ArrowLeft":
                        break
                    case "ArrowRight":
                        randomRoom2()
                        break
                }
            }
    }
}
randomRoom()