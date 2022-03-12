// Pluck from an object
const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key]);
};

const dogs = [
  { name: 'Bruno', age: 11 },
  { name: 'Lukas', age: 10 },
];

console.log(pluck(dogs, 'age'));

// event map
 interface BaseEvent {
   time: number;
   user: string;
 }

 interface EventMap {
   addToCart: BaseEvent & { quantity: number, productId: string},
   checkout: BaseEvent
 }

 function logEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data])
 }

 logEvent('checkout', {
  time: 0,
  user: ""
})
