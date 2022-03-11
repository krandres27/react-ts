import addNumbers, {
  addStrings,
  format,
  printFormat,
  fetchData,
  introduce,
  getName,
  printToFile,
  arrayMutate,
} from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings("Carlos"));
console.log(format("Number", 2));
printFormat("Number", 2);
fetchData("https://api.testuri").then((res) => console.log(res));
console.log(introduce("Hello and welcome", "Andrés", "Carlos"));
console.log(getName({}));
printToFile("Hello", (newText) => console.log(newText));
console.log(arrayMutate([1,2,3], (number) => `number is ${number}`))
