const log = console.log.bind(console)
const width = 400
const height = 400

class Start {
    constructor(width, height) {
        // x y 是初始位置
        this.x = random(-width / 2, width / 2)
        this.y = random(-height / 2, height / 2)
        this.z = random(width)
        this.r = random(1, 4)

        this.pz = this.z
        
    }
    draw() {
        fill('white')
        noStroke()
        let x = (this.x / this.z) * width
        let y = (this.y / this.z) * height
        let r = (this.r / this.z) * 100
        let px = (this.x / this.pz) * width
        let py = (this.y / this.pz) * height
        stroke(126)
        line(px, py, x, y)
        ellipse(x, y, r, r)
    }
    update() {
        let speed = mouseX / windowWidth * 20
        this.pz = this.z
        this.z -= speed

        if(this.z < 0) {
            this.reset()
        }

    }
    reset() {
        this.x = random(-width / 2, width / 2)
        this.y = random(-height / 2, height / 2)
        this.z = random(width)
        this.r = random(1, 4)
        this.pz = this.z
    }
}

let stars = new Array(400)
log('[*]', 'start')

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Start(width, height)
    }
}

function draw() {
    background('black')
    log('[*]', 'draw stars')
    translate(width / 2, height / 2)
    for(let i = 0; i < stars.length; i++) {
        stars[i].draw()
        stars[i].update()
        // log(mouseX)
    }
}

