const log = console.log.bind(console)

let a = 0.1
let sponge = []
function setup() {
	createCanvas(400, 400, WEBGL);
	// as of p5.js 0.6.0, normal material is no longer the default and
	// has to be explicitly selected.
	normalMaterial();

	pos = createVector(0, 0, 0)
	let b = new Box(pos, 200)
	sponge.push(b)
}

function mousePressed() {
	// 
	let next = []
	for(let i = 0; i < sponge.length; i++) {
		let b = sponge[i]
		let newBoxes = b.generate()
		log('newBoxes', newBoxes.length)
		next = next.concat(newBoxes)
		// next = newBoxes
		log('next', next.length)
	}

	sponge = next
}
function draw() {
	// put drawing code here
	background(51)
	rotateX(a)
	rotateY(a * 0.4)
	rotateZ(a * 0.1)
	for (let i = 0; i < sponge.length; i++) {
		const e = sponge[i]
		e.show()
	}
	// 我感觉 update 不应该出现在这里
	a += 0.01
}