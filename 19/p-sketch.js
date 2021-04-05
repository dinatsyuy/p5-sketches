let font, h1, h2, h2r, pLine, pLine2
const loopDuration = 4 * 60

function preload() {
  font = loadFont('BauhausStd-Demi.otf')
}

function setup() {
  createCanvas(1080, 1080)

  rectMode(CENTER)

  h1 = font.textToPoints('d', 0, 0, 1000, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })
  h1[h1.length] = h1[0]
    
  h2 = font.textToPoints('D', 0, 0, 1000, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })
  h2[h2.length] = h2[0]
  
  padArray(h1, h2)
  h2r = randomiseArray(h2)
  
  pLine = getPoints(h2)
  pLine2 = getPoints(h1)
}

function draw() {
  
  blendMode(BLEND)
  background('rgba(0, 0, 0, 0.1)')
  
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  
  translate(width / 4.9, width / 1.25, 0)
  h1.forEach((point, index) => {
    let startX = point.x
    let endX = h2r[index].x 
    
    let startY = point.y
    let endY = h2r[index].y 
    
    let diffX = endX - startX
    let diffY = endY - startY
    
    let cv = map(t, index * 0.00025, 1 + index * 0.00025, 0, 1)
    cv = map(cv, 0, 1, 0, TWO_PI)
    
    let wave = 1 - (0.5 * (sin(cv) + 1))
    wave = sin(cv)
    
    const nx = -20 * wave
    const ny = -20 * wave
      
    push()
    fill(255, 255, 255, 255 - wave * 50)
    noStroke()
    square(startX + diffX * wave + nx * wave, startY + diffY * wave + ny * wave, 4)
    ellipse(startX - diffX * wave + nx * wave, startY - diffY * wave + ny * wave, 4)
    pop()
  })
}

// Pad point arrays so lengths match
function padArray(arr1, arr2) {  
  let arr1Len = arr1.length
  let arr2Len = arr2.length
  let diff = abs(arr1Len - arr2Len)

  if (arr1Len < arr2Len) {
    for (let i = 0; i < diff; i++) {
      arr1.push(arr1[floor(random(0, arr1Len))])
    }
  } else if (arr2Len < arr1Len) {
    for (let i = 0; i < diff; i++) {
      arr2.push(arr2[floor(random(0, arr2Len))])
    }
  }
}

// Randomise array
function randomiseArray(arr) {
   let arrLen = arr.length
   // Create copy of array in new mem address
   let arrCopy = [...arr]
   let arrShuffled = []
   for (let i = 0; i < arrLen; i++) {
     let index = floor(random(0, arrCopy.length))
     let removed = arrCopy.splice(index, 1)
     arrShuffled.push(removed[0])
   }
   return arrShuffled
}

function randGen(pointsArray) {
  let pStart = Math.floor(random(0, pointsArray.length))
  let pSteps = Math.floor(random(30, Math.floor(pointsArray.length / 5)))
  let pEnd = pStart + pSteps
  let pDir
  do {
  	pDir = Math.floor(random(-1, 2))
  } while (pDir === 0)
    
  return {pStart: pStart, pSteps: pSteps, pEnd: pEnd, pDir: pDir}
}

function getPoints(pointsArray) {
  let r = randGen(pointsArray)
  
  let points = pointsArray.slice(r.pStart, r.pEnd)
  if (r.pEnd > pointsArray.length) {
    points.push(pointsArray.slice(0, r.pEnd - pointsArray.length))
  }
  if (r.pDir === -1) {
    points.reverse()
  }
  
  return points
}
