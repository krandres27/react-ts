// myforEach
function myforEach<T>(targetArray: T[], callback: (item: T) => void): void{
  targetArray.reduce((prev, current) => {
    callback(current)
    return prev
  }, undefined)
}

myforEach([1,2,3], (item) => console.log(`Value is ${item}`))
myforEach([{sayHello: 'Hola'}, {sayHello: 'Hello'}], (item) => console.log(`Value is ${item.sayHello}`))

// myMap
function myMap<T, K>(targetArray: T[], callback: (item: T) => K): K[] {
  return targetArray.reduce((prev: K[], curr: T) => {
    return [...prev, callback(curr)]
  }, [])
}

console.log(myMap([1,2,3], (item) => item * 10))
console.log(myMap([{value: 1},{value: 2},{value:3}], ({ value }) => ({by10: value * 10})))

// myFilter
const myFilter = <T>(targetArray: T[], callback: (item: T) => boolean) => {
  return targetArray.reduce((prev: T[], curr: T) => {
    return callback(curr) ? [...prev, curr] : [...prev]
  }, [])
}

console.log(myFilter([1,2,3], (item) => item >= 2))