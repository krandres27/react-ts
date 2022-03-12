function simpleStringState(initial: string): [() => string, (v: string) => void] {
  let value: string = initial
  return [() => value, (newValue) => value = newValue]
}

const [test, setTest] = simpleStringState('hello')
console.log(test())
setTest('hello2')
console.log(test())