interface Coordinate {
  x: Number,
  y: Number
}

// first signature
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(str: string): Coordinate
function parseCoordinate(x: Number, y: number): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  if (typeof arg1 === 'object') {
    return {
      ...arg1 as Coordinate
    }
  } else if (typeof arg1 === 'string') {
    return (arg1 as string).split(',').reduce((newCoord, current) => {
      const [key, value] = current.split(':')
      return { ...newCoord, [key]: parseInt(value)}
    }, { x: 0, y: 0})
  } else {
    return {
      x: arg1 as number,
      y: arg2 as Number
    }
  }

}

console.log(parseCoordinate({ x: 30, y: 50}))
console.log(parseCoordinate("x:12,y:27"))
console.log(parseCoordinate(10, 20))