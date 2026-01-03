// @ts-ignore
import p5 from 'p5?client'

// A common setup function for all sketches
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

    let debounceResizeActionId: number|null = null

    p.windowResized = () => {
        if (debounceResizeActionId !== null) {
            clearTimeout(debounceResizeActionId)
        }

        debounceResizeActionId = setTimeout(() => {
            p.resizeCanvas(p.windowWidth, p.windowHeight)
            const repetitions = setup(isReduced) ?? 0

            for(let i = 0; i < repetitions; i++) p.draw()
        }, 300)
    }
}

// Different sketch implementations
function scribbledLines(p: p5) {
    let lastPosition: any
    commonSketch(p, (reduced) => {
        lastPosition = p.createVector(
            p.random(0, p.width),
            p.random(0, p.height),
        )

        if (reduced) {
            return 500
        } else {
            return 200
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

// Bubble sketches
function bubbleDots(p: p5) {
    commonSketch(p, (reduced)=>{

        if (reduced) {
            return 150
        } else {
            return 100
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

// Bubble squares
function bubbleSquares(p: p5) {
    commonSketch(p, (isReduced) => {
        return isReduced ? 150 : 10
    })

    p.draw = () => {
        p.noStroke()
        p.fill(p.random(100, 255))

        const x = p.random(0, p.width)
        const y = p.random(0, p.height)
        const sz = p.random(p.width * 0.01, p.width * 0.08)

        p.rect(x, y, sz, sz)
    }
}

// Mouse follow sketch
function mouseFollow(p: p5) {
    commonSketch(p, (isReduced) => {
        if (!isReduced) {
            p.frameRate(20)
        }
        
        return isReduced ? 50 : 1
    })

    let staleForXFrames = 0

    p.draw = () => {
        if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
            staleForXFrames++
        } else {
            staleForXFrames = 0
        }

        p.noStroke()
        p.fill(p.random(100, 255))

        const baseVariation = 0.05
        const variation = baseVariation + (staleForXFrames * 0.001)

        const sz = p.random(baseVariation * 0.2, p.width * baseVariation * 0.8)

        const x = p.mouseX + p.random(-p.width * variation, p.width * variation)
        const y = p.mouseY + p.random(-p.height * variation, p.height * variation)

        p.circle(x, y, sz)
    }
}

function fractalTree(p: p5) {
    commonSketch(p, (isReduced) => {
        p.strokeWeight(2)
        if (!isReduced) {
            p.frameRate(5)
        }
        
        return isReduced ? 20 : 8
    })

    type Branch = {origin: p5.Vector, radius: number, length: number};

    function numberOfBranches(): number {
        return p.random(2, 5)
    }

    const MAX_BRANCHES = 3000;
    let BASE_LENGTH = p.width;
    
    function makeBranch(origin: p5.Vector, radius: number, length: number): Branch {
        return {
            origin,
            radius,
            length
        }
    }

    function drawBranch(branch: Branch) {
        const endX = branch.origin.x + Math.cos(branch.radius) * branch.length
        const endY = branch.origin.y + Math.sin(branch.radius) * branch.length

        // Move from topLeft to center
        const centerOffsetX = p.width / 2
        const centerOffsetY = p.height / 2

        p.line(branch.origin.x + centerOffsetX, branch.origin.y + centerOffsetY, endX + centerOffsetX, endY + centerOffsetY)
    }

    let latestBranches: Branch[] = [
        {origin: p.createVector(), radius: p.random(0, Math.PI * 2), length: BASE_LENGTH}
    ]

    p.draw = () => {
        BASE_LENGTH = p.width / 20

        let newBranches: Branch[] = []
        for (let branch of latestBranches){
            const branchNumber = numberOfBranches()

            for (let i = 0; i < branchNumber; i++) {
                p.stroke(p.random(100, 255))
                const newOrigin = p.createVector(
                    branch.origin.x + Math.cos(branch.radius) * branch.length,
                    branch.origin.y + Math.sin(branch.radius) * branch.length
                )
                const newLength = branch.length * p.random(1, 1.4)
                const newRadius = branch.radius + p.random(-Math.PI / 6, Math.PI / 6)
                const newBranch = makeBranch(newOrigin, newRadius, newLength)

                drawBranch(newBranch)

                newBranches.push(newBranch)
            }
        }

        latestBranches = newBranches

        if (latestBranches.length > MAX_BRANCHES) {
            latestBranches = [
                {origin: p.createVector(), radius: p.random(0, Math.PI * 2), length: BASE_LENGTH}
            ]
        }   
    }
}

const sketches = [
    scribbledLines,
    bubbleDots,
    bubbleSquares,
    mouseFollow,
    fractalTree
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