// enums
enum LoadingState {
  loading = 'loading',
  loaded = 'loaded',
}

const isLoading = (state: LoadingState): boolean => state === LoadingState.loading 
console.log(isLoading(LoadingState.loaded))

// literal types
function loopTreshold(loopTimes: 1 | 2 | 3): number[] {
  const newArray = []
  
  for (let loop = 0; loop < loopTimes; loop++) {
    newArray.push(loop)
  }

  return newArray
}

console.log(loopTreshold(2))

// string literal types with function overloading
function sendEvent(name: 'addToCart', data: { produuctId: number}): void
function sendEvent(name: 'checkout', data: { cartCount: number}): void
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent('addToCart', { produuctId: 2 })