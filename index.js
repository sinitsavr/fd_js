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
//