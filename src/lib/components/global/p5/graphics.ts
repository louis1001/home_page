import p5 from 'p5?client'

function commonSketch(p: p5, setup: (isReduced: boolean)=>number|void) {
    // @ts-ignore
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight)

        p.frameRate(5);

        if (isReduced) {
            p.noLoop()
        }

        const repetitions = setup(isReduced) ?? 0

        for(let i = 0; i < repetitions; i++) p.draw()
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)

        const repetitions = setup(isReduced) ?? 0

        for(let i = 0; i < repetitions; i++) p.draw()
    }
}

function scribbledLines(p: p5) {
    let lastPosition: any
    commonSketch(p, (reduced) => {
        lastPosition = p.createVector(
            p.random(0, p.width),
            p.random(0, p.height),
        )

        if (reduced) {
            return 500
        }
    })

    p.draw = () => {
        p.stroke(p.random(0, 255))
        p.strokeWeight(5)

        const movement = p.createVector(
            p.random(-100, 100),
            p.random(-100, 100)
        )
        
        const result = p.createVector(
            lastPosition.x + movement.x,
            lastPosition.y + movement.y
        )

        if (result.x > p.width || result.x < 0) {
            result.x = lastPosition.x + -movement.x
        }

        if (result.y > p.height || result.y < 0) {
            result.y = lastPosition.y + -movement.y
        }

        const prevPosition = p.createVector(lastPosition.x, lastPosition.y)

        lastPosition = result

        p.line(prevPosition.x, prevPosition.y, lastPosition.x, lastPosition.y)
    }
}

function bubbleDots(p: p5) {
    commonSketch(p, (reduced)=>{
        for (let i = 0; i < 100; i++) p.draw()

        if (reduced) {
            return 50
        }
    })

    p.draw = () => {
        const x = p.random(0, p.width)
        const y = p.random(0, p.height)
        const sz = p.random(p.width * 0.01, p.width * 0.08)
        
        p.noStroke()
        p.fill(p.random(100, 255))

        p.circle(x, y, sz)
    }
}

const sketches = [
    scribbledLines,
    bubbleDots
]

let sketch: p5|null = null

export const load = () => {
    return {
        init() {
            const node = document.getElementById('canvas-container') ?? undefined
            const randomSketch = Math.floor(Math.random() * sketches.length)
            sketch = new p5(sketches[randomSketch], node)
        }
    }
};