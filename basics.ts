// Primitives types
let user: string = 'Andres'
let isLogged : boolean= true
let myNumber: number = 10

// Regex types
let myRegex: RegExp = /foo/

// Arrays
let myArray: string[] = ['1', '2']
let mySecondArray: Array<number> = [1,2,3]

// objects
const myPerson: {
  name: string,
  lastname?: string,
  age: number,
} = {
  name: 'Andrés',
  age: 30
}

// to reuse a definition an interface or type can be created
interface Person {
  name: string,
  lastname?: string,
  age: number,
}

const mySecondPerson: Person = {
  name: 'Andrés',
  lastname: 'González',
  age: 30,
}

// Objects as maps (Records)
const values: Record<number, string> = {
  100: 'high',
  10: 'low'
}

values[50] = 'Medium'
console.log(values[100])