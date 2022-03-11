// default module export
function addNumbers(a: number, b: number): number {
  return a + b
}
export default addNumbers

// named export
// default values for params
export const addStrings = (str1: string, str2: string = 'fallback'): string => str1 + str2

// union types
export const format = (title: string, param: string | number): string => `${title} is ${param}`

// void functions
export const printFormat = (title: string, param: string | number): void => console.log(`${title} is ${param}`)

// Promise functions
export const fetchData = (url: string): Promise<string> => Promise.resolve(`data from imaginary server at ${url}`)

// rest paramaters
export const introduce = (salutation: string, ...names: string[]): string => `${salutation}, ${names.join(', ')}`

// Nullish coalescing operator and optional chaining
export const getName = (user: {first?: string, last?: string}): string => `${user?.first ?? 'Carlos'} ${user?.last ?? 'Andrés'}`;

// HOF
export function printToFile(text: string, callback: (newText: string) => void): void {
  const saySomethingElse = `${text}, something else`
  callback(saySomethingElse)
}

export function arrayMutate(numbers: number[], mutate: (number: number) => string): string[] {
  return numbers.map(number => mutate(number))
}

// mutate function can also be used by defining a type
type MutationFunction = (number: number) => string
export const arrayMutate2 = (numbers: number[], mutate: MutationFunction): string[] => {
  return numbers.map(number => mutate(number))
}
