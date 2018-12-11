class Box{
    constructor(pos, r) {
        // pos is a vector
        this.pos = pos
        this.r = r
    }
    generate() {
        let newBoxes = []
        let newR = this.r / 3 
        let e = this
        for (let i = -1; i < 2; i++) {
            let newZ = e.pos.z + i * newR
            for (let j = -1; j < 2; j++) {
                let newY = e.pos.y + j * newR
                for (let k = -1; k < 2; k++) {
                    let sum = abs(i) + abs(j) + abs(k)
                    log(sum)
                    // 算出每个子 Box 的中心点
                    if (sum > 1) {
                        let newX = e.pos.x + k * newR
                        let posTemp = createVector(newX, newY, newZ)
                        let b = new Box(posTemp, newR)
                        newBoxes.push(b)
                    }
                }
            }
        }
        return newBoxes
    
    }

    show() {
        push()
        let pos = this.pos
        translate(pos.x, pos.y, pos.z)
        stroke(255);
        // noStroke();
        // noFill();
        fill(2);
        box(this.r)
        pop()
    }
}