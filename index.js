function getRandomArbitrary(min, max) {

  return Math.random() * (max - min) + min;
}
const arr1 = [];
const amount = 10;
const min=-10;
const max=10;
  

for(let i=0; i<amount; i++){
arr1.push(Math.round(getRandomArbitrary(min, max)));
}
console.log(arr1);
const negArr = arr1.filter(isNegative);


const posArr = arr1.filter(isPositive);

function isPositive(element){
  return element>0 || element===0;
}
function isNegative(element){
  return element<0 || element===-0;
}
console.log(negArr);
console.log(posArr);

const oddArr = arr1.filter(isOdd);
function isOdd(element){
  return element%2===0;
}
const evenArr = arr1.filter(isEven);
function isEven(element){
  return element%2===1};
  console.log(evenArr);
  console.log(oddArr);