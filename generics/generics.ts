
// Generic will infer the type passed to the function
function simpleStateUsingGenerics<T>(initial: T): [() => T, (v: T) => void] {
  let value: T = initial
  return [() => value, (newValue) => value = newValue]
}

// so now when using it, any type can be used
const [testGeneric, setTestGeneric] = simpleStateUsingGenerics('hello')
console.log(testGeneric())
setTestGeneric('hello2')
console.log(testGeneric())

const [testGeneric2, setTestGeneric2] = simpleStateUsingGenerics(3)
console.log(testGeneric2())
setTestGeneric2(4)
console.log(testGeneric2())

// overriding infered generic type
const [testGeneric3, setTestGeneric3] = simpleStateUsingGenerics<string | null>(null)
console.log(testGeneric3())
setTestGeneric3('new string')
console.log(testGeneric3())

// example #1
interface Rank<RankItem> {
  item: RankItem,
  rank: number,
}

function ranker<RankItem>(items: RankItem[], rank:(item: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item)
  })).sort((a, b) => a.rank - b.rank)

  return ranks.map(item => item.item)
}

// then ranker can be used with any type
console.log(
  ranker(['hello', 'Bonjour', 'hola'], (item) => item.length)
)

interface soccerPlayer {
  name: string,
  overall: number,
}

const soccerPlayers: soccerPlayer[] = [
  {
    name: 'Cristiano Ronaldo',
    overall: 90
  },
  {
    name: 'Leo Messi',
    overall: 89
  },
]

console.log(
  ranker(soccerPlayers, (item) => item.overall)
)
