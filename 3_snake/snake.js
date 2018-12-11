class Speed {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}
class Snake {
    constructor(pos, scl, spd) {
        this.pos = pos
        this.scl = scl 
        this.spd = spd
    }
    update() {
        let pos = this.pos
        this.pos.x += this.spd.x
    }
    draw() {
        fill('white')
        let pos = this.pos
        rect(pos.x, pos.y, this.scl, this.scl)
        noFill()
    }
    dir(x, y) {
        this.spd.x += x
        this.spd.y += y
    }
}

class Food {
    constructor(pos, scl) {
        this.pos = pos
        this.scl = scl
    }
    draw() {
        let pos = this.pos
        fill('red')
        rect(pos.x, pos.y, this.scl, this.scl)
        noFill()
    }
}