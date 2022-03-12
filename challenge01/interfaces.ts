import houses from './feed'

interface House {
  name: String,
  planets: String | String[],
}

interface HouseWithID extends House {
  id: number,
}

function findHouses(input: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
  const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input
  const housesWithId: HouseWithID[] = houses.map((house) => ({ ...house, id: houses.indexOf(house) }))
  return filter ? housesWithId.filter(house => filter(house)) : housesWithId
}
  
  console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  );
 
  console.log(
    findHouses(houses, ({ name }) => name === "Harkonnen")
  );
