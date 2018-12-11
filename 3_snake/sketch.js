let f = null
let s = null
let scl = 20

// 学习到用 scl 画图
function createPos(x, y, scl) {
	pos = createVector(x, y)
	pos.mult(scl)
	return pos
}

function setup() {
	createCanvas(400, 400)
	pickLocation()
	let pos = createPos(0, 0, scl)
	let spd = new Speed(1, 1) 
	s = new Snake(pos, scl, spd)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}

function pickLocation() {
	let cols = width / scl
	let rows = height / scl
	x = random(0, cols)
	y = random(0, rows)
	pos = createPos(x, y, scl) 
	if(!f) {
		// 初始
		f = new Food(pos, scl)
	}
	f.pos = pos
}
function draw() {
	background(51)
	s.draw()
	f.draw()
	update()
}

function update() {
	s.update()
}