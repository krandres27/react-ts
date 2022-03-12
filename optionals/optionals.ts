// Optional params
function printIngredients(quantity: string, ingredient: string, extra?: string ) {
  console.log(`${quantity} ${ingredient}, ${extra ? extra : ''}`);
}

// optional fields
interface User {
  id: string,
  info?: {
    email?: string
  }
}

function getEmail(user: User): string {
  return user?.info?.email ?? 'not email setted'
}

console.log(getEmail({ id: 'test' }))

// optional function callbacks
function addWithCallback(x: number, y: number, callback?: () => void): void {
  console.log(x, y)
  // only executes callback if it exists
  callback?.();
}