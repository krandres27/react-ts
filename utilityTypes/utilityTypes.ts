interface MyUser {
  name: string,
  id: string;
  email?: string
}

// partial
type partialUser = Partial<MyUser>
// required
type requiredlUser = Required<MyUser> // all keys are required
// pick
type picklUser = Pick<MyUser, 'email' | 'id'> // picking just needed keys
// record
type recordlUser = Record<string, MyUser> // picking just needed keys


const updateUser = (user: MyUser, overrides: partialUser): MyUser => {
  return {
    ...user,
    ...overrides,
  }
}

console.log(updateUser(
  { name: 'Carlos', id: '01' },
  { id: '007', email: 'krandres27@gmail.com' }
))

// record<Keys, Type>
interface dogBreedDetails {
  height: 'Tall' | 'Medium' | 'Small'
}

type DogBreds = 'labrador' | 'Shih Tzu' | 'Golden'

const cats: Record<DogBreds, dogBreedDetails> = {
  "Shih Tzu": { height: "Small" },
  labrador: { height: "Medium" },
  Golden: { height: "Medium" }
}
